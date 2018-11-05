const fs = require('fs');

const folderFinder = (path, leaseNumber)=>{
  const folders = fs.readdirSync(path);

  return folders.find(folder => {
    return folder.includes(leaseNumber.toString())
  })
}

module.exports = folderFinder