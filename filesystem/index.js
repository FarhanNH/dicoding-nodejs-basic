const fs = require('fs');

const fileReadCallback = (error, data) => {
  if (error) {
    console.log(error);
    console.log('Gagal Membaca Berkas');
    return;
  }

  console.log(data);
};

fs.readFile('./filesystem/notes.txt', 'UTF-8', fileReadCallback); //Async ver.
// const data = fs.readFileSync('./filesystem/notes.txt', 'UTF-8'); //Sync ver.
// console.log(data);
