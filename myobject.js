var obj1 = new Object();
obj1.name = "test";

var foo = {}; // same as new Object();
console.log(foo);
foo.bar = 123; // extend foo
console.log(foo); // { bar: 123 } calls toString()
console.log(foo.hasOwnProperty("bar")); // check if property exists on object
console.log(foo.bar); // dot notation preferred
console.log(foo["bar"]); // bracket notation
var propName = "bar";
console.log(foo[propName]);

//alternative
var foo = {
	bar: 123, 
	bas: {
		bas1: 'some string',
		bas2: 345
	}, // nested object
	bat: [1,2,3], // array
	bay: [{qux:1}, {qux:2}, {qux:3}] //array containing object literals
};
console.log(foo);
console.log("foo.bar: " + foo.bar);
console.log("foo.bas.bas2: " + foo.bas.bas2);
console.log("foo.bat[2]: " + foo.bat[2]);

var person = {
	name: "Nicholas",
	age: 29,
	job: "Software Engineer",

	sayName: function() {
		console.log(this.name);
	}

};

Object.defineProperty(person, "location", {
	writable:false,
	configurable:false,
	value: "London"
});

// not updated to new york as location property is read only
person.location = "New York";

console.log(person.location);

// not deleted as location property is configurable
delete person.location;

console.log(person.location);

var book = {
	_year:2004, //underscore indicates that a property is not intended to be accessed from outside of the object's methods.
	edition: 1,
	_ref:null
};

Object.defineProperty(book, "year", {
	get:function() {
		return this._year;
	},
	set:function(newValue){
		if(newValue > 2004) {
			this._year = newValue;
			this.edition += newValue - 2004;
		}
	}
});


// object with setter only
Object.defineProperty(book, "ref", {
	set:function(newValue){
		this._ref = newValue;
	}
});

book.year = 2005;
console.log(book.edition);
book.ref = "ABC";
console.log(book.ref);


// Added multiple properties to an object
Object.defineProperties(book, {
	_title: {
		value: "Book 1"
	},

	price: {
		value: 10.99
	},
	
	title: {
		get: function(){
			return this._title;
		},

		set: function(newValue){
			this._title = newValue;
		}
	}	
});

console.log(book.title);

var descriptor = Object.getOwnPropertyDescriptor(book, "_title");
console.log(descriptor.value);
console.log(descriptor.configurable);
console.log(typeof descriptor.get);

function displayInfo(args) {
	if (args.age > 25) {
		console.log("old");
	} else {
		console.log("young");
	}
}

// pass object literal as a function argument
displayInfo({
	"name":"Fred",
	"age":"16"
});