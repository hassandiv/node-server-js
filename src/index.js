const person = require("./person");
const Person = require("./personClass");
const Logger = require("./Logger");

//person object
console.log("works", person);

//Person Class
const personClass = new Person("John", 30);
personClass.greeting();

//Logger object
const logger = new Logger();
logger.on("message", (data) => console.log(`Called Listener:`, data));
logger.log("Hello world 1");
logger.log("Hello world 2");
logger.log("Hello world 3");
