const array1 = new Array(); // empty array
const array2 = new Array(20); // an array of 20 items of undefined
const array3 = new Array("one", "two", "three");
const array4 = ["red", "blue", "green"]; // using an array literal
const array5 = []; // empty array
const array6 = [2, "test", {a:1}]; // array can contain mixed types
const array7 = [1+2, 3+4];
const array8 = [[1,2,3], [4,5,6], [7,8,9]]; // nested array

console.log(`array1 length: ${array1.length}`);
console.log(`array2: ${array2}`);
console.log(`array3: ${array3}`);
console.log(`array3 length: ${array3.length}`);
console.log(`array4: ${array4}`);
console.log(`array4 sorted: ${array4.sort()}`);
console.log(`array4 reverse: ${array4.reverse()}`);
console.log(`array5: ${array5}`);
console.log(`array6: ${array6}`);
console.log(`array7: ${array7}`);
console.log(`array8[1]: ${array8[1]}`);

array3.length = 2; // modify array to have two items
console.log(`array3.length = 2: ${array3}`);
array3.length = 6;
array3[5] = 100;
console.log(`array3.length = 6: ${array3}`); // modify array to have six items

// check if an array preferred
if (Array.isArray(array1)) {
	console.log("array1 is an array");
}

console.log(`array4.toString(): ${array4.toString()}`);
console.log(`array4.valueOf(): ${array4.valueOf()}`);
console.log(`array4.join("||"): ${array4.join("||")}`);
console.log(`array4.join(): ${array4.join()}`); // comma separated by default

// Array stack LIFO methods
const foo = [];
foo.push(1); // insertion
console.log(`foo: ${foo}`);
console.log(`foo[0]: ${foo[0]}`);
const count = foo.push(2); // push returns current array count
console.log(`foo count: ${count}`);
const item = foo.pop(); // removal returns the item removed
console.log(`foo after item removed: ${foo}`);
console.log(`item removed from foo: ${item}`);

// Array queue FIFO methods
const colors = [];
const count2 = colors.unshift("red", "green");
console.log(`colors: ${colors}`);
console.log(`count2: ${count2}`);

let values = [0,1,5,10,15];
console.log('values: ${values.sort()}'); // 0, 1, 10, 15, 5  sorts by String value

function compare(val1, val2) {
	return val1 - val2;
}

console.log(`values.sort(compare): ${values.sort(compare)}`); // use comparator function

console.log(`values.concat(-2): ${values.concat(-2)}`);
console.log(`values.concat(45, [20,2]): ${values.concat(45, [20,2])}`);

console.log(`values.slice(2): ${values.slice(2)}`); // from index 2
console.log(`values.slice(1,4): ${values.slice(1,4)}`); // from index 1 upto and not including 4

// splice returns an array of any items removed
console.log(`removed from values: ${values.splice(0,2)}`); // removes first two elements
console.log(`result: ${values}`);

values = [0,1,5,10,15];
values.splice(2, 0, 5000); // insert 5000 at index 2
console.log(`values: ${values}`);

values = [0,10,1,5,10,15];
values.splice(2, 1, 5000); // replace item at index 2 with 5000
console.log(`values: ${values}`);

console.log(`values.indexOf(10): ${values.indexOf(10)}`); // get index of 10
console.log(`values.lastIndexOf(10): ${values.lastIndexOf(10)}`); // get index of 10

const everyArray = values.every(function(item, index, array) { // every item must be > 0 to return true
	return item >= 0;
});
console.log(`everyArray: ${everyArray}`);

const someArray = values.some(function(item, index, array) { // some items must be = 10 to return true
	return item === 10;
});
console.log(`someArray: ${someArray}`);

const filterArray = values.filter(function(item, index, array) { // filter array to contain nums > 10
	return item  > 10;
});
console.log(`filterArray: ${filterArray}`);

const doubleArray = values.map(function(item, index, array) { // double every item in the array
	return item * 2;
});
console.log(`values: ${values}`);
console.log(`doubleArray: ${doubleArray}`);

values.forEach(function(item, index, array) {
	console.log(item);
});

