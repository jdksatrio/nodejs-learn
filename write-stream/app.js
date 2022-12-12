const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('textRead.txt')
});

const fileStream = fs.createWriteStream('textWrite.txt');

function transformData(line) {
  fileStream.write(`Item: ${line}\n`);
}

myInterface.on('line', transformData);

