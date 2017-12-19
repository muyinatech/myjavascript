// if statement
let i = 100;
if (i > 1000) {
  console.log('Greater than 1000');
} else if (i > 40) {
  console.log('Greater than 40');
} else {
  console.log('?');
}

// do while
i = 0;
do {
  i += 2;
} while (i < 10);

// while
i = 0;
while (i < 10) {
  i += 2;
}

// for
const count = 10;
for (let j = 0; j < count; j += 1) {
  console.log(j);
}

// for in
const a = {};
a.name = 'Test';
a.value = 100;

for (const propName in a) {
  if (Object.prototype.hasOwnProperty.call(a, propName)) {
    console.log(propName);
  }
}

// switch
i = 30;
switch (i) {
  case 25:
    console.log('25');
    break;
  case 35:
    console.log('35');
    break;
  case 45:
    console.log('45');
    break;
  default:
    console.log('other');
}
