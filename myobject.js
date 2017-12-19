// rarely used
const obj1 = {};
obj1.name = 'test';

let foo = {}; // same as new Object();
console.log(foo);
foo.bar = 123; // extend foo
console.log(foo); // { bar: 123 } calls toString()
console.log(foo.hasOwnProperty('bar')); // check if property exists on object
console.log(foo.bar); // dot notation preferred
console.log(foo.bar); // bracket notation
const propName = 'bar';
console.log(foo[propName]);

// preferred
foo = {
  bar: 123,
  bas: {
    bas1: 'some string',
    bas2: 345,
  }, // nested object
  bat: [1, 2, 3], // array
  bay: [{ qux: 1 }, { qux: 2 }, { qux: 3 }], // array containing object literals
  baz() {
	  return 1;
  },
};
console.log(foo);
console.log(`foo.bar: ${foo.bar}`);
console.log(`foo.bas.bas2: ${foo.bas.bas2}`);
console.log(`foo.bat[2]: ${foo.bat[2]}`);
console.log(`foo.baz: ${foo.baz()}`);

// object constructor function
function customer(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new customer('John', 'Doe', 50, 'blue');

// delete property
delete myFather.firstName;

const person = {
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',

  sayName() {
    console.log(this.name);
  },

};

Object.defineProperty(person, 'location', {
  writable: false,
  configurable: false,
  value: 'London',
});

// not updated to new york as location property is read only
person.location = 'New York';

console.log(person.location);

// not deleted as location property is configurable
delete person.location;

console.log(person.location);

const book = {
  year: 2004,
  edition: 1,
  ref: null,
};

Object.defineProperty(book, 'ayear', {
  get() {
    return this.year;
  },
  set(newValue) {
    if (newValue > 2004) {
      this.year = newValue;
      this.edition += newValue - 2004;
    }
  },
});


// object with setter only
Object.defineProperty(book, 'ref', {
  set(newValue) {
    this.ref = newValue;
  },
});

book.year = 2005;
console.log(book.edition);
book.ref = 'ABC';
console.log(book.ref);


// Added multiple properties to an object
Object.defineProperties(book, {
  ptitle: {
    value: 'Book 1',
  },

  price: {
    value: 10.99,
  },

  title: {
    get() {
      return this.ptitle;
    },

    set(newValue) {
      this.ptitle = newValue;
    },
  },
});

console.log(book.title);

const descriptor = Object.getOwnPropertyDescriptor(book, '_title');
console.log(descriptor.value);
console.log(descriptor.configurable);
console.log(typeof descriptor.get);

function displayInfo(args) {
  if (args.age > 25) {
    console.log('old');
  } else {
    console.log('young');
  }
}

// pass object literal as a function argument
displayInfo({
  name: 'Fred',
  age: '16',
});

const p = { x: 1, y: 1 };
'x' in p;
'z' in p;
'toString' in p;

console.log(`"x" in p:${'x' in p}`);
console.log(`"z" in p:${'z' in p}`);

const a = [7, 8, 9];
console.log(`"0" in a${'0' in a}`);
console.log(`1 in a${1 in a}`);
