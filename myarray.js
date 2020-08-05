const array1 = new Array(); // empty array
const array2 = new Array(20); // an array of 20 items of undefined
const array3 = new Array('one', 'two', 'three');
const array4 = ['red', 'blue', 'green']; // using an array literal
const array5 = []; // empty array
const array6 = [2, 'test', { a: 1 }]; // array can contain mixed types
const array7 = [1 + 2, 3 + 4];
const array8 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // nested / two-dimensional array

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
console.log(`array8[1][2]: ${array8[1][2]}`);

array3.length = 2; // modify array to have two items
console.log(`array3.length = 2: ${array3}`);
array3.length = 6;
array3[5] = 100;
console.log(`array3.length = 6: ${array3}`); // modify array to have six items

// check if object is an array (preferred)
if (Array.isArray(array1)) {
  console.log('array1 is an array');
}

console.log(`array4.toString(): ${array4.toString()}`);
console.log(`array4.valueOf(): ${array4.valueOf()}`);
console.log(`array4.join("||"): ${array4.join('||')}`);
console.log(`array4.join(): ${array4.join()}`); // comma separated by default

// Array stack LIFO methods push & pop
const foo = [];
foo.push(1); // insertion at the end of the array
console.log(`foo: ${foo}`);
console.log(`foo[0]: ${foo[0]}`);
const count = foo.push(2); // push returns current array count
console.log(`foo count: ${count}`);
const item = foo.pop(); // removal returns the item removed removes item from the end of the array
console.log(`foo after item removed: ${foo}`);
console.log(`item removed from foo: ${item}`);

// Array queue FIFO methods unshift & shift
const colors = ['blue'];
const count2 = colors.unshift('red', 'green'); // insert at the start of the array
console.log(`colors: ${colors}`);
console.log(`count2: ${count2}`);

const count3 = colors.shift(); // remove from start of the array
console.log(`colors: ${colors}`);
console.log(`count3: ${count3}`);

let values = [0, 1, 5, 10, 15];
delete values[2]; // delete item at index 2
console.log(`delete values[2]: ${values}`); // 0, 1, 10, 15, 5  sorts by String value
console.log(`values: ${values.sort()}`); // 0, 1, 10, 15, 5  sorts by String value

function compare(val1, val2) {
  return val1 - val2;
}

console.log(`values.sort(compare): ${values.sort(compare)}`); // use comparator function

console.log(`values.concat(-2): ${values.concat(-2)}`);
console.log(`values.concat(45, [20,2]): ${values.concat(45, [20, 2])}`);

console.log(`values.slice(2): ${values.slice(2)}`); // from index 2
console.log(`values.slice(1,4): ${values.slice(1, 4)}`); // from index 1 upto and not including 4

// splice returns an array of any items removed
console.log(`removed from values: ${values.splice(0, 2)}`); // removes first two elements
console.log(`result: ${values}`);

values = [0, 1, 5, 10, 15];
values.splice(2, 0, 5000); // insert 5000 at index 2
console.log(`values: ${values}`);

values = [0, 10, 1, 5, 10, 15];
values.splice(2, 1, 5000); // replace item at index 2 with 5000
console.log(`values: ${values}`);

// Array.indexOf() & Array.lastIndexOf()
console.log(`values.indexOf(10): ${values.indexOf(10)}`); // get index of 10
console.log(`values.lastIndexOf(10): ${values.lastIndexOf(10)}`); // get index of 10

// Array.every()
const everyArray = values.every(
  (
    item,
    index // every item must be > 0 to return true
  ) => item >= 0
);
console.log(`everyArray: ${everyArray}`);

// Array.some()
const someArray = values.some(
  (
    item2,
    index,
    array // some items must be = 10 to return true
  ) => item2 === 10
);
console.log(`someArray: ${someArray}`);

// Array.filter()
const filterArray = values.filter(
  (
    item,
    index,
    array // filter array to contain nums > 10
  ) => item > 10
);
console.log(`filterArray: ${filterArray}`);

// Arrays.map()
const doubleArray = values.map(
  (
    item,
    index,
    array // double every item in the array
  ) => item * 2
);
console.log(`values: ${values}`);
console.log(`doubleArray: ${doubleArray}`); // new array created with doubled values

values.forEach((item) => {
  console.log(item);
});

