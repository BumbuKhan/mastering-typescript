"use strict";
var Color;
(function (Color) {
    Color["Red"] = "#f00";
    Color["Green"] = "#0f0";
    Color["Blue"] = "#00f";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
