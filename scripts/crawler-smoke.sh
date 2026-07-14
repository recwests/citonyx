#!/usr/bin/env bash
set -uo pipefail

NOTIFY="${NOTIFY:-true}"

URLS=(
  "https://citonyx.com/"
  "https://citonyx.com/state-of-geo"
  "https://citonyx.com/learn"
  "https://citonyx.com/lab/leaderboard"
  "https://citonyx.com/llms.txt"
)

if [[ -n "${SMOKE_EXTRA_URL:-}" ]]; then
  URLS+=("$SMOKE_EXTRA_URL")
fi

UAS=(
  "GPTBot/1.0"
  "ClaudeBot/1.0"
  "PerplexityBot/1.0"
  "Google-Extended/1.0"
  "CCBot/2.0"
)

ROBOTS_URL="${ROBOTS_URL:-https://citonyx.com/robots.txt}"

failures=()

total=0
for url in "${URLS[@]}"; do
  for ua in "${UAS[@]}"; do
    total=$((total + 1))
    code=$(curl -s -L --max-redirs 3 -o /dev/null -w '%{http_code}' -A "$ua" --max-time 20 "$url" || echo 000)
    if [[ "$code" != "200" ]]; then
      failures+=("$ua | $url | $code")
    fi
  done
done

# REPO_DIR: compute from canonical script location (handles symlinks)
REPO_DIR="$(dirname "$(dirname "$(readlink -f "${BASH_SOURCE[0]}")")")"
ROBOTS_ETALON="$REPO_DIR/public/robots.txt"
# Assumption: this repo checkout is the source of truth for what's deployed.
# Live robots.txt should match public/robots.txt byte-for-byte.
# Any difference means deploy-lag or external tampering → CRITICAL.
# See experiments/sprint-crawler-smoke.md for full rationale.

tmp_live=""
cleanup() { [[ -n "$tmp_live" ]] && rm -f "$tmp_live"; }
trap cleanup EXIT

if [[ ! -f "$ROBOTS_ETALON" ]]; then
  failures+=("robots.txt эталон не найден: $ROBOTS_ETALON — мисконфиг смока")
else
  tmp_live="$(mktemp)"
  code=$(curl -s -L --max-redirs 3 --max-time 20 -w '%{http_code}' -o "$tmp_live" "$ROBOTS_URL" || echo 000)
  if [[ "$code" != "200" ]]; then
    failures+=("robots.txt fetch -> $code")
  else
    etalon_sha=$(sha256sum "$ROBOTS_ETALON" | awk '{print $1}')
    live_sha=$(sha256sum "$tmp_live" | awk '{print $1}')
    if [[ "$etalon_sha" != "$live_sha" ]]; then
      diff_out=$(diff "$ROBOTS_ETALON" "$tmp_live" 2>/dev/null | head -20)
      failures+=("robots.txt LIVE ≠ repo (public/robots.txt) — deploy-lag или ЧУЖОЕ изменение, проверить:"$'\n'"$diff_out")
    fi
  fi
fi

if [[ ${#failures[@]} -gt 0 ]]; then
  report=$'🕷️ Citonyx crawler smoke FAIL:\n'
  for f in "${failures[@]}"; do
    report+="$f"$'\n'
  done
  "$NOTIFY" -m "$report" -l critical
  exit 1
fi

echo "OK: $total checks passed"
exit 0
