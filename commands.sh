#!/bin/bash

cmd=${1:-summary}

root_dir=$(cd $(dirname $0); pwd)

if [ $cmd = 'summary' ]; then
  time=$(date '+%Y%m%d%H%M%S')
  filename="${time}.md"
  touch "${root_dir}/summaries/${filename}"
  vim "${root_dir}/summaries/${filename}"

fi
