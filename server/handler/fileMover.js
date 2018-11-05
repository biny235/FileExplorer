const fs = require('fs');
const folderFinder = require('./folderFinder')

const leaseRegex = /([0-9]\s*){7}/g

const fileMover = (filesPath)=>{
  const files = fs.readdirSync(filesPath);

  files.forEach(file => {
    fs.rename(`${filePath}//${file}`, `${path}\\${folderFinder(file.match(leaseRegex)[0])}\\${file}`, (err)=>{
        if(err) console.log(err)
    })
  })
}

module.exports = fileMover;
