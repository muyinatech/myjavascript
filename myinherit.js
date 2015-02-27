function inherit(p) {
	return Object.create(p);
}

var o = {}
o.x = 1;

var p = inherit(o);
p.y = 2;

var q = inherit(p);
q.z = 3;

console.log(q.x + q.y + q.z);
if(q.test) { console.log("test property exists") }
if(q.y) { console.log("y property exists") }

delete q.x;
if(!q.x) { console.log("x property does not exists") }
console.log( "y" in q); // y property in q object
console.log( q.hasOwnProperty("y")); // reurns false a y is an inherited property

var h = {x:1, y:2, z:3}
for (l in h) {
	console.log(l);
}

console.log(Object.getOwnPropertyDescriptor(o, "x"));
Object.defineProperty(o, "w", {writable: false});
console.log(Object.getOwnPropertyDescriptor(o, "w"));
console.log(o.isPrototypeOf(p));
console.log(classof(o));

