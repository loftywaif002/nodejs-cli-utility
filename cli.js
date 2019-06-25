const ls = require('./ls')  
const mkdir = require('./mkdir')
const find = require('./find')
const sed = require('./sed')

// __filename resolved absolute path of the current module file
if (process.argv.length <= 3) {  // stopping the process after getting uer input
    process.exit(-1)
}
  
var command = process.argv[2]
var path = process.argv[3]


if(command==='ls'){
    ls(path)
}
if(command==='mkdir'){
   mkdir(path)
}
if(command==='find'){
  find(path)
}
if(command==='sed'){
  let arr = path.split('/')
  let name = arr[0]
  let tobeReplaced = arr[1]
  let replacement = arr[2]
  sed(name,tobeReplaced,replacement)
}