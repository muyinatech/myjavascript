//The Proxy object defines a target (an empty object here) and a handler object in which a get trap is implemented.
// Here, an object that is proxied will not return undefined when getting undefined properties,
// but will instead return the number 42.

var handler = {
  get: function(target, name) { // The handler.get() method is a trap for getting a property value.
    return name in target ? target[name] : 42;
  }};
var p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42

//Revocable Proxy
//The Proxy.revocable() method is used to create a revocable Proxy object.
// This means that the proxy can be revoked via the function revoke and switches the proxy off.
// Afterwards, any operation on the proxy leads to a TypeError.

var revocable = Proxy.revocable({}, {
  get: function(target, name) {
    return '[[' + name + ']]';
  }
});
var proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo);  // TypeError is thrown
proxy.foo = 1;           // TypeError again
delete proxy.foo;        // still TypeError
typeof proxy;            // "object", typeof doesn't trigger any trap