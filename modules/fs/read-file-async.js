let fs = require('fs').promises;


async function readFileAsync() {
  try {
    const data = await fs.readFile('input.txt', 'utf8');
    console.log('file read successfully');  
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err);
  } finally {
    console.log('Read file operation completed.');
  }
}

readFileAsync();
