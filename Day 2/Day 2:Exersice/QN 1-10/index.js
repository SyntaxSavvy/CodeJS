//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let js =  "30 Days of JavaScript";

//Print the string on the browser console using console.log()
console.log(js);

//Print the length of the string on the browser console using console.log()
console.log(js.length);

//Change all the string characters to capital letters using toUpperCase() method
console.log(js.toUpperCase());

//Change all the string characters to lowercase letters using toLowerCase() method
console.log(js.toLowerCase());

//Cut (slice) out the first word of the string using substr() or substring() method
console.log(js.substr(0,8));

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(js.substr(0,21));

//Check if the string contains a word Script using includes() method
console.log(js.includes("Script"));

//Split the string into an array using split() method
console.log(js.split());

//Split the string 30 Days Of JavaScript at the space using split() method
console.log(js.split(" "));
