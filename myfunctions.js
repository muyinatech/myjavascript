function foo() { return 123; }
console.log(foo()); // 123

function bar() { } // no return value
console.log(bar()); // undefined

let foo = 123;
if (true) {
  var foo = 456; // added to the global context
}
console.log(foo); // 456

let foo = 123;

(function () { // create new scope, by wrapping function in (...), means it is immediately executed after you define it.
  const foo = 456;
  console.log(foo); // 456
}());

console.log(foo); // 123

console.log(`sum: ${sum(1, 2)}`); // this can appear before function declaration below

// function declaration are read and available in an execution context before any code is executed
function sum(num1, num2) { // FUNCTION DECLARATION
  return num1 + num2;
}
console.log(`sum: ${sum(15, 57)}`);

// obtain pointer to sum function
const anotherSum = sum;
console.log(`anotherSum: ${anotherSum(10, 10)}\n`);

// another way to declare a function
const sum2 = function (num1, num2) { // FUNCTION EXPRESSION, anonymous function, only executed until this code is reached
  return num1 + num2;
};
console.log(`sum2: ${sum2(32, 32)}`); // this must appear after the function expression above

const foo2 = function () {
  console.log('foo2');
};
foo2();


// get number of function arguments
function howManyArgs() {
  console.log(`no. of args: ${arguments.length}`);
  if (arguments.length > 0) {
    console.log(`first arg: ${arguments[0]}`);
  }
}
howManyArgs();
howManyArgs(2, 45, 67);
console.log('\n');

function howManyArgs2(num1) {
  console.log(`first arg: ${num1}`);
  console.log(`no. of args: ${arguments.length}`);
  if (arguments.length > 0) {
    console.log(`num: ${num1}`);
    console.log(`second arg: ${arguments[1]}`);
  }
}
howManyArgs2();
howManyArgs2(2, 45, 67);


// No overloading of functions
function addSomeNumber(num) {
  return num + 100;
}

function addSomeNumber(num) { // overwrites the function declared above
  return num + 200;
}

console.log(`addSomeNumber: ${addSomeNumber(10)}`);

function callAFunction(someFunction, someArgument) {
  return someFunction(someArgument);
}

// Pass a function as an argument
function add20(num) {
  return num + 20;
}
console.log(`callAFunction: ${callAFunction(add20, 100)}`);

// Function returning a function
function createComparator(propertyName) {
  return function (obj1, obj2) {
    const val1 = obj1[propertyName];
    const val2 = obj2[propertyName];

    if (val1 < val2) {
      return -1;
    } else if (val1 > val2) {
      return 1;
    }
    return 0;
  };
}

const data = [{ name: 'Ted', age: 20 }, { name: 'Nicholas', age: 67 }];
data.sort(createComparator('name'));
console.log(`first in data: ${data[0].name}`);

// high order function take functions as arguments
setTimeout(() => { console.log('2000 milliseconds'); }, 2000);

// closure, function defined in another function
function outerFunction(arg) {
  const variableInOuterFunction = arg;

  function bar() {
    console.log(variableInOuterFunction); // has access to variable in outer scope
  }

  bar();
}
outerFunction('hello closure!');

function outerFunction2(arg) {
  const variableInOuterFunction = arg;
  return function () {
    console.log(variableInOuterFunction);
  };
}

const innerFunction = outerFunction2('hello closure!');
innerFunction();


// this
const obj = { color: 'red' };

function getColor() {
  console.log(this.color);
  console.log(getColor.caller);
  console.log(arguments.callee.caller);
}

getColor();
obj.getColor = getColor;
obj.getColor();
