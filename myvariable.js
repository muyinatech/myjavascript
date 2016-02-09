var message = "hello";
console.log("message:" + message);

var message2;
console.log("message2:" + message2); // undefined

function test() {
	message3 = "hi"; // omitting var makes it a global variable not recommended
}
test();

console.log("message3:" + message3); // visible outside of the scope of the function

var message4 = null;
console.log("message4:" + message4); // null


//console.log(message5); // causes a not defined error

var num1 = 4;
var num2 = num1;
num1++;
console.log(num1); // 5
console.log(num2); // 4

var object1 = new Object();
object1.name = "test";
var object2 = object1;
object2.name = "new test";
console.log(object1.name);
