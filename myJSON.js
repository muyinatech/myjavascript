var foo = {
	a: 1,
	b: 'a string',
	c: true
}

// Convert a JSON object to String
var json = JSON.stringify(foo);
console.log(json);
console.log(typeof json); // string

// Convert string back to JSON object
var backToJs = JSON.parse(json);
console.log(backToJs);
console.log(backToJs.a); // 1