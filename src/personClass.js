//Module wrapper function wrapps our entire module undre the hood
//(function (exports, require, module, __filename, dirname) {
//below code is here
//});

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and I am a ${this.age} years old`);
  }
}
module.exports = Person;
