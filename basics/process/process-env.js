console.log(process.env);

console.log(process.env['WINDIR']);

console.log(process.env.WINDIR);

Object.keys(process.env).forEach((element,i) => {
    console.log(`${i}: ${element}`);
});