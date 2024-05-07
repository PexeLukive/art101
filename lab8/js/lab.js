// Author: Rani Yeh
// Date: 5/6/2024

// Variables

var testArray = [3,19,223,412]

// Functions

function add100(x){
    var results = x + 100;
    return results;
}

function multiplyBy2(x){
    var results = x * 2;
    return results;
}

function meow(x){
    return "Meowed " + x + "times";
}

// Output

console.log(testArray.map(add100));

testArray.map(function(x){
    var results = x * 2; // your new operation on x here
    return results;
})

var mapResults = testArray.map(add100);
console.log("Results: ", mapResults);

// more tests

console.log(add100(100));
console.log(meow(223));
console.log(multiplyBy2(19));
