//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

const string = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const array = string.split(", ");
console.log(array);

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let js = "30 Days Of JavaScript";
console.log(js.replace("JavaScript","Python"))

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(js.charAt(15));

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(js.charCodeAt(15));

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(js.indexOf("a"));

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(js.lastIndexOf("a"));

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let st = 'You cannot end a sentence with because because because is a conjunction'
console.log(st.indexOf("because"));

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(st.lastIndexOf("because"));

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(st.search("because"));

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(st.trim());

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(js.startsWith("30"));

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(js.endsWith("JavaScript"));

//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(js.match("a"));

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log(js.concat("Hi"));

//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(js.repeat(2));