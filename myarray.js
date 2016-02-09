var array1 = new Array(); // empty array
var array2 = new Array(20); // an array of 20 items
var array3 = new Array("one", "two", "three");
var array4 = ["red", "blue", "green"]; // using an array literal
var array5 = []; // empty array
var array6 = [2, "test", {a:1}]; // array can contain mixed types
console.log(array1.length);
console.log(array3.length);
console.log("sorted: " + array4.sort());
console.log("reverse: " + array4.reverse());

console.log(array3);
array3.length = 2; // modify array to have two items
console.log(array3);
array3.length = 6;
array3[5] = 100;
console.log(array3); // modify array to have six items

// check if an array preferred
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


var values = [0,1,5,10,15];
console.log(values.sort()); // 0, 1, 10, 15, 5  sorts by String value

function compare(val1, val2) {
	return val1 - val2;
}

console.log(values.sort(compare)); // use comparator function

console.log(values.concat(-2));
console.log(values.concat(45, [20,2]));

console.log(values.slice(2)); // from index 2
console.log(values.slice(1,4)); // from index 1 upto and not including 4

// splice returns an array of any items removed
console.log("removed: " + values.splice(0,2)); // removes first two elements
console.log("result:" + values);

values = [0,1,5,10,15];
values.splice(2, 0, 5000); // insert 5000 at index 2
console.log(values);

values = [0,10,1,5,10,15];
values.splice(2, 1, 5000); // replace item at index 2 with 5000
console.log(values);

console.log(values.indexOf(10)); // get index of 10
console.log(values.lastIndexOf(10)); // get index of 10

var everyArray = values.every(function(item, index, array) { // every item must be > 0 to return true
	return item >= 0;
});
console.log("everyArray: " + everyArray);

var someArray = values.some(function(item, index, array) { // some items must be = 10 to return true
	return item == 10;
});
console.log("someArray: " + someArray);

var filterArray = values.filter(function(item, index, array) { // filter array to contain nums > 10
	return item  > 10;
});
console.log("filterArray: " + filterArray);

var doubleArray = values.map(function(item, index, array) { // double every item in the array
	return item * 2;
});
console.log("doubleArray: " + doubleArray);
console.log(values);

values.forEach(function(item, index, array) {
	console.log(item);
});

var sum = values.reduce(function(prev, cur, index, array) {
	return prev + next;
});
console.log(sum);
