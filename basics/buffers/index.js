const firstBuffer = Buffer.alloc(1024);
console.log(firstBuffer); // 1024

const hiBuffer = Buffer.from('Hi!');

console.log(hiBuffer.toString('hex')); // 486921

 console.log(hiBuffer[0]); // 72
 console.log(hiBuffer[1]); // 105
 console.log(hiBuffer[2]); // 33