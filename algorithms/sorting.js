const swap = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index1], array[index2]];
};

const unsortedArray = size => {
  const array = new ArrayList();
  for (let i = size; i > 0; i --) {
    array.insert(i);
  }
  return array;
};

function ArrayList() {
  const array = [];

  this.insert = item => {
    array.push(item)
  };

  this.toString = () => {
    return array.join();
  };

  this.bubbleSort = () => {
    const length = array.length;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length-1-i; j++) {
        if (array[j] > array [j+1]) {
          swap(array, j, j+1);
        }
      }
    }
  };

  this.selectionSort = () => {
    const length = array.length;
    let indexMin;
    for (let i=0; i <length-1; i++) {
      indexMin = i;
      for (let j=i; j < length; j++) {
        if (array[indexMin] > array[j]) {
          indexMin = j;
        }
      }
      if ( i !== indexMin) {
        swap(i, indexMin);
      }
    }
  };

}


const insertionSort = function(array) {
  var length = array.length;

  for(var i = 1; i < length; i++) { // loop through array
    var temp = array[i]; // create temp variable for current element
    for(var j = i - 1; j >= 0 && array[j] > temp; j--) { // create var and set to previous element's index, loop backwards while index >=0 and current element > temp var
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }

  return array;
}

let array = unsortedArray(5);
console.log(array.toString());

array.bubbleSort();
console.log(array.toString());

array = unsortedArray(5);
array.selectionSort();
console.log(array.toString());


console.log(insertionSort([3,5,1,4,2]));