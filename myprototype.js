function Person(first, last, age) { // object constructor function
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

var myPerson = new Person("John", "Brown", "30");

// add a property to an object
myPerson.nationality = "British";

// add a method to an object
myPerson.name = function() {
  return this.firstName + " " + this.lastName;
};

// Add property to an existing prototype
Person.prototype.city = "London";

// Add method to an existing prototype
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};