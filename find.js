var fs = require('fs')
var mypath = require("path");

const readline = require('readline')


async function askQuestion(query) {

  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
  });
  return new Promise(resolve => rl.question(query, ans => {
      rl.close();
      resolve(ans);
  }))
}


function find(path){
  askQuestion("type full or partial name of your file:  ").then(function(arg){
    var relativePath = mypath.basename(__dirname)
    fs.readdir(path, function(err,files){
      if(err) throw err;
      files.forEach(file => {
        if(file.includes(arg)){  // testing if filename partially matches
          console.log(relativePath+'/',file)
        }else{
          return 'No files found with that name'
        }
      });
    });
  })
  
}

module.exports = find







