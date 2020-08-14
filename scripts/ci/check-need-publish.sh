#!/bin/sh
REMOTE_VERSION=$(npm show @co/core version)
echo Remote Version: "$REMOTE_VERSION"
CURRENT_VERSION=$(node -e "console.log(require('./package.json').version);")
echo Current version: "$CURRENT_VERSION"
# shellcheck disable=SC2039
if [[ $REMOTE_VERSION == $CURRENT_VERSION ]]; then
  echo Repo is up-to-date, nothing to do.
exit
elif [[ $(printf "%s\n" "$REMOTE_VERSION" "$CURRENT_VERSION" | sort -V | head -1) == $REMOTE_VERSION ]]; then
# need to publish
# shellcheck disable=SC2086
echo "Repo set new version with v$CURRENT_VERSION, set variable to trigger build&publish tasks."
echo "##vso[task.setvariable variable=NEW_CO_VERSION]"$CURRENT_VERSION
fi
