const fs = require('fs');

const readableStream = fs.createReadStream('./stream/input.txt', { highWaterMark: 15 });
const writableStream = fs.createWriteStream('./stream/output.txt');
readableStream.on('readable', () => {
  try {
    // process.stdout.write(`${readableStream.read()}\n`);
    writableStream.write(`${readableStream.read()}\n`);
  } catch (error) {
    console.error(error);
  }
});

readableStream.on('end', () => {
  console.log('\nDone');
  writableStream.end();
});
