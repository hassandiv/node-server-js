const os = require("os");

//Platform OS - output darwin
console.log(os.platform());

//CPU Arch - output x64
console.log(os.arch());

//CPU Core Info - output an array with all device information
console.log(os.cpus());

//Free memory - output 570912768
console.log(os.freemem());

//Total memory - output 34359738368
console.log(os.totalmem());

//Total memory - output /Users/elhassanabdelhafez
console.log(os.homedir());

//Total memory - output 414192
console.log(os.uptime());
