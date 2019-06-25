const fs = require('fs')

function mkdir (dirname) {
  try {
    fs.mkdirSync(dirname,0o776, { recursive: true })
  } catch (err) {
    if (err.code !== 'EEXIST') throw err
  }
}

module.exports = mkdir


