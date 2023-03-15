// length propertry

let j = "JavaScript";
console.log(j.length);
let string = '   30 Days Of JavaScript   '
console.log(j.toUpperCase());
console.log(j.toLowerCase());
console.log(j.substr(0,3));
console.log(j.substring(0,4));
//converts to array
console.log(j.split(''));
console.log(string)
console.log(string.trim(' '))


console.log(string.includes('Days'));     
console.log(string.includes('days'));
console.log(string.includes('Script'))   
console.log(string.includes('script'));  
console.log(string.includes('java'));    
console.log(string.includes('Java'));
console.log(string.replace('JavaScript', 'Python'));
console.log(string.charAt(8));
console.log(string.indexOf("J"));
console.log(string.lastIndexOf("J"));
console.log(string.concat(j));
console.log(string.startsWith("J"));
console.log(string.endsWith("S"));
console.log(string.repeat(10)) 

let firstName = 'Asabeneh'      // string
let lastName = 'Yetayeh'        // string
let country = 'Finland'         // string
let city = 'Helsinki'           // string
let age = 250                   // number, it is not my real age, do not worry about it
let job                         // undefined, because a value was not assigned

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object