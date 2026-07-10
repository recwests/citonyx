#!/usr/bin/env bash
set -uo pipefail

NOTIFY="${NOTIFY:-/home/ilya/vault/gtd/scripts/notify.sh}"

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

CACHE_DIR="$HOME/.cache/citonyx"
ROBOTS_URL="https://citonyx.com/robots.txt"
ROBOTS_SHA="$CACHE_DIR/robots.sha"

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

mkdir -p "$CACHE_DIR"
response=$(curl -s -w '\n%{http_code}' --max-time 20 "$ROBOTS_URL")
code=$(echo "$response" | tail -1)
body=$(echo "$response" | sed '$d')
if [[ "$code" == "200" ]]; then
  current_sha=$(printf '%s' "$body" | sha256sum | awk '{print $1}')
  if [[ -f "$ROBOTS_SHA" ]]; then
    stored_sha=$(cat "$ROBOTS_SHA")
    if [[ "$current_sha" != "$stored_sha" ]]; then
      failures+=("robots.txt CHANGED")
    fi
  fi
  echo "$current_sha" > "$ROBOTS_SHA"
else
  failures+=("robots.txt fetch -> $code")
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
