"use strict";
exports.__esModule = true;
console.log('hello TypeScript');
var version = "es6";
console.log("hello ".concat(version, " TypeScript"));
var myString = "this is a string";
// myString = 1; // generates TS2322
//
// Basic types
//
var myBoolean = true;
var myNumber = 1234;
var myStringArray = ["first", "second", "third"];
// myBoolean = myNumber;
// myStringArray = myNumber;
// myNumber = myStringArray[0];
myBoolean = myNumber === 456;
myStringArray = [myNumber.toString(), "5678"];
myNumber = myStringArray.length;
console.log();
console.log("myBoolean = ".concat(myBoolean));
console.log("myStringArray = ".concat(myStringArray));
console.log("myNumber = ".concat(myNumber));
//
// Inferred typing
//
var inferredString = "this is a string";
var inferredNumber = 1;
// inferredNumber = inferredString;
//
// Duck typing
//
var nameIdObject = { name: "myName", id: 1, print: function () { } };
nameIdObject = { id: 2, name: "anotherName", print: function () { } };
//nameIdObject = { id: 3, name: "thirdName", print() {} , select() {} };
var obj1 = { id: 1, print: function () { } };
var obj2 = { id: 2, print: function () { }, select: function () { } };
obj1 = obj2;
// obj2 = obj1;
//
// Function signatures and void
//
function calculate(a, b, c) {
    return (a * b) + c;
}
console.log();
console.log("calculate() = ".concat(calculate(3, 2, 1)));
// console.log(`calculate() = ${calculate("3", "2", "1")}`);
// var returnedValue: string = calculate(3, 2, 1);
//
// Intellisense and JSDoc comments
//
/**
 *
 * Given a string value, log it to the console
 *
 * @param a     The input string.
 */
function printString(a) {
    console.log(a);
}
//var returnedValue: string = printString("this is a string");
//
// Using 3rd Party libraries
//
var inquirer = require("inquirer");
inquirer.prompt([
    {
        name: "first_name",
        message: "what is your name ?"
    }
]).then(function (answers) {
    console.log("you answered : ".concat(answers.first_name));
});
