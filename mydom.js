// Select element by id
document.getElementById("demo").innerHTML = "Hello World!";

// Select elements by name
console.log(document.getElementsByName("helloButton")[0]);

// select elements by tag name
var x = document.getElementsByTagName("span")[0];
console.log(x.innerHTML);

// Set element style attribute
x.style.fontWeight = "bold";

// select child elements by tag name
console.log(
  document.getElementById("test").getElementsByTagName("button")[0].innerHTML
);

// select elements by class name
console.log(document.getElementsByClassName("intro")[0].innerHTML);
