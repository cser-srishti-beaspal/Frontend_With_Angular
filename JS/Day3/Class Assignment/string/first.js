let str1 = "Hello";      
let str2 = 'World';     
let str3 = `JS`;       

console.log(str1, str2, str3);

let text = "JavaScript";
console.log(text.length);   


let name = "Srishti";

console.log(name.toUpperCase()); 
console.log(name.toLowerCase());


let msg = "   Hello   ";
console.log(msg.trim());


let email = "abc@gmail.com";
console.log(email.includes("@")); 

let str = "JavaScript";
console.log(str.startsWith("Java")); 
console.log(str.endsWith("Script")); 

let text1 = "Hello World";
console.log(text1.slice(0, 5)); 

let text2 = "JavaScript";
console.log(text2.substring(0, 4)); 

let s1 = "Hello World";
console.log(s1.replace("World", "JS")); 

let data = "a,b,c";
let result = data.split(",");
console.log(result); 

let s = "Hello";
console.log(s.charAt(1));

let st = "Hello";
console.log(st.indexOf("l"));


let sr = "Hello";
sr[0] = "Y";
console.log(sr);

str = "Y" + str.slice(1);
console.log(str); 