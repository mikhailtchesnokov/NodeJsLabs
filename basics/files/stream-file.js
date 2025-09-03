const fs = require('fs')

const readableStream = fs.createReadStream('input.txt')

readableStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`)
})

readableStream.on('end', () => {
  console.log('No more data to read.')
})  
