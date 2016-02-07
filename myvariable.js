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