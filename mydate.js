console.log(new Date());

console.log(Date.now());

var someDate = new Date(2014, 10, 2, 11, 30);
console.log(someDate);
console.log(someDate.getFullYear());
console.log(someDate.getMonth());
console.log(someDate.getDate());
console.log(someDate.getDay());
console.log(someDate.getHours());
console.log("getTime: " + someDate.getTime()); // milliseconds
console.log(someDate.toString());
console.log("toDateString: " + someDate.toDateString());
console.log("toTimeString: " + someDate.toTimeString());
console.log(someDate.toLocaleDateString());
console.log(someDate.toLocaleTimeString());
console.log(someDate.toUTCString());
someDate.setHours(14);
console.log("Set hours to 14: " + someDate);

console.log(new Date("7/12/1959"));
console.log(new Date("May 14 2001"));
console.log(new Date("May 14 2001 12:30"));
console.log(Date.parse("Feb 25 2009"));
console.log(Date.parse("were")); // NaN

var date1 = new Date(2012, 11, 30);
var date2 = new Date(2013, 5, 15);
console.log(date2 > date1);