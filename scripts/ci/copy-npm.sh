#!/bin/bash

# set -u -e -o pipefail

DIST="$(pwd)/dist"
TARGET="$(pwd)/target"
FROMDIR=${DIST}/@co/*
TODIR=${TARGET}/node_modules/@co
PACKAGES=()
ALL=true

for ARG in "$@"; do
  case "$ARG" in
  -m)
    PACKAGES=($2)
    ALL=false
    ;;
  -t)
    TARGET=($4)
    ;;
  esac
done

copy() {
  (
     echo "TARGET:${TARGET}"

    if [[ ${ALL} == false ]]; then
      FROMDIR=${DIST}/@co/${PACKAGES}/*
      TODIR=${TARGET}/node_modules/@co/${PACKAGES}
    fi

    echo "COPY_FROM:${FROMDIR}"
    echo "COPY_TO:${TODIR}"

    rm -rf ${TODIR}
    mkdir -p  ${TODIR}
    cp -fr ${FROMDIR} ${TODIR}

    echo "COPY NPM FINISHED~!"
  )
}

copy