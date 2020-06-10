#!/usr/bin/env node

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

let root = path.resolve(__dirname, `../..`);

function copyLess(name) {
  let sourcePath = path.join(root, `packages/${name}`);
  let targetPath = path.join(root, `dist/@co/${name}`);

  // index.less
  [`index.less`, `theme-default.less`, `theme-dark.less`, `theme-compact.less`].forEach(fileName => {
    fse.copySync(`${sourcePath}/${fileName}`, `${targetPath}/${fileName}`);
  });

  // modules less
  fs.readdirSync(targetPath).forEach(name => {

    if (fs.existsSync(`${sourcePath}/${name}/style/index.less`)) {
      fse.copySync(`${sourcePath}/${name}/style`, `${targetPath}/${name}/style`);
    }

    const basicReg = /(cbc)$/g;
    if (basicReg.test(sourcePath)) {
      fs.readdirSync(`${targetPath}/basic`).forEach(cname => {
        if (fs.existsSync(`${sourcePath}/basic/${cname}/style/index.less`)) {
          fse.copySync(`${sourcePath}/basic/${cname}/style`, `${targetPath}/basic/${cname}/style`);
        }
      });
      fs.readdirSync(`${targetPath}/web`).forEach(cname => {
        if (fs.existsSync(`${sourcePath}/web/${cname}/style/index.less`)) {
          fse.copySync(`${sourcePath}/web/${cname}/style`, `${targetPath}/web/${cname}/style`);
        }
      });
      fs.readdirSync(`${targetPath}/mobile`).forEach(cname => {
        if (fs.existsSync(`${sourcePath}/mobile/${cname}/style/index.less`)) {
          fse.copySync(`${sourcePath}/mobile/${cname}/style`, `${targetPath}/mobile/${cname}/style`);
        }
      });
    }

  });
}

// 拷贝主题
function copyTheme() {
  [
    'system',
    'layout',
    'index.less',
    'default.less',
    'dark.less',
    'compact.less',
    `theme-default.less`,
    `theme-dark.less`,
    `theme-compact.less`,
  ].forEach(fileName => {
    fse.copySync(path.join(root, `packages/theme/${fileName}`), path.join(root, `dist/@co/theme/${fileName}`));
  });
}

['cbc', 'chart', 'im', 'map'].forEach(name => copyLess(name));


copyTheme();
