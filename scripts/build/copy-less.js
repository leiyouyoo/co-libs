#!/usr/bin/env node

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

let root = path.resolve(__dirname, `../..`);

function copyLess(name) {
  let sourcePath = path.join(root, `packages/${name}`);
  let targetPath = path.join(root, `dist/@co/${name}`);

  // index.less
  [`index.less`, `theme-default.less`].forEach(fileName => {
    fse.copySync(`${sourcePath}/${fileName}`, `${targetPath}/${fileName}`);
  });

  const mapReg = /(map)$/g;
  if (mapReg.test(sourcePath)) {
    console.log(`111111111111111111111111111111111111111${sourcePath}/style`);
    if (fs.existsSync(`${sourcePath}/src/style/index.less`)) {
      fse.copySync(`${sourcePath}/src/style`, `${targetPath}/src/style`);
    }
  }

  // modules less
  fs.readdirSync(targetPath).forEach(name => {
    
    if (fs.existsSync(`${sourcePath}/${name}/style/index.less`)) {
      fse.copySync(`${sourcePath}/${name}/style`, `${targetPath}/${name}/style`);
    }

    const cmsReg = /(cms)$/g;
    if (cmsReg.test(sourcePath)) {
      fs.readdirSync(`${sourcePath}/src`).forEach(cname => {
        if (fs.existsSync(`${sourcePath}/src/${cname}/style/index.less`)) {
          fse.copySync(`${sourcePath}/src/${cname}/style`, `${targetPath}/src/${cname}/style`);
        }
      });
    }

  

    const cbcReg = /(cbc)$/g;
    if (cbcReg.test(sourcePath)) {
      fs.readdirSync(`${targetPath}/basic`).forEach(cname => {
        if (fs.existsSync(`${sourcePath}/basic/${cname}/style/index.less`)) {
          fse.copySync(`${sourcePath}/basic/${cname}/style`, `${targetPath}/basic/${cname}/style`);
        }
      });
      fs.readdirSync(`${targetPath}/layout`).forEach(cname => {
        if (fs.existsSync(`${sourcePath}/layout/${cname}/style/index.less`)) {
          fse.copySync(`${sourcePath}/layout/${cname}/style`, `${targetPath}/layout/${cname}/style`);
        }
      });
      fs.readdirSync(`${targetPath}/business`).forEach(cname => {
        console.log(`${sourcePath}/business/${cname}/style/index.less`);
        if (fs.existsSync(`${sourcePath}/business/${cname}/style/index.less`)) {
          fse.copySync(`${sourcePath}/business/${cname}/style`, `${targetPath}/business/${cname}/style`);
        }
      });
      fs.readdirSync(`${targetPath}/mobile`).forEach(cname => {
        if (fs.existsSync(`${sourcePath}/mobile/${cname}/style/index.less`)) {
          fse.copySync(`${sourcePath}/mobile/${cname}/style`, `${targetPath}/mobile/${cname}/style`);
        }
      });
      fs.readdirSync(`${targetPath}/web`).forEach(cname => {
        if (fs.existsSync(`${sourcePath}/web/${cname}/style/index.less`)) {
          fse.copySync(`${sourcePath}/web/${cname}/style`, `${targetPath}/web/${cname}/style`);
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
    `theme-default.less`,
  ].forEach(fileName => {
    fse.copySync(path.join(root, `packages/theme/${fileName}`), path.join(root, `dist/@co/theme/${fileName}`));
  });
}

['cbc', 'cms', 'chart', 'im', 'map'].forEach(name => copyLess(name));

copyTheme();
