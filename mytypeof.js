var aString = "hello";
console.log("typeof aString: " + typeof(aString)); // string

console.log("typeof true: " + typeof true); // boolean

console.log("typeof 100: " + typeof 100); // number

var aVariable;
console.log("typeof aVariable: " + typeof aVariable); // undefined

console.log("typeof aVariable2: " + typeof aVariable2); // undefined even though aVariable2 has not be declared

var aVariable3 = null; // recommended to declare a variable to null, if is to hold an object later, instead of leaving undefined
aVariable3 = new Object();

console.log("typeof new Object(): " + typeof new Object()); // object

console.log("typeof null: " + typeof null); // object, as it considered to be an empty object

console.log("typeof function: " + typeof function(){}); // function

console.log("typeof (1 + \"\"): " + typeof (1 + "")); // string