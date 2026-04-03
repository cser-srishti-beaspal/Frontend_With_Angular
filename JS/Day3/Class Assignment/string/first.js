let str1 = "Hello";      // Double quotes
let str2 = 'World';      // Single quotes
let str3 = `JS`;         // Template literals

console.log(str1, str2, str3);

let text = "JavaScript";
console.log(text.length);   // Output: 10


let name = "Srishti";

console.log(name.toUpperCase()); // SRISHTI
console.log(name.toLowerCase()); // srishti


let msg = "   Hello   ";
console.log(msg.trim()); // "Hello"


let email = "abc@gmail.com";
console.log(email.includes("@")); // true

let str = "JavaScript";
console.log(str.startsWith("Java")); // true
console.log(str.endsWith("Script")); // true

let text1 = "Hello World";
console.log(text1.slice(0, 5)); // Hello

let text2 = "JavaScript";
console.log(text2.substring(0, 4)); // Java

let s1 = "Hello World";
console.log(s1.replace("World", "JS")); // Hello JS

let data = "a,b,c";
let result = data.split(",");
console.log(result); // ['a','b','c']

let s = "Hello";
console.log(s.charAt(1)); // e

let st = "Hello";
console.log(st.indexOf("l")); // 2


let sr = "Hello";
sr[0] = "Y";
console.log(sr); // Still "Hello"

str = "Y" + str.slice(1);
console.log(str); // Yello