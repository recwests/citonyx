#!/bin/bash
# Smoke test: every internal href in dist/ must resolve to an existing file
# Usage: bash scripts/smoke-hrefs.sh

set -euo pipefail

DIST="dist"
ERRORS=0

echo "🔍 Checking internal hrefs in $DIST..."

# Collect all hrefs first (avoid subshell pipe issue)
HREF_LIST=$(grep -roh 'href="/[a-z]\+/[^"]*"' "$DIST" 2>/dev/null | \
  sed 's|href="/|/|;s|"$||' | sort -u)

while read -r href; do
  [[ -z "$href" ]] && continue
  # Strip anchor: /learn/topic#anchor → /learn/topic
  filepath="$DIST${href%%#*}"
  if [ -f "$filepath" ]; then
    :
  elif [ -f "${filepath}/index.html" ]; then
    :
  elif [ -f "${filepath}.html" ]; then
    :
  elif [ -d "$filepath" ]; then
    :
  else
    echo "  ❌ DEAD LINK: $href → not found"
    ERRORS=$((ERRORS + 1))
  fi
done <<< "$HREF_LIST"

# Also check llms.txt links
if [ -f "$DIST/llms.txt" ]; then
  echo ""
  echo "🔍 Checking llms.txt links..."
  LLMS_LINKS=$(grep -oP 'https?://[^/]+(/\S+?)(?=[)\s]|$)' "$DIST/llms.txt" | \
    sed 's|https\?://[^/]*||' | grep '^/' | sort -u)
  while read -r href; do
    [[ -z "$href" ]] && continue
    filepath="$DIST${href%%#*}"
    if [ -f "$filepath" ] || [ -f "${filepath}/index.html" ] || [ -f "${filepath}.html" ] || [ -d "$filepath" ]; then
      :
    else
      echo "  ❌ llms.txt DEAD LINK: $href → not found"
      ERRORS=$((ERRORS + 1))
    fi
  done <<< "$LLMS_LINKS"
fi

if [ "$ERRORS" -gt 0 ]; then
  echo ""
  echo "❌ $ERRORS dead link(s) found!"
  exit 1
else
  echo ""
  echo "✅ All internal hrefs resolve to existing files."
fi
