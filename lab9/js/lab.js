// Author: Rani Yeh
// Date: 5/12/2024
// Requirements: jQuery must be loaded for this script to work

// jQuery functions

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
    console.log("clicked challenge");
});

// add button to problems section
$("#problems").append("<button id='button-problems'>Make Special</button>");

// add click listener to problems button
$("#button-problems").click(function(){
    $("#problems").toggleClass("special");
    console.log("clicked problems");
});

// add button to results section
$("#results").append("<button id='button-results'>Make Special</button>");

// add click listener to results button
$("#button-results").click(function(){
    $("#results").toggleClass("special");
    console.log("clicked results");
});