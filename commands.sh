#!/bin/bash

cmd=${1:-create-post}

root_dir=$(cd $(dirname $0); pwd)

template-post () {
  cat <<-EOF
<!--
{
  "tags": ["grpahql"]
}
-->
# title
url

# Summary

# Content

# Thoughts

EOF
}

if [ $cmd = 'create-post' ]; then
  time=$(date '+%Y%m%d%H%M%S')
  filename="${time}.md"
  path="${root_dir}/posts/${filename}"

  template-post > "$path"
  vim "$path"

elif [ $cmd = 'build-manifest' ]; then
  node ./scripts/build-manifest.js
  echo built manifest

else
  echo unknown command $cmd
fi
