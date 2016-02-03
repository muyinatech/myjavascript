var array1 = new Array(); // empty array
var array2 = new Array(20); // an array of 20 items
var array3 = new Array("one", "two", "three");
var array4 = ["red", "blue", "green"]; // using an array literal
var array5 = []; // empty array
console.log(array1.length);
console.log(array3.length);

console.log(array3);
array3.length = 2; // modify array to have two items
console.log(array3);
array3.length = 6;
console.log(array3);

if (Array.isArray(array1)) {
	console.log("array1");
}

console.log(array4.toString());
console.log(array4.valueOf());
console.log(array4.join("||"));
console.log(array4.join()); // comma separated by default

// Array stack LIFO methods
var foo = [];
foo.push(1); // insertion
var count = foo.push(2); // push returns current array count
console.log(foo);
console.log(foo[1]);
var item = foo.pop(); // removal returns the item removed
console.log(foo);

// Array queue FIFO methods
var colors = new Array();
var count2 = colors.unshift("red", "green");
console.log(colors);


