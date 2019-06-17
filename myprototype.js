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
