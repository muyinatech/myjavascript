// Number Type represents both integers and floating point numbers
var intNumber = 55; // integer
var octalNumber = 070;
var hexNumber = 0x1F;
var floatNumber = 1.1;
var floatNumber2 = 1.0; // is intepreted as integer 1
var floatNumber3 = 3.142e7; // 31420000
console.log((0.1 + 0.2) == 0.3); // false never test for specific floating point numbers
console.log(12 / 0);

console.log("\n**** isNan ****");
console.log(isNaN("abc")); // true cannot be converted to a number
console.log(isNaN(NaN)); // true
console.log(isNaN(10)); // false
console.log(isNaN("10")); // false as converted to number 10
console.log(isNaN(true)); // false as converted to number 1

// parseInt is recommended over Number() function
var num1 = Number("Hello world!");
var num2 = Number("");
var num3 = Number("000011");
var num4 = Number(true);
var num5 = Number(8);
var num6 = Number(null);
var num7 = Number(undefined);
console.log("\n**** Number() conversion ****");
console.log(num1); // NaN
console.log(num2); // 0
console.log(num3); // 11
console.log(num4); // 1
console.log(num5); // 8
console.log(num6); // 0
console.log(num7); // NaN

// parseInt used for converting strings to integer numbers
console.log("\n**** Integer Conversion ****");
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

// parseFloat used for converting strings to floating point numbers
console.log("\n**** Float Conversion ****");
console.log(parseFloat("1234blue")); // 1234
console.log(parseFloat("22.5")); // 2.5
console.log(parseFloat("22.34.4")); // 22.34
console.log(parseFloat("0944.4")); // 944.4
console.log(parseFloat("3.125e7")); // 31250000