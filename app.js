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
