const fs = require('fs');
const path = require('path');

/** 디렉토리 안에 있는 모든 파일의 확장자를 바꿔준다. */
const changeExtension = ({ from, to, directoryPath }) => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('Error stating file:', err);
          return;
        }

        if (stats.isFile() && path.extname(file) === `.${from}`) {
          const newFilePath = path.join(
            directoryPath,
            path.basename(file, `.${from}`) + `.${to}`
          );

          fs.rename(filePath, newFilePath, (err) => {
            if (err) {
              console.error('Error renaming file:', err);
            } else {
              console.log(
                `Renamed: ${file} -> ${path.basename(file, from)}.${to}`
              );
            }
          });
        }
      });
    });
  });
};

module.exports.changeExtension = changeExtension;
