// typle type
const address: [string, number] = ["Cool street", 99];


// enum type
enum Color {
    Red = '#f00',
    Green = '#0f0',
    Blue = '#00f'
}

const myColor: Color = Color.Blue;

console.log(myColor);

// function type
let multiply: (num1: number, num2: number) => number;

multiply = (a: number, b: number) => {
    return a * b;
}

console.log(multiply(2, 3));