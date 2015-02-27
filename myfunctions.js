function sum(num1, num2){
	return num1 + num2;
}
console.log(sum(15, 57));

function howManyArgs() {
	console.log(arguments.length);
	if (arguments.length > 0) {
		console.log(arguments[0]);
	}
}
howManyArgs();
howManyArgs(2,45,67);
console.log("\n");

function howManyArgs2(num1) {
	console.log(num1);
	console.log(arguments.length);
	if (arguments.length > 0) {
		console.log(num1);
		console.log(arguments[1]);
	}
}
howManyArgs2();
howManyArgs2(2,45,67);


