const args = process.argv.slice(2);

args.forEach((arg) => {
  let envVar = process.env[arg];

    if (envVar === undefined) {
        console.error(`Environment variable ${arg} is not set.`);
        return;
    }

    console.log(`Argument ${envVar}`);
});