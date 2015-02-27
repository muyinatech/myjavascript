var a = 'name="value"';
var b= "name='value2'";
console.log(a);
console.log(b);
console.log(a.length);

console.log("two\nlines");
console.log("this \"is\" now");
console.log("Hello, " + "world");
console.log(a.charAt(3));
console.log(a.substring(2,4));
console.log(a.indexOf("e"));
console.log(a.replace("value", "newvalue"));
console.log(b[2]);
console.log(b[b.length-2]);

var num = 10;
console.log(num.toString()); // "10"
console.log(num.toString(2)); // "1010"
console.log(num.toString(8)); // "12"
console.log(num.toString(10)); // "10"
console.log(num.toString(16)); // "a"
var num2;
//console.log(num2.toString()); // toString will error on null or undefined variable

