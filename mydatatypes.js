// Simple Data Types - Undefined, Null, Boolean, Number, String
// Complex Data Type - Object

var aString = "hello";
console.log(typeof aString);

var aBoolean = true;
console.log(typeof aBoolean);

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
console.log(parseFloat("3.125e7")); // 31250000

var s1 = "01";
var s2 = "1.1";
var s3 = "z";
var b = false;
var f = 1.1;
var o = {
	valueOf: function() {
		return -1;
	}
};

// unary + operator on a non-numeric performs numeric conversion
console.log("*** + conversion ***");
console.log(+s1); // 1
console.log(+s2); // 1.1
console.log(+s3); // NaN
console.log(+b); // numeric 0
console.log(+f); // 1.1
console.log(+o); // -1

console.log("*** 1- conversion ***");
console.log(-s1); // -1
console.log(-s2); // -1.1
console.log(-s3); // NaN
console.log(-b); // numeric 0
console.log(-f); // -1.1
console.log(-o); // 1


// parseInt is recommended over Number() function
var num1 = Number("Hello world!");
var num2 = Number("");
var num3 = Number("000011");
var num4 = Number(true);
console.log("*** Number() conversion ***");
console.log(num1); // NaN
console.log(num2); // 0
console.log(num3); // 11
console.log(num4); // 1


// instanceof to check reference type, where typeOf is useful for primitives
var o = new Object();
console.log(o instanceof Object);
var a = ["red", "blue", "green"];
console.log(a instanceof Array);
