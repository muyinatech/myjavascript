// const
const value = 1;
// value = 2; error;

// let
let value2 = 100;
value2 = 200;

// template strings
console.log(`value2 - ${value2}`); // 200

const name = 'Fred';
const time = '10.30pm';
console.log(`Hello ${name}.
   I hope you are well.
Bye at ${time}
`); // preserves whitespace

// default parameters
function output(item = 'default', someObject = {test: 'fence'}) {
  console.log(`output is ${item} ${someObject.test}`);
}

output(); // default fence
output('apple', {test: 'wall'}); // apple wall


// arrow functions
const lordify = firstname => `${firstname} of Canterbury`; // single arg, parentheses not required
console.log(lordify('William')); // William of Canterbury

const fullname = (firstname, lastname) => `Your full name is ${firstname} ${lastname}.`; // multi-arg, parentheses required
console.log(fullname('Sarah', 'Jones'));

const title = (gender) => { // multiple statements, curly braces required & return statements
  if (gender === 'M') {
    return 'Mr';
  } else {
    return 'Mrs/Ms/Miss';
  }
};
console.log(title('F'));

let bunny = {
  name: 'Usagi',
  showName: function () {
    console.log(`Bunny's name is ${this.name}`);
  }
};
bunny.showName(); // Usagi

bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function () {
    this.tasks.forEach(function (task) {
      console.log(`${this.name} wants to ${task}`); // this.name is undefined, as this is the window object
    });
  }
};
bunny.showTasks();

bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function () {
    const _this = this; // store this whilst still in scope
    this.tasks.forEach(function (task) {
      console.log(`${_this.name} wants to ${task}`); // this.name is Usagi
    });
  }
};
bunny.showTasks();

bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function () {
    this.tasks.forEach(function (task) {
      console.log(`${this.name} wants to ${task}`); // this.name is Usagi
    }.bind(this)); // bind to this of the showTask method
  }
};
bunny.showTasks();

// arrow functions binding this to parent function
bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks() {
    this.tasks.forEach((task) => { // arrow function mean this is bound to the parent function
      console.log(`${this.name} wants to ${task}`); // this.name is Usagi
    });
  }
};
bunny.showTasks();

// destructuring assignment
const sandwich = {
  bread: 'wholemeal',
  meat: 'beef',
  cheese: 'swiss',
  toppings: ['lettuce', 'tomato', 'mustard']
};

let {bread, meat} = sandwich;
console.log(bread, meat); // wholemeal beef
bread = 'garlic';
console.log(bread, meat); // garlic beef

// destructuring function argument
const person = {
  firstname: 'Bill',
  lastname: 'Kay'
};
const praiseSomeone = ({firstname}) => `${firstname} you are the best!`;
console.log(praiseSomeone(person)); // Bill you are the best!

// destructuring arrays
const fruits = ['apple', 'kiwi', 'banana', 'orange'];
const [firstFruit] = fruits;
console.log(firstFruit); // apple

const [,,thirdFruit] = fruits;
console.log(thirdFruit); // banana

// Object literal enhancement
const animal = 'dog';
const year = '1985';
const printInfo = function() {
  console.log(`This is object has year - ${this.year}`);
};
const newObject = {animal, year, printInfo};
console.log(`newObject is ${JSON.stringify(newObject)}`);
newObject.printInfo();

const newObject2 = {
  name: 'Fred',
  // homeTown : function () { // old style object method
  //
  // },
  homeTown() { // new style object method
    return 'London';
  }
}
console.log(newObject2.homeTown());

// spread operator to combine arrays
const cities = ['paris', 'london', 'tokyo'];
const clothes = ['jacket', 'shirt', 'skirt'];
const allThings = [...cities, ...clothes];
console.log(`allThings - ${allThings.toString()}`);

const [lastCity] = [...cities].reverse(); // copy, reverse and take first
console.log(`lastCity - ${lastCity}`);

const [firstItem, ...rest] = clothes; // get the first then the rest
console.log(`first item of clothing - ${firstItem}`);
console.log(`rest of the clothes - ${rest.toString()}`);

// spread operator to take function arguments as an array
const takeThem = (...args) =>  {
  for (let n of args) {
    console.log(n);
  }
};
takeThem(34,3,99,2);

// spread operator to combine objects
const morning = {
  breakfast: 'oatmeal',
  lunch: 'peanut butter and jelly'
};
const dinner = 'mac and cheese';
const meals = {
  ...morning,
  dinner,
};
console.log(`meals - ${JSON.stringify(meals)}`);