const fs = require('fs')
const rs = fs.createReadStream('./demofile.txt')
rs.on ('open', () => {
  console.log('The file is open')
})
