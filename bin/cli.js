#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const listDir = (dir, fileList = []) => {
  let files = fs.readdirSync(dir);

  files.forEach(file => {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      fileList = listDir(path.join(dir, file), fileList);
    } else {
      if (/\.svg$/.test(file)) {
        let name = `${file.split('.')[0].replace(/\s/g, '_')}.html`;
        let src = path.join(dir, file);
        let newSrc = path.join(dir, name);
        fileList.push({
          oldSrc: src,
          newSrc: newSrc
        });
      }
    }
  });

  return fileList;
};

let foundFiles = listDir('./');
foundFiles.forEach(file => {
  fs.renameSync(file.oldSrc, file.newSrc);
});