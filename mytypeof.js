const aString = 'hello';
console.log(`typeof aString: ${typeof (aString)}`); // string

console.log(`typeof true: ${typeof true}`); // boolean

console.log(`typeof 100: ${typeof 100}`); // number

let aVariable;
console.log(`typeof aVariable: ${typeof aVariable}`); // undefined

console.log(`typeof aVariable2: ${typeof aVariable2}`); // undefined even though aVariable2 has not be declared

let aVariable3 = null; // recommended to declare a variable to null,
// if is to hold an object later, instead of leaving undefined
aVariable3 = {};

console.log(`typeof aVariable3: ${typeof aVariable3}`); // object

console.log(`typeof null: ${typeof null}`); // object, as it considered to be an empty object

const aFunction = () => {};
console.log(`typeof function: ${typeof aFunction()}`); // function

console.log(`typeof (1 + ""): ${typeof (1 + "")}`); // string
