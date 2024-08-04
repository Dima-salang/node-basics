// streams are used to start using data before it has finished loading.
// data are read and written incrementally without loading the entire file if the file is large

const fs = require('fs');

const writeStream = fs.createWriteStream("./docs/hello.txt");

// creates a read stream
// takes in the path and an option object where we can pass the BufferEncoding
const readStream = fs.createReadStream('./hello.txt', {encoding: 'utf-8'});

// this is an event listener.
// whenever there is a data event or a buffer object gets sent down the stream, it calls this
readStream.on('data', (chunk) => {
    console.log('----- CHUNK -----');

    // output the buffer object
    console.log(chunk);

    // put the chunk back in
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
})

// piping / it is the same as the write functions above
readStream.pipe(writeStream);



