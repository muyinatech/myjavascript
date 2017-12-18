const message = 'hello';
console.log(`message:${message}`);

let message2;
console.log(`message2:${message2}`); // undefined

// global variable
// function test() {
//  message3 = 'hi'; // omitting var makes it a global variable not recommended
// }
// test(); // not defined error

// console.log(`message3:${message3}`); // visible outside of the scope of the function

const message4 = null;
console.log(`message4:${message4}`); // null


// console.log(message5); // causes a not defined error

let num1 = 4;
const num2 = num1;
num1 += 1;
console.log(num1); // 5
console.log(num2); // 4

const object1 = {};
object1.name = 'test';
const object2 = object1;
object2.name = 'new test';
console.log(object1.name);

const p = { x: 1, y: 1 };
console.log(`x in p ${'x' in p}`);
