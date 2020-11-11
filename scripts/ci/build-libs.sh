#!/usr/bin/env bash
#!/usr/bin/env node --max-old-space-size=4096

set -u -e -o pipefail

cd $(dirname $0)/../..

DIST="$(pwd)/dist/@co"
DEBUG=false
TARGET="$(pwd)/target"
ALL=true
ISBUILDLESS=false
PACKAGES=(core
  testing
  acl
  auth
  common
  cds
  theme
  cbc
  cache
  chart
  mock
  form
  apm
  cms
  map
  im)
NODE_PACKAGES=(cli)

for ARG in "$@"; do
  case "$ARG" in
    -n)
      TEMPPACKAGES=($2)
      if [[ ${TEMPPACKAGES} != ALL  ]]; then
        PACKAGES=($2)
        ALL=false
      fi
      ;;
    -t)
      TARGET=($4)
      ;;
    -debug)
      DEBUG=true
      ;;
  esac
done

buildLess() {
  echo 'copy styles...'
  node --max_old_space_size=5120 ./scripts/build/copy-less.js

  echo 'fix zorro path...'
  node --max_old_space_size=5120 ./scripts/build/fix-zorro-path.js

  echo 'build full css...'
  node --max_old_space_size=5120 ./scripts/build/generate-css.js

  echo 'generate less var...'
  node --max_old_space_size=5120 ./scripts/build/generate-less-vars.js
}

containsElement () {
  local e
  for e in "${@:2}"; do [[ "$e" == "$1" ]] && return 0; done
  return 1
}

updateVersionReferences() {
  NPM_DIR="$1"
  (
    echo "======    VERSION: Updating version references in ${NPM_DIR}"
    cd ${NPM_DIR}
    perl -p -i -e "s/ZORRO\-0\.0\.0\-PLACEHOLDER/${ZORROVERSION}/g" $(grep -ril ZORRO\-0\.0\.0\-PLACEHOLDER .) < /dev/null 2> /dev/null
    perl -p -i -e "s/PEER\-0\.0\.0\-PLACEHOLDER/^${VERSION}/g" $(grep -ril PEER\-0\.0\.0\-PLACEHOLDER .) < /dev/null 2> /dev/null
    perl -p -i -e "s/0\.0\.0\-PLACEHOLDER/${VERSION}/g" $(grep -ril 0\.0\.0\-PLACEHOLDER .) < /dev/null 2> /dev/null
  )
}

addBanners() {
  for file in ${1}/*; do
    if [[ -f ${file} && "${file##*.}" != "map" ]]; then
      cat ${LICENSE_BANNER} > ${file}.tmp
      cat ${file} >> ${file}.tmp
      mv ${file}.tmp ${file}
    fi
  done
}

VERSION=$(node -p "require('./package.json').version")
ZORROVERSION=$(node -p "require('./package.json').dependencies['ng-zorro-antd']")
echo "=====BUILDING: Version ${VERSION}, Zorro Version ${ZORROVERSION}"

N="
"
PWD=`pwd`

SOURCE=${PWD}/packages
DIST=${PWD}/dist/@co

# fix linux
# npm rebuild node-sass

build() {
  for NAME in ${PACKAGES[@]}
  do
    echo "====== PACKAGING ${NAME}"

    LICENSE_BANNER=${SOURCE}/license-banner.txt

    if ! containsElement "${NAME}" "${NODE_PACKAGES[@]}"; then
      
      echo " node --max_old_space_size=4096 ${PWD}/scripts/build/packing ${NAME}"

      # packaging
      node --max_old_space_size=4096 ${PWD}/scripts/build/packing ${NAME}
      # license banner
      addBanners ${DIST}/${NAME}/bundles
      # license file
      cp ${PWD}/LICENSE ${DIST}/${NAME}/LICENSE
      # package version
      updateVersionReferences ${DIST}/${NAME}

      if [[ ${NAME} == theme  ||  ${NAME} == cbc ||  ${NAME} == chart ||  ${NAME} == cms ||  ${NAME} == map ||  ${NAME} == im ]]; then
        ISBUILDLESS=true
      fi

    else
      echo "not yet!!!"
    fi

  done

  if [[ ${ISBUILDLESS} == true || ${ALL} == true ]]; then
     buildLess
  fi
}

debug(){
  if [[ ${DEBUG} == false  ]]; then
    return
  fi

  echo "====== debug ${DEBUG} ${ALL} " 

  if [[ ${ALL} == true ]]; then
         ./scripts/ci/copy-npm.sh -t ${TARGET}
  fi

  for NAME in ${PACKAGES[@]}
  do
    echo "====== PACKAGING ${NAME}"
    ./scripts/ci/copy-npm.sh -m ${NAME} -t ${TARGET}
  done
}

if [[ ${ALL} == true ]]; then
  rm -rf ${DIST}
else
  rm -rf ${DIST}/PACKAGES
fi

build
debug
