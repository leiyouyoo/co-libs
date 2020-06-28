#!/bin/bash

# set -u -e -o pipefail

readonly thisDir=$(
  cd $(dirname $0)
  pwd
)

cd $(dirname $0)/../..

DIST="$(pwd)/dist"
ROOT=${DIST}

SCHEMATICS=false
NEXT=false
for ARG in "$@"; do
  case "$ARG" in
  -next)
    NEXT=true
    ;;
  -schematics)
    SCHEMATICS=true
    ;;
  esac
done

VERSION=$(node -p "require('./package.json').version")
echo "Version ${VERSION}"

clone() {
  rm -rf ${ROOT}
  mkdir -p ${ROOT}
  cd ${DIST}
  echo ">>> Clone delon & cli dist..."
  git clone --depth 1 https://github.com/ng-alain/delon-builds.git
}

publishToMaster() {
  (
    cd ${ROOT}/@co
    for p in $(ls .); do npm publish --access public $p; done
  )
  cd ${ROOT}/@co
  npm publish --access public
}

publishToNext() {
  (
    cd ${ROOT}/@co
    for p in $(ls .); do npm publish $p --access public --tag next; done
  )
  cd ${ROOT}/@co
  npm publish --access public --tag next
}

publishSchematics() {
  cd ${ROOT}/co-cli
  npm publish --access public
}

syncTaobao() {
  (
    cd ${ROOT}/@co
    for p in $(ls .); do curl -X PUT https://npm.taobao.org/sync/@co@conc_upstream=true; done
  )
  curl -X PUT https://npm.taobao.org/sync/ng-alain?sync_upstream=true
}

# clone

if [[ ${SCHEMATICS} == true ]]; then
  publishSchematics
else
  publishToMaster
fi
# syncTaobao
