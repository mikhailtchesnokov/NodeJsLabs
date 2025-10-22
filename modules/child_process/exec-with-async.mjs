import {exec} from 'child_process';
import {promisify} from 'util';

const execAsync = promisify(exec);

async function listFiles() {
  try {
    const {stdout, stderr} = await execAsync('ls -l');
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout output:\n${stdout}`);
  } catch (error) {
    console.error(`Error executing command: ${error}`);
  }
}

listFiles();