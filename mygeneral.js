// automatic type conversion
console.log(10 + " objects");
console.log("7" * "4");
console.log(1 - "x");
console.log(null + 1);
console.log(true + 1);
console.log(false + 1);
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log("0" == 0); // string converted to integer
console.log(0 == false); // integer is converted to boolean
console.log("0" == false); // string is converted to boolean
console.log("0" === 0); // false no type conversion equality operator
console.log("0" !== 0); // true not equal as no type conversion equality operator

// explicit type conversion
console.log("\nTYPEOF....")
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof Number("3")); // number
console.log(typeof b) //undefined
console.log(typeof String(false)); // string
console.log(typeof Object(3)); // object
console.log(typeof Number("3").toString()); // string
console.log(typeof (1 + "")); // string

var x;
console.log(typeof x); // undefined
x = null;
console.log(typeof x); // object

if(!false) {
	console.log ('false')
}	

if(!null) {
	console.log ('false')
}	

if(!undefined) {
	console.log ('false')
}	
