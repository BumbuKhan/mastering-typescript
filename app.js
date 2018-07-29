"use strict";
// typle type
var address = ["Cool street", 99];
// enum type
var Color;
(function (Color) {
    Color["Red"] = "#f00";
    Color["Green"] = "#0f0";
    Color["Blue"] = "#00f";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
// function type
var multiply;
multiply = function (a, b) {
    return a * b;
};
console.log(multiply(2, 3));
// object types
var me = {
    name: "Gurban",
    age: 26
};
// me = {} - wont work!
console.log('me', me);
var ComplexObj = {
    name: 'Gurban',
    canRun: true,
    doActivity: function () {
        console.log('learning...');
    }
};
// union type
var myAge;
myAge = 26;
// type checking....
if (typeof myAge === "number") {
    console.log('typeof myAge === "number"');
}
