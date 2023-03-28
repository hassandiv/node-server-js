const fs = require("fs");
const path = require("path");

//Create folder with mkdir - same commands for PC or Mac terminal
//NOTE folder already exist so it will throw error
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("folder created ...");
// });

//Create and write to file the text below "hello world"
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "hello world !!!!",
//   (err) => {
//     if (err) throw err;
//     console.log("file written to ...");

//     //File append - adds a new text to one above doesn't override or remove
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "i love node js",
//       (err) => {
//         if (err) throw err;
//         console.log("file written to ...");
//       }
//     );
//   }
// );

//Read file
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloWorld.txt"),
  (err) => {
    if (err) throw err;
    console.log("file renamed");
  }
);
