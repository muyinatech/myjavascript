const value = 1; // a variable that cannot be changed
// value = 2; error;

let value2 = 100; // scoped to the code block
value2 = 200;

var topic = "JavaScript";
if (topic) {
    let topic = "React"; // scoped to the if code block
    console.log(topic) // React
}
console.log(topic) // JavaScript




