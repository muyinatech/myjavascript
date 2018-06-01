// spread operator to combine arrays
const cities = ['paris', 'london', 'tokyo'];
const clothes = ['jacket', 'shirt', 'skirt'];
const allThings = [...cities, ...clothes];
console.log(`allThings - ${allThings.toString()}`);

const [lastCity] = [...cities].reverse(); // copy, reverse and take first
console.log(`lastCity - ${lastCity}`);

const [firstItem, ...rest] = clothes; // get the first then the rest
console.log(`first item of clothing - ${firstItem}`);
console.log(`rest of the clothes - ${rest.toString()}`);

// spread operator to take function arguments as an array
const takeThem = (...args) =>  {
  for (let n of args) {
    console.log(n);
  }
};
takeThem(34,3,99,2);

// spread operator to combine objects
const morning = {
  breakfast: 'oatmeal',
  lunch: 'peanut butter and jelly'
};
const dinner = 'mac and cheese';
const meals = {
  ...morning,
  dinner,
};
console.log(`meals - ${JSON.stringify(meals)}`);