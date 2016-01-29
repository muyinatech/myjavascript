function foo() {return 123; }
console.log(foo()); // 123

function bar() { }
console.log(bar()); // undefined

var foo = 123;
if (true) {
	var foo = 456;
}
console.log(foo); // 456

var foo = 123;
if (true) {
	(function () { // create new scope, by wrapping function in (...), means it is immediately executed after you define it.
		var foo = 456;	
	})();
}
console.log(foo); // 123


console.log("sum: " + sum(1, 2)); // this can appear before function declaration below

// function declaration are read and available in an execution context before any code is executed
function sum(num1, num2) { // FUNCTION DECLARATION
	return num1 + num2;
}
console.log("sum: " + sum(15, 57));

// another way to declare a function
var sum2 = function(num1, num2) { // FUNCTION EXPRESSION, anonymous function
	return num1 + num2;
}
console.log("sum2: " + sum2(32, 32)); // this must appear after the function expression above

var foo2 = function() {
	console.log('foo2');
}
foo2();

var anotherSum = sum; // obtain pointer to sum function
console.log("anotherSum: " +anotherSum(10, 10));

// get number of function arguments
function howManyArgs() {
	console.log(arguments.length);
	if (arguments.length > 0) {
		console.log(arguments[0]);
	}
}
howManyArgs();
howManyArgs(2,45,67);
console.log("\n");

function howManyArgs2(num1) {
	console.log(num1);
	console.log(arguments.length);
	if (arguments.length > 0) {
		console.log(num1);
		console.log(arguments[1]);
	}
}
howManyArgs2();
howManyArgs2(2,45,67);


// No overloading of functions
function addSomeNumber(num) {
	return num + 100;
}

function addSomeNumber(num) {
	return num + 200;
}

console.log("addSomeNumber: " + addSomeNumber(10));

function callAFunction(someFunction, someArgument) {
	return someFunction(someArgument);
}

// Pass a function as an argument
function add20(num) {
	return num + 20;
}
console.log("callAFunction: " + callAFunction(add20, 100));

// Function returning a function

function createComparator(propertyName) {
	return function(obj1, obj2) {
		var val1 = obj1[propertyName];
		var val2 = obj2[propertyName];

		if (val1 < val2) {
			return -1	
		} else if (val1 > val2) {
			return 1;
		} else {
			return 0;
		}
	}
}
var data = [{name: "Ted", age: 20}, {name: "Nicholas", age: 67}];
data.sort(createComparator("name"));
console.log("first in data: " + data[0].name);

// high order function take functions as arguments
setTimeout(function() {console.log('2000 milliseconds');}, 2000);

// closure, function defined in another function
function outerFunction(arg) {
	var variableInOuterFunction = arg;

	function bar() {
		console.log(variableInOuterFunction); // has access to variable in outer scope
	}

	bar();
}
outerFunction('hello closure!');

function outerFunction2(arg) {
	var variableInOuterFunction = arg;
	return function () {
		console.log(variableInOuterFunction);
	}
}

var innerFunction = outerFunction2('hello closure!');
innerFunction();
