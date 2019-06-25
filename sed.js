var fs = require('fs')

function sed(filename,stringToBereplaced,replacement){
  fs.readFile(filename, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }

    var result = data.replace(`${stringToBereplaced}`, `${replacement}`)

    fs.writeFile(filename, result, 'utf8', function (err) {
       if (err) return console.log(err);
    })

  })
}

module.exports = sed

