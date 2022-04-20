var os = require('os');
var fs = require('fs');

console.log("Welcome to NodeJs")

var cups = os.cpus().length
var freemem = os.freemem()
var uptime = os.uptime()
var version = os.version()
console.log(cups, freemem, uptime, version)

fs.readFile('./index.md', (err, data) => {
    if(err) throw err;
    console.log(data.toString());
});
