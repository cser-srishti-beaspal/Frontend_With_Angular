type customType = {
    date: number | string;
    name: string;
    isAct: boolean;
}

//not use today
enum Color {
    Red,
    Green
}

//literal
type Color2 = "Red" | "Green" | "Yellow";

let c: Color2 = "Red";
console.log(c);
//only  take these 3 values
