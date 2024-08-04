const fs = require('fs');
const path = require('path');

//reading files

// this is a non-blocking function, basically asynchronous
fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.error(err);
    }

    console.log(data.toString());
});

console.log('end line');


// writing to a file

// if we Sync, it just means blocking or synchronous code.
if (!fs.existsSync('./docs/hello.txt')) {
    fs.writeFile("./docs/hello.txt", "hello, there!", () => {
      console.log("Wrote to file...");
    });
}


// creating directories

if (!fs.existsSync('./docs2')) {
    fs.mkdir("./docs2", (err) => {
      if (err) {
        console.error(err);
      }

      console.log("Made path...");
    });
} else {
    fs.rmdir('./docs2', (err) => {
        if (err) {
            console.error(err);
        }

        console.log("deleted directory");
    })
}

// deleting files
if (fs.existsSync('./docs/hello.txt')) {
    fs.unlink('./docs/hello.txt', (err) => {
        if (err) {
            console.error(err);
        }

        console.log("deleted file...");
    })
}


