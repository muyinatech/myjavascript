var i = 100;
if (i > 1000) {
	console.log("Greater than 1000");
} else if (i > 40) {
	console.log("Greater than 40");
} else {
	console.log("?");
}

i = 0;
do {
	i += 2;
} while(i < 10);

i = 0;
while (i < 10) {
	i += 2;
}

var count = 10;
for (var i = 0; i < count; i++) {
	console.log(i);
}

var a = new Object();
a.name = "Test";
a.value = 100;

for(var propName in a ) {
	console.log(propName);
}

var i = 30;
switch(i) {
	case 25:
		console.log("25");
		break;
	case 35:
		console.log("35");
		break;
	case 45:
		console.log("45");
		break;
	default: 
		console.log("other");
}
