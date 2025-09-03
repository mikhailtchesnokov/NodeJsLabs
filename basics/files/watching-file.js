const fs = require('fs')

const watcher = fs.watch('./data')

watcher.on('change', (event, fileName) => {
  console.log(event);
  console.log(`Event ${event} on file ${fileName}`)
})