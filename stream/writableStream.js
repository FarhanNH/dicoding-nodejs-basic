const fs = require('fs');

const writableStream = fs.createWriteStream('./stream/output.txt');
writableStream.write('Ini merupakan teks baris pertama!\n');
writableStream.write('Ini merupakan teks baris kedua!');
writableStream.end();
// writableStream.end('Akhir dari writable stream!'); //bisa digunakan sebagai penanda akhir pada file output
