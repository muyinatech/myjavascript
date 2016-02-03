var a = 'name="value"';
var b = "name='value2'";
console.log(a);
console.log(b);
console.log("length:" + a.length);

console.log("two\nlines");
console.log("this \"is\" now");
console.log("Hello, " + "world");
console.log(a.charAt(3));
console.log(a.substring(2,4));
console.log(a.indexOf("e"));
console.log(a.replace("value", "newvalue"));
console.log(b[2]);
console.log(b[b.length-2]);
var s = "hello";
console.log(s.concat(" world"));
console.log(s.toUpperCase());

// Convert number to string
var num = 10;
console.log(num.toString()); // "10" base 10
console.log(num.toString(2)); // "1010" base 2
console.log(num.toString(8)); // "12" base 8
console.log(num.toString(10)); // "10" base 10
console.log(num.toString(16)); // "a" base 16

var num2;
//console.log(num2.toString()); // toString will error on null or undefined variable


// String() function
var value1 = 10;
var value2 = true;
var value3 = null;
var value4;

console.log("value1:" + String(value1)); // 10
console.log("value2:" + String(value2)); // "true"
console.log("value3:" + String(value3)); // "null"
console.log("value4:" + String(value4)); // "undefined"

