#!/bin/bash

cmd=${1:-create-post}

root_dir=$(cd $(dirname $0); pwd)

if [ $cmd = 'create-post' ]; then
  time=$(date '+%Y%m%d%H%M%S')
  filename="${time}.md"
  path="${root_dir}/posts/${filename}"
  touch "$path"
  cat <<-EOF > "$path"
<!--
{
  "tags": ["grpahql"]
}
-->
# title
https://....


# Summary

# Thoughts

EOF
  vim "$path"

elif [ $cmd = 'build-manifest' ]; then
  node ./scripts/build-manifest.js
  echo built manifest

else
  echo unknown command $cmd
fi
