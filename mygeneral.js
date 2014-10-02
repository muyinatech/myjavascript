// automatic type conversion
console.log(10 + " objects");
console.log("7" * "4");
console.log(1 - "x");
console.log(null + 1);
console.log(true + 1);
console.log(false + 1);
console.log(null == undefined);
console.log("0" == 0);
console.log(0 == false);
console.log("0" == false);
console.log("0" === 0); // no type conversion equality operator

// explicit type conversion
console.log(typeof Number("3"));
console.log(typeof String(false));
console.log(typeof Object(3));
console.log(typeof Number("3").toString());

console.log(typeof (1 + ""));

// undefined
var x;
console.log(typeof x);
x = null;
console.log(typeof x);

var scope = "global";
function checkscope() {
	var scope = "local";
	return scope;
}
console.log(checkscope());

var scope = "global";
function checkscope2() {
	var scope = "local";
	function nested() {
		var scope = "nested scope";
		return scope;
	}
	return nested();
}
console.log(checkscope2());