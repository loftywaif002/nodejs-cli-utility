var fs = require('fs')

function ls(path){
  
  fs.readdir(path, (err, files) => {
    if(err) return err
      files.forEach(file => {
       if(!(/^\./.test(file))){  // testing if filename starts with .
        console.log(file);
      }
   });
 });
}

module.exports = ls