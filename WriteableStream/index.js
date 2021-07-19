const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname,"input.txt");

const readableStream = fs.createReadStream(file, {
    highWaterMark: 15 
});

const writeableStream = fs.createWriteStream('./WriteableStream/output.txt');

readableStream.on('readable', () => {
    try {
        //process.stdout.write(`[${readableStream.read()}]`);
        writeableStream.write(`${readableStream.read()} \n`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});

readableStream.on('end', () => {
    console.log('Done');
});