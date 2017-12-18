aBoolean = Boolean(''); // empty string is false
console.log(aBoolean == false); // true

aBoolean = Boolean('blah'); // non empty string is true
console.log(aBoolean == true); // true

aBoolean = Boolean(0); // zero is false
console.log(aBoolean == false); // true

aBoolean = Boolean(5); // > 0 is true
console.log(aBoolean == true); // true

aBoolean = Boolean(null); // null is false
console.log(aBoolean == false); // true

aBoolean = Boolean(undefined); // undefined is false
console.log(aBoolean == false); // true

aBoolean = Boolean(new Object()); // object is true
console.log(aBoolean == true); // true

const someString = 'test';
if (someString) { // string converted to boolean true
  console.log('test is boolean true');
}
