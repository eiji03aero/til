#!/bin/bash

cmd=${1:-create-post}

root_dir=$(cd $(dirname $0); pwd)

if [ $cmd = 'create-post' ] || [ $cmd = 'cp' ]; then
  type="${2:-summary}"
  time=$(date '+%Y%m%d%H%M%S')
  filename="${time}.md"
  path="${root_dir}/posts/${filename}"

  if [ $type = "summary" ]; then
    cat ${root_dir}/templates/summary.md > "$path"
  elif [ $type = "learn" ]; then
    cat ${root_dir}/templates/learn.md > "$path"
  elif [ $type = "thoughts" ]; then
    cat ${root_dir}/templates/thoughts.md > "$path"
  elif [ $type = "reading-note" ]; then
    cat ${root_dir}/templates/reading-note.md > "$path"
  elif [ $type = "reading-list" ]; then
    cat ${root_dir}/templates/reading-list.md > "$path"
  elif [ $type = "task" ]; then
    cat ${root_dir}/templates/task.md > "$path"
  fi

  vim "$path"

elif [ $cmd = 'build-data' ]; then
  node ./scripts/build-data.js
  echo built data.json

else
  echo unknown command $cmd
fi
