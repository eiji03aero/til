#!/bin/bash

cmd=${1:-create-post}

root_dir=$(cd $(dirname $0); pwd)

template-post () {
  type=${1-summary}
  cat <<-EOF
<!--
{
  "type": "$type",
  "tags": ["grpahql"]
}
-->
# title
url

---

# Summary

# Content

# Thoughts

EOF
}

template-learn () {
  cat <<-EOF
<!--
{
  "type": "learn",
  "tags": ["algorithm"]
}
-->
# title

---

EOF
}

if [ $cmd = 'create-post' ]; then
  type="${2:-summary}"
  time=$(date '+%Y%m%d%H%M%S')
  filename="${time}.md"
  path="${root_dir}/posts/${filename}"

  if [ $type = "summary" ]; then
    template-post > "$path"
  elif [ $type = "learn" ]; then
    template-learn > "$path"
  fi

  vim "$path"

elif [ $cmd = 'build-data' ]; then
  node ./scripts/build-data.js
  echo built data.json

else
  echo unknown command $cmd
fi
