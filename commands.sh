#!/bin/bash

cmd=${1:-create-post}

root_dir=$(cd $(dirname $0); pwd)

if [ $cmd = 'create-post' ]; then
  time=$(date '+%Y%m%d%H%M%S')
  filename="${time}.md"
  touch "${root_dir}/posts/${filename}"
  vim "${root_dir}/posts/${filename}"

fi
