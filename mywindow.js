// Window is the global object
var message = "window screen height: " + window.screen.height;
message += "<br>window screen width: " + screen.width;
message += "<br>window screen available height: " + screen.availHeight;
message += "<br>window screen available width: " + screen.availWidth;
message += "<br>window location: " + window.location;
message += "<br>window location href: " + window.location.href;
message += "<br>window location hostname: " + location.hostname;
message += "<br>window location pathname: " + location.pathname;
message += "<br>window location protocol: " + location.protocol;
message += "<br>window location port: " + location.port;

// Get browser info
message += "<br>window navigator appName: " + navigator.appName; // full name of the browser usually Netscape
message += "<br>window navigator appCodeName: " + navigator.appCodeName; // usually Mozilla
message += "<br>window navigator appVersion: " + navigator.appVersion; // browser version
message += "<br>window navigator platform: " + navigator.platform; // os running browser
message += "<br>window navigator userAgent: " + navigator.userAgent; // USER-AGENT http header the browser sends
message += "<br>window navigator language: " + navigator.language; // browser locale
message += "<br>window navigator language: " + navigator.onLine; // whether the browser is connected to the internet

document.getElementById("message").innerHTML = message;

var myTimeout = setTimeout(function() {
  // alert box
  alert("hello");
  // confirm box
  // if (confirm("Press a button!")) {
  //   console.log("You pressed OK!");
  // } else {
  //   console.log("You pressed Cancel!");
  // }
  // prompt box
  // var person = prompt("Please enter your name", "Harry Potter");
  // if (person == null || person == "") {
  //   console.log("User cancelled the prompt.");
  // } else {
  //   console.log((txt = "Hello " + person + "! How are you today?"));
  // }
}, 5000);

var myInterval = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

function stop() {
  clearTimeout(myTimeout);
  clearInterval(myInterval);
}
function newDoc() {
  // Navigate to a given url
  location.assign("https://www.w3schools.com");
}

function gotoBBC() {
  // Navigate to a given url
  location = "https://www.bbc.co.uk/news";

  // Make browser jump to start of the document
  location = "#top";
}

function goBack() {
  history.back();
}

function goForward() {
  history.forward();
}

function go() {
  history.go(); // go +n pages forward or -n pages back in history
}
