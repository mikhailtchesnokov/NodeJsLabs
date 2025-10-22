const { execFile } = require('child_process');

execFile('bash', [`${__dirname}/processNodejsImage.sh`], (error, stdout, stderr) => {
  if (error) {
    console.error(error);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout output:\n${stdout}`);
});
