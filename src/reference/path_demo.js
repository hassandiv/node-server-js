const path = require("path");

//Base file name
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

//Create path object
console.log(path.parse(__filename));

//Concatenate paths -  it will display fill dir + create a folder name test + hello.html file
//output /Users/elhassanabdelhafez/study/backend/node/javascript/traversy_media/node_server/src/reference/test/hello.html
console.log(path.join(__dirname, "test", "hello.html"));