// Array.reduce()
const sum = values.reduce(function (prev, cur, index, array) {
  return prev + cur;
});
console.log(`values.reduce: ${sum}`);

// Delete from an array at index
delete values[3]; // removes item at index 3 and is set to undefined
console.log(`values: ${values}`);

// 2D array
const tempByDay = [
  [72, 75, 79, 79, 81, 81],
  [81, 79, 75, 75, 73, 72],
];
// print all the items of the 2D array
for (let i = 0; i < tempByDay.length; i++) {
  for (let j = 0; j < tempByDay[i].length; j++) {
    console.log(`tempByDay: ${tempByDay[i][j]}`);
  }
}

// 3D array
const tempByDay2 = [
  [
    [72, 75],
    [79, 79],
  ],
  [
    [81, 81],
    [81, 79],
  ],
  [
    [75, 75],
    [73, 72],
  ],
];
// print all the items of the 3D array
for (let i = 0; i < tempByDay2.length; i++) {
  for (let j = 0; j < tempByDay2[i].length; j++) {
    for (let k = 0; k < tempByDay2[j].length; k++) {
      console.log(`tempByDay2: ${tempByDay2[i][j][k]}`);
    }
  }
}

// Array.includes() ES7
values = [10, 15, 3, 33, 21, 10, 100, 2];
console.log(`values.includes(15): ${values.includes(15)}`); // ES7 returns true if the element is found in the array
console.log(`values.includes(10, 3): ${values.includes(10, 3)}`); // ES7 returns true if the element is found in the array from index 3 onwards
console.log(`values.includes(15, 3): ${values.includes(15, 3)}`); // ES7 returns true if the element is found in the array from index 3 onwards

// Array.forEach()
console.log('values.forEach');
values.forEach((x) => {
  console.log(x % 10);
});

console.log('for..of');
for (let n of values) {
  console.log(n);
}

const valuesTwo = [1, 2, 3];
/* Using @@iterator, the Array class has a property named @@iterator introduced in ES6. 
To use this, we need to access the Symbol.iterator property of the array as follows:- */
let iterator = valuesTwo[Symbol.iterator]();
console.log(`iterator: ${iterator.next().value}`);
console.log(`iterator: ${iterator.next().value}`);
console.log(`iterator: ${iterator.next().value}`);
console.log(`iterator: ${iterator.next().value}`); // undefined

// entries method returns @@iterator which contains key/value pairs of index & value
let aEntries = valuesTwo.entries();
console.log(aEntries.next().value); // [0,1]
console.log(aEntries.next().value); // [1,2]

// keys method returns the keys of the array
let aKeys = valuesTwo.keys();
console.log(aKeys.next()); // { value: 0, done: false }
console.log(aKeys.next()); // { value: 1, done: false }
console.log(aKeys.next()); // { value: 2, done: false }
console.log(aKeys.next()); // { undefined, done: true }

// values method returns the values of the array
// let aValues = valuesTwo.values();
// console.log(aValues.next()); // { value: 0, done: false }
// console.log(aValues.next()); // { value: 1, done: false }
// console.log(aValues.next()); // { value: 2, done: false }
// console.log(aValues.next()); // { undefined, done: true }

let valuesTwoCopy = Array.from(valuesTwo); // create a new array from an existing one
console.log(`valuesTwoCopy: ${valuesTwoCopy}`);

let numbers = Array.of(1, 2, 3, 4, 5, 6); // create an array from the given arguments
console.log(`numbers: ${numbers}`);

lnumbers = Array.of(...valuesTwo); // create an array from the given using the spread operator
console.log(`numbers: ${numbers}`);

numbers.fill(0); // fill the array all with value 0
console.log(`numbers: ${numbers}`);

numbers.fill(4, 3); // fill the array all with value 3 starting at index 3
console.log(`numbers: ${numbers}`);

numbers.copyWithin(0, 4);
console.log(`numbers: ${numbers}`); // copy the values from index 4 onwards to index 0;

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const multipleOf3 = (x) => x % 3 === 0;
console.log(numbers.find(multipleOf3)); // find first item in the array where multipleOf3 returns true
console.log(numbers.findIndex(multipleOf3)); // find the index of the first item in the array where multipleOf3 returns true

// Typed Arrays ES7
let length = 5;
let int16 = new Int16Array(length);
int16[0] = 'er';
console.log(`int16: ${int16}`);
int16[0] = 1;
console.log(`int16: ${int16}`);
