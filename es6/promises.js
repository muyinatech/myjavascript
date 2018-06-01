const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > .5) {
      resolve("SUCCESS")
    } else {
      reject("FAILURE")
    }
  }, 250);
});

const successCallback = result => console.log(result);
const failureCallback = e => console.log(`An error occurred - ${e}`);
//promise1.then(successCallback).catch(failureCallback);
promise1.then(successCallback, failureCallback) // same as above

const doSomething = () => new Promise((resolve, reject) => {
  resolve('a');
});

const doSomethingElse = value => new Promise((resolve, reject) => {
  resolve(value + 'b');
});

const doThirdThing = value => new Promise((resolve, reject) => {
  resolve(value + 'c');
});

// chain promises
doSomething()
  .then(result => doSomethingElse(result))
  .then(newResult => doThirdThing(newResult))
  .then(finalResult => {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);

const promise2 = new Promise((resolve, reject) => {
  console.log('Initial');

  resolve('i am promise 2');
})

promise2.then(() => {
    throw new Error('Something failed');
  })
  .catch(() => { // catch and continue
    console.log('Do that');
  })
  .then(() => {
    console.log('Do this, no matter what happened before');
  });


// All method
// Trigger `catch` Method, if any one promise rejected.
// Trigger `then` Method, once every promise fulfilled.
Promise.all([promise1, promise2]).then(([result, result2]) => {
  console.log(`${result} ${result2}`)
}).catch(e => console.log(e));