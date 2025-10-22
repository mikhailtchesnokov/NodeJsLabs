const {spawn} = require('child_process');

const child = spawn('find', ['.']);

child.stdout.on('data', (data) => {
    console.log(`File: ${data}`);
});

child.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
});

child.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
});

child.on('error', (err) => {
    console.error(`Failed to start child process: ${err}`);
});