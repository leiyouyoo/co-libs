#!/bin/bash

# set -u -e -o pipefail

DIST="$(pwd)/dist"
ROOT=${DIST}

UNLINK=false
for ARG in "$@"; do
  case "$ARG" in
  -u)
    UNLINK=true
    ;;
  esac
done

link() {
  (
    cd ${ROOT}/@co
    for p in $(ls .); do cd ${ROOT}/@co/$p &&  npm link; done
  )
}

unlink() {
  (
    cd ${ROOT}/@co
    for p in $(ls .); do cd ${ROOT}/@co/$p &&  npm unlink; done
  )
}

if [[ ${UNLINK} == true ]]; then
  unlink
else
  link
fi