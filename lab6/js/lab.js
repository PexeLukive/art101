// index.js - purpose and description here
// Author: Rani Yeh
// Date: 4/30/2024

// Constants

const myTransport = ["loop bus", "metro", 'walk', "friend's car"];

var myMainRide = {
  make: "Toyota",
  model: "Corolla",
  color: "silver",
  year: 2016,
  age: function() {
    return 2024 - this.year;
  }
}

// Output

document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
