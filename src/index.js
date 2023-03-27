const person = require("./person");
const Person = require("./personClass");

const personClass = new Person("John", 30);

console.log("works", person);
personClass.greeting();
