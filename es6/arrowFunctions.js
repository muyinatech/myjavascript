const lordify = firstname => `${firstname} of Canterbury`; // single arg, parentheses not required
console.log(lordify('William')); // William of Canterbury

const fullname = (firstname, lastname) => `Your full name is ${firstname} ${lastname}.`; // multi-arg, parentheses required
console.log(fullname('Sarah', 'Jones'));

const title = (gender) => { // multiple statements, curly braces required & return statements
  if (gender === 'M') {
    return 'Mr';
  } else {
    return 'Mrs/Ms/Miss';
  }
};
console.log(title('F'));

let bunny = {
  name: 'Usagi',
  showName: function () {
    console.log(`Bunny's name is ${this.name}`);
  }
};
bunny.showName(); // Usagi

bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function () {
    this.tasks.forEach(function (task) {
      console.log(`${this.name} wants to ${task}`); // this.name is undefined, as this is the window object
    });
  }
};
bunny.showTasks();

bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function () {
    const _this = this; // store this whilst still in scope
    this.tasks.forEach(function (task) {
      console.log(`${_this.name} wants to ${task}`); // this.name is Usagi
    });
  }
};
bunny.showTasks();

bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function () {
    this.tasks.forEach(function (task) {
      console.log(`${this.name} wants to ${task}`); // this.name is Usagi
    }.bind(this)); // bind to this of the showTask method
  }
};
bunny.showTasks();

// arrow functions binding this to parent function
bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks() {
    this.tasks.forEach((task) => { // arrow function mean this is bound to the parent function
      console.log(`${this.name} wants to ${task}`); // this.name is Usagi
    });
  }
};
bunny.showTasks();
