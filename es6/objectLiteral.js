// Object literal enhancement
const animal = 'dog';
const year = '1985';
const printInfo = function() {
  console.log(`This is object has year - ${this.year}`);
};
const newObject = {animal, year, printInfo};
console.log(`newObject is ${JSON.stringify(newObject)}`);
newObject.printInfo();

const newObject2 = {
  name: 'Fred',
  // homeTown : function () { // old style object method
  //
  // },
  homeTown() { // new style object method
    return 'London';
  }
}
console.log(newObject2.homeTown());
