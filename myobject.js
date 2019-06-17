// Create object (rarely used)
const object1 = new Object();
object1.name = "test";
console.log("object1:", object1);

// Create object (preferred)
const foo = {}; // same as new Object();
console.log("foo:", foo);

foo.bar = 123; // add property to foo

console.log("foo:", foo); // { bar: 123 } calls toString()
console.log("foo.bar:", foo.bar); // dot notation preferred
console.log('foo["bar"]:', foo["bar"]); // bracket notation
const propName = "bar";
console.log("foo[propName]", foo[propName]);

// Check if a property exists on object, returns false for inherit properties
console.log('foo.hasOwnProperty("bar"):', foo.hasOwnProperty("bar"));

// Check if property is enumerable.
console.log(
  'foo.propertyIsEnumerable("bar"):',
  foo.propertyIsEnumerable("bar")
);

// toString is inherited, so not enumerable
console.log(
  'foo.propertyIsEnumerable("toString"):',
  foo.propertyIsEnumerable("toString")
);

const foo2 = {
  bar: 123,
  bas: {
    bas1: "some string",
    bas2: 345
  }, // nested object
  bat: [1, 2, 3], // array
  bay: [{ qux: 1 }, { qux: 2 }, { qux: 3 }], // array containing object literals
  baz() {
    return 1;
  }
};

console.log("foo2", foo2);
console.log("foo2.bar:", foo2.bar);
console.log("foo2.bas.bas2:", foo2.bas.bas2);
console.log("foo2.bat[2]:", foo2.bat[2]);
console.log("foo2.baz:", foo2.baz());

// object constructor function
function customer(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new customer("John", "Doe", 50, "blue");
console.log("myFather:", myFather);

// Delete property
delete myFather.firstName;
console.log("myFather:", myFather);

const person = {
  name: "Nicholas",
  age: 29,
  job: "Software Engineer",

  sayName() {
    console.log(this.name);
  }
};

// Define property and with specific attributes settings - writable, etc.
Object.defineProperty(person, "location", {
  writable: false, // read-only
  configurable: false,
  value: "London"
});

// not updated to new york as location property is read only
person.location = "New York";

console.log("person.location", person.location);

// not deleted as location property is configurable
delete person.location;

console.log("person.location", person.location);

const book = {
  year: 2004,
  edition: 1,
  ref: null
};

// Define a property
Object.defineProperty(book, "ayear", {
  get() {
    return this.year;
  },
  set(newValue) {
    if (newValue > 2004) {
      this.year = newValue;
      this.edition += newValue - 2004;
    }
  }
});

// object with setter only
// Object.defineProperty(book, 'ref', {
//   set(newValue) {
//     this.ref = newValue;
//   },
// });

book.year = 2005; // change property
console.log("book.edition", book.edition);

book.ref = "ABC"; // add property
console.log("book.ref", book.ref);

// Added multiple properties to an object
Object.defineProperties(book, {
  ptitle: {
    value: "Book 1"
  },

  price: {
    value: 10.99
  },

  title: {
    get() {
      return this.ptitle;
    },

    set(newValue) {
      this.ptitle = newValue;
    }
  }
});

console.log("book.title", book.title);

// Property descriptor has four attributes - value, writable, enumerable and configurable

// Object.getOwnPropertyDescriptor - returns a property descriptor for own property
const descriptor = Object.getOwnPropertyDescriptor(book, "year");
console.log("descriptor", descriptor);
console.log("descriptor.value", descriptor.value);
console.log("descriptor.configurable", descriptor.configurable);

function displayInfo(args) {
  if (args.age > 25) {
    console.log("old");
  } else {
    console.log("young");
  }
}

// pass object literal as a function argument
displayInfo({
  name: "Fred",
  age: "16"
});

// in operator - returns true if the specified property is in the specified object or its prototype chain.
const obj1 = { x: 1, y: 1 };
console.log(`"x" in obj1:${"x" in obj1}`);
console.log(`"z" in obj1:${"z" in obj1}`);
console.log(`"toString in obj1:${"toString" in obj1}`);

const a = [7, 8, 9];
console.log(`"0" in a:${"0" in a}`);
console.log(`1 in a${1 in a}`);

const testmap = {
  a: 1,
  b: 2,
  c: 3
};

// Object.keys returns an array of enumerable own properties of an object
const newmap = Object.keys(testmap).map(key => ({
  name: key,
  value: testmap[key]
}));

console.log("newmap", newmap);

// Object.getOwnPropertyNames returns an array containing all own properties' names (enumerable or not) of an object o.

console.log(
  "Object.getOwnPropertyNames(testmap)):",
  Object.getOwnPropertyNames(testmap)
);

// Object.create() - takes a prototype as its first argument

// o1 inherits properties x and y
var o1 = Object.create({ x: 1, y: 2 });

// o2 inherits no properties or methods
var o2 = Object.create(null);

// 03 is like {} or new Object()
var o3 = Object.create(Object.prototype);

// inherit properties

var o = {}; // o inherits object methods from Object.prototype
o.x = 1; // o has its own property x

var p = Object.create(o); // p inherits properties from o and Object.prototype
p.y = 2; // p has its own property y

var q = Object.create(p); // inherits properties from o, p and Object.prototype
q.z = 3; // q has its own property q

console.log(q.x + q.y); // 3

delete q.x; // only deletes object's own properties, not inherited ones, so delete has does not work here
console.log(q); // only outputs its own property z

delete q.z; // works as z is a property of q
console.log(q);

var o = { x: undefined };
console.log(o.x !== undefined); // false property = undefined
console.log(o.y !== undefined); // false property does not exist
console.log("x" in o); // true property exists
console.log("y" in o); // false property does not exist

// Enumerating properties
var k = { x: 1, y: 2, z: 3 };
for (i in k) {
  console.log(i); // x, y, z
}

// Property getters and setters
var o = {
  data_prop: 0,

  get accessor_prop() {
    return this.data_prop;
  },

  set accessor_prop(value) {
    this.data_prop = value;
  }
};

console.log("o.accessor_prop", o.accessor_prop);
o.accessor_prop = 100;
console.log("o.accessor_prop", o.accessor_prop);

// Object attributes
