const text = 'testing: 1, 2, 3';
const pattern = /\d+/g; // match all instances of one or more digits, g flag indicates find all matches to pattern

console.log(pattern.test(text)); // test that a match exists
console.log(text.search(pattern)); // 9: position of first match
console.log(text.match(pattern)); // array of matches
console.log(text.replace(pattern, '#')); // replace all matches with #


const value = 'bat cat hat dog [bc]at .at';
const pattern1 = /at/g; // match all instances of at in a string
const pattern2 = /[bc]at/i; // match first instance of bat or cat, i flag is case insensitive
const pattern3 = /.at/gi; // match all 3 letter words ending with at case insensitive
const pattern4 = /\[bc]at/i; // match first instance of [bc]at, i flag is case insensitive, \ escaped char
const pattern5 = /\.at/gi; // match all words = .at, i flag is case insensitive, \ escaped char
const pattern6 = new RegExp('[bc]at', 'i'); // using RegExp constructor, same as pattern2
console.log(`pattern1: ${pattern1.test(value)}`);
console.log(`pattern2: ${value.match(pattern2)}`);
console.log(`pattern3: ${value.match(pattern3)}`);
console.log(`pattern4: ${value.match(pattern4)}`);
console.log(`pattern5: ${value.match(pattern5)}`);


console.log(pattern1.global); // true
console.log(pattern1.ignoreCase); // false
console.log(pattern1.source); // at

// exec method to capture groups
const animals = 'cat and dog and fish';
const pattern7 = /cat( and dog( and fish)?)?/gi;
let matches = pattern7.exec(animals);
console.log(matches.index);
console.log(matches.input);
console.log(matches[0]);
console.log(matches[1]);
console.log(matches[2]);

matches = pattern3.exec(value); // matches first
console.log(matches.index); // 0
console.log(matches[0]); // bat

matches = pattern3.exec(value); // matches the next
console.log(matches.index); // 4
console.log(matches[0]); // cat

matches = pattern3.exec(value); // matches the next
console.log(matches.index); // 8
console.log(matches[0]); // hat
