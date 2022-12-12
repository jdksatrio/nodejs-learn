setTimeout(() => {
  const buffer1 = Buffer.from('Hello');
  const buffer2 = Buffer.from('World');
  const bufferArray = [buffer1, buffer2];
  const bufferConcat = Buffer.concat(bufferArray);
 
  console.log(bufferConcat.toString());
}, 3000);
