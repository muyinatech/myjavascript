const foo = {
  a: 1,
  b: 'a string',
  c: true,
};

// Convert a JSON object to String
const json = JSON.stringify(foo);
console.log(json);
console.log(typeof json); // string

// Convert string back to JSON object
const backToJs = JSON.parse(json);
console.log(backToJs);
console.log(backToJs.a); // 1
console.log(typeof backToJs); // object
