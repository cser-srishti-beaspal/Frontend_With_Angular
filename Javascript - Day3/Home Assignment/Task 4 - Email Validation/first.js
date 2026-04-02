let email = "abc@gmail.com";  // change input

let regex = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|icloud)\.com$/;

if (regex.test(email)) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");
}