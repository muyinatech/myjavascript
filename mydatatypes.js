// Simple Data Types - Undefined, Null, Boolean, Number, String
// Complex Data Type - Object

var aString = "hello";
console.log(typeof aString);

var aBoolean = true;
console.log(typeof true);

var aVariable;
console.log(typeof aVariable);

console.log(typeof new Object());

console.log(typeof function(){});

console.log("\nBoolean Conversion");
aBoolean = Boolean(""); // false
console.log(aBoolean == false);

aBoolean = Boolean("blah"); // true
console.log(aBoolean == true);

aBoolean = Boolean(0); // false
console.log(aBoolean == false);

aBoolean = Boolean(5); // true
console.log(aBoolean == true);

aBoolean = Boolean(null); // false
console.log(aBoolean == false);

aBoolean = Boolean(new Object()); // true
console.log(aBoolean == true);

console.log("\nNaN");
console.log(isNaN("abc")); // true
console.log(isNaN(NaN)); // true
console.log(isNaN(10)); // false
console.log(isNaN(true)); // false as converted to number 1

console.log("\nInteger Conversion");
console.log(parseInt("1234blue")); // 1234
console.log(parseInt(22.5)); // 22
console.log(parseInt("")); // NaN
console.log(parseInt("0xA")); // 10
console.log(parseInt("0xAF", 16)); // 175 using radix 16 for hexadecimal
console.log(parseInt("AF", 16)); // 175 using radix 16 for hexadecimal, 0x can be omitted
console.log(parseInt("10", 2)); // 2 parsed as binary
console.log(parseInt("10", 8)); // 8 parsed as octal
console.log(parseInt("10", 10)); // 10 parsed as decimal
console.log(parseInt("10", 16)); // 16 parsed as hexadecimal

console.log("\nFloat Conversion");
console.log(parseFloat("1234blue")); // 1234
console.log(parseFloat("22.5")); // 2.5
console.log(parseFloat("22.34.4")); // 22.34
console.log(parseFloat("0944.4")); // 944.4
console.log(parseFloat("3.125e7)); // 31250000

