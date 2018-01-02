// Simple Data Types - Undefined, Null, Boolean, Number, String
// Complex Data Type - Object

const s1 = '01';
const s2 = '1.1';
const s3 = 'z';
const b = false;
const f = 1.1;
let g = {
  valueOf() {
    return -1;
  },
};

// unary + operator on a non-numeric performs numeric conversion
console.log('\n**** + conversion ****');
console.log(+s1); // 1
console.log(+s2); // 1.1
console.log(+s3); // NaN
console.log(+b); // numeric 0
console.log(+f); // 1.1
console.log(+g); // -1

console.log('\n**** - conversion ****');
console.log(-s1); // -1
console.log(-s2); // -1.1
console.log(-s3); // NaN
console.log(-b); // numeric 0
console.log(-f); // -1.1
console.log(-g); // 1


// instanceof to check reference type, where typeOf is useful for primitives
console.log('\n**** instanceof conversion ****');
let o = {};
console.log(o instanceof Object);
const a = ['red', 'blue', 'green'];
console.log(a instanceof Array);
console.log(a instanceof Object); // true also as all reference types are instances of Object
console.log(1 instanceof Object); // false primitives are not Object

console.log('\n**** automatic type conversion ****');
console.log(`${10} objects`); // string
console.log('7' * '4');
console.log(1 - 'x'); // NaN
console.log(null + 1); // 1
console.log(true + 1); // 2
console.log(false + 1); // 1
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log('0' == 0); // string converted to integer
console.log(0 == false); // integer is converted to boolean
console.log('0' == false); // string is converted to boolean
console.log('0' === 0); // false no type conversion equality operator
console.log('0' !== 0); // true not equal as no type conversion equality operator
console.log(NaN == NaN); // false if any operand is NaN
console.log(false == 0); // true
console.log(true == 1); // true
console.log(true == 2); // false

if (!false) {
  console.log('false');
}

if (!null) {
  console.log('false');
}

if (!undefined) {
  console.log('false');
}

console.log('\n**** ! operator ****');
console.log(!false); // true
console.log(!'test'); // false
console.log(!0); // true
console.log(!NaN); // true
console.log(!''); // true
console.log(!334); // false

console.log(!!'test'); // true
console.log(!!0); // false
console.log(!!NaN); // false
console.log(!!''); // false
console.log(!!334); // true

const result = -24 > 0 ? 'yes' : 'no';
console.log(result);

