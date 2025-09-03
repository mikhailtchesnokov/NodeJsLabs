const path = require('path')

const filePath = path.join(__dirname, 'data', 'input.txt')
console.log(filePath)

var arr = path.parse(filePath)
console.log(arr)