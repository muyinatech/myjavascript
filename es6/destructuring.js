// destructuring assignment
const sandwich = {
  bread: 'wholemeal',
  meat: 'beef',
  cheese: 'swiss',
  toppings: ['lettuce', 'tomato', 'mustard']
};

let {bread, meat} = sandwich; // pulls out bread and meat out of the object and creates local variables for them
console.log(bread, meat); // wholemeal beef
bread = 'garlic';
console.log(bread, meat); // garlic beef

// destructuring function argument
const person = {
  firstname: 'Bill',
  lastname: 'Kay'
};
const praiseSomeone = ({firstname}) => `${firstname} you are the best!`;
console.log(praiseSomeone(person)); // Bill you are the best!

// destructuring arrays
const fruits = ['apple', 'kiwi', 'banana', 'orange'];
const [firstFruit] = fruits;
console.log(firstFruit); // apple

const [,,thirdFruit] = fruits;
console.log(thirdFruit); // banana