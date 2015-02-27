var text = "testing: 1, 2, 3";
var pattern = /\d+/g; // match all instances of one or more digits

console.log(pattern.test(text)); // test that a match exists
console.log(text.search(pattern)); // 9: position of first match
console.log(text.match(pattern)); // array of matches
console.log(text.replace(pattern, "#")); // replace all matches with #
