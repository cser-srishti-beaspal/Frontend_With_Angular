let str = "Hey all, have a good day!!";  // given input

let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
        count++;
    }
}

console.log("Spaces:", count);