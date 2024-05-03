// Author: Rani Yeh
// Date: 5/3/2024

// Functions

// sortUsername - function that sorts the letters of the user's name and returns the string of sorted letters
function sortUsername() {
    var username = window.prompt("Please enter your name.");
    console.log("username: ", username);
    // convert string into array
    var nameArray = username.split('');
    console.log("nameArray: ", nameArray);
    // sort array
    var sortedNameArray = nameArray.sort();
    console.log("sortedNameArray", sortedNameArray);
    // convert sorted array back into string
    var sortedName = sortedNameArray.join('');
    return sortedName;
}

// Output

document.writeln(sortUsername(), "</br>");