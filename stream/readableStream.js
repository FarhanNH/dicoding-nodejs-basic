const fs = require('fs');

const readableStream = fs.createReadStream('./stream/article.txt', {
  highWaterMark: 10, //bytes
});

readableStream.on('readable', () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {
    console.error(error);
  }
});

readableStream.on('end', () => {
  console.log('\nDone');
});
