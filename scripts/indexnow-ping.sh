#!/usr/bin/env bash
set -uo pipefail

KEY="14cc56ee300f1defb00bb7f841ab3777"
HOST="citonyx.com"

RANGE="${RANGE:-HEAD^..HEAD}"
files=$(git diff --name-only "$RANGE" 2>/dev/null) || {
  echo "IndexNow: git diff failed (likely shallow clone) — skipping"
  exit 0
}

[[ -z "$files" ]] && { echo "IndexNow: nothing to ping"; exit 0; }

declare -A urls
kb_changed=false

while IFS= read -r file; do
  [[ -z "$file" ]] && continue
  file="${file#"${file%%[![:space:]]*}"}"
  file="${file%"${file##*[![:space:]]}"}"

  if [[ "$file" == src/content/geo-practices/kb/*.md ]]; then
    kb_changed=true
    practice_type=""
    if [[ -f "$file" ]]; then
      practice_type=$(grep -m1 '^practice_type:' "$file" 2>/dev/null | sed 's/^practice_type:[[:space:]]*//; s/^"//; s/"$//; s/^'\''//; s/'\''$//; s/[[:space:]]*$//')
      practice_type=$(printf '%s' "$practice_type" | grep -E '^[a-z0-9-]+$' || true)
    fi
    if [[ -n "$practice_type" ]]; then
      urls["https://$HOST/learn/$practice_type"]=1
    fi
  elif [[ "$file" == src/data/post/*.md ]]; then
    slug="$(basename "$file" .md)"
    urls["https://$HOST/$slug"]=1
  elif [[ "$file" == src/data/state-of-geo.md ]] || [[ "$file" == src/pages/state-of-geo.astro ]]; then
    urls["https://$HOST/state-of-geo"]=1
  elif [[ "$file" == src/pages/index.astro ]]; then
    urls["https://$HOST/"]=1
  elif [[ "$file" == src/navigation.ts ]] || [[ "$file" =~ ^src/layouts/ ]]; then
    urls["https://$HOST/"]=1
  fi
done <<< "$files"

if [[ "$kb_changed" == true ]]; then
  urls["https://$HOST/learn"]=1
  urls["https://$HOST/learn/all"]=1
fi

url_list=()
for url in "${!urls[@]}"; do
  url_list+=("$url")
done

if [[ ${#url_list[@]} -eq 0 ]]; then
  echo "IndexNow: nothing to ping"
  exit 0
fi

url_list=("${url_list[@]:0:100}")

items=""
sep=""
for url in "${url_list[@]}"; do
  items+="${sep}\"${url}\""
  sep=","
done

payload='{"host":"'"$HOST"'","key":"'"$KEY"'","keyLocation":"https://'"$HOST"'/'"$KEY"'.txt","urlList":['"$items"']}'

payload_file=$(mktemp)
printf '%s' "$payload" > "$payload_file"

echo "IndexNow payload:"
echo "$payload" | python3 -m json.tool 2>/dev/null || echo "$payload"

result=$(curl -s -w '\n%{http_code}' -H 'Content-Type: application/json; charset=utf-8' -d @"$payload_file" https://api.indexnow.org/indexnow)
rm -f "$payload_file"

echo ""
echo "IndexNow response:"
echo "$result"

exit 0
