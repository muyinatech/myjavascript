class Person {
  name = 'Fred'; // no need to initialise in constructor

  printName = () => {
    // use arrow functions
    // set
    console.log(this.name);
  };
}

const person = new Person();
person.printName();
