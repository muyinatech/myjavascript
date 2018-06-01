function output(item = 'default', someObject = {test: 'fence'}) {
  console.log(`output is ${item} ${someObject.test}`);
}

output(); // default fence
output('apple', {test: 'wall'}); // apple wall