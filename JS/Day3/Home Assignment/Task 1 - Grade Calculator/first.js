let marks = 85;  // change value to test

// ELSE-IF
if (marks >= 76 && marks <= 100) {
    console.log("Grade A");
} else if (marks >= 61) {
    console.log("Grade B");
} else if (marks >= 56) {
    console.log("Grade C");
} else if (marks >= 41) {
    console.log("Grade D");
} else {
    console.log("Failed");
}

// SWITCH
switch (true) {
    case (marks >= 76 && marks <= 100):
        console.log("Grade A");
        break;
    case (marks >= 61):
        console.log("Grade B");
        break;
    case (marks >= 56):
        console.log("Grade C");
        break;
    case (marks >= 41):
        console.log("Grade D");
        break;
    default:
        console.log("Failed");
}