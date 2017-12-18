const a = 'name="value"';
const b = "name='value2'";
console.log(a);
console.log(b);

console.log('two\nlines');
console.log('this "is" now');
console.log('It\'s alright');
console.log('Store \\');
// console.log('Hello, ' + 1 + ' world');

console.log(`length: ${a.length}`);
console.log(`charAt: ${a.charAt(3)}`);
console.log(`substring: ${a.substring(2, 4)}`);
console.log(`substr: ${a.substr(3, 3)}`);
console.log(a.indexOf('e'));
console.log(a.indexOf('ue'));
console.log(a.replace('value', 'newvalue'));
console.log(b[2]);
console.log(b[b.length - 2]);

// concat a string
const s = 'hello';
console.log(s.concat(' world'));
console.log(s.toUpperCase());

// slice a string
const str = 'Apple, Banana, Kiwi';
console.log(`slice: ${str.slice(7, 13)}`);

// split a string
const txt = 'a,b,c,d,e';
const letters = txt.split(','); // split string into an array
console.log(letters);

// Convert number to string
const num = 10;
console.log(num.toString()); // "10" base 10
console.log(num.toString(2)); // "1010" base 2
console.log(num.toString(8)); // "12" base 8
console.log(num.toString(10)); // "10" base 10
console.log(num.toString(16)); // "a" base 16

// let num2;
// console.log(num2.toString()); // toString will error on null or undefined variable


// String() function
const value1 = 10;
const value2 = true;
const value3 = null;
let value4;

console.log(`value1:${String(value1)}`); // 10
console.log(`value2:${String(value2)}`); // "true"
console.log(`value3:${String(value3)}`); // "null"
console.log(`value4:${String(value4)}`); // "undefined"

