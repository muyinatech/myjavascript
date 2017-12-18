var scope = 'global';
function checkscope() {
  const scope = 'local';
  return scope;
}
console.log(`check scope: ${checkscope()}`);

function checkscope2() {
  const scope = 'local';
  function nested() {
    const scope = 'nested scope';
    return scope;
  }
  return nested();
}
console.log(checkscope2());

function test(o) {
  const i = 0; // i is defined throughout function
  if (typeof o === 'object') {
    var j = 0; // j is defined throughout function
    for (var k = 0; k < 10; k++) { // k is defined throughout function
      console.log(k);
    }
    console.log(k);
  }
  return j;
}

console.log(test(Object(1)));

var scope = 'global';
function checkscope3() {
  const scope = 'local';
  function nested() {
    console.log(scope);
    const scope2 = 'nested scope\n';
    return scope2;
  }
  return nested();
}
console.log(checkscope3());

var scope = 'global';
function checkscope4() {
  console.log(scope); // undefined
  var scope = 'local';
  return scope;
}
console.log(checkscope4());

