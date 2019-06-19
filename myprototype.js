/*
Every javascript object has second javascript object called a prototype.
The first object inherits properties from the prototype.

Object.prototype
Array.prototype
Date.prototype

*/
function Person(first, last, age) {
  // object constructor function
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

const myPerson = new Person("John", "Brown", "30");

// add a property to an object
myPerson.nationality = "British";

// add a method to an object
myPerson.name = () => `${this.firstName} ${this.lastName}`;

console.log(myPerson);

// Add property to an existing prototype
Person.prototype.city = "London";

console.log(myPerson);

// Add method to an existing prototype
Person.prototype.name = () => `${this.firstName} ${this.lastName}`;

console.log(myPerson);

// Object.getPrototypeOf()

var t = { x: 1 }; // define a prototype
var u = Object.create(t); // inherit from prototype
console.log(t.isPrototypeOf(u)); // true
console.log(Object.prototype.isPrototypeOf(u)); // true for any object
console.log(Object.getPrototypeOf(u)); // get prototype of a given object
