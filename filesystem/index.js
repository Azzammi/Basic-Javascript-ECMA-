const path = require('path');
const file = path.resolve(__dirname,"notes.txt");

const fs = require('fs');
 
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};
 
fs.readFile(file, 'UTF-8', fileReadCallback);