const {exec} = require('child_process');

exec('ls -l', (error, stdout, stderr) => {
  
  if (error) {
    console.error(`Error executing command: ${error}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout output:\n${stdout}`);
});
