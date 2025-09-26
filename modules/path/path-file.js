const path = require('path')

const filePath = path.join(__dirname, 'data', 'input.txt')
console.log('File path:', filePath)

var arr = path.parse(filePath)
console.log('Parsed path:', arr)