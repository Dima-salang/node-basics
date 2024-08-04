const fs = require('fs');

//reading files

// this is a non-blocking function, basically asynchronous
fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.error(err);
    }

    console.log(data.toString());
});

console.log('end line');