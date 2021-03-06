console.log('hello TypeScript');

var version = `es6`
console.log(`hello ${version} TypeScript`);

var myString: string = `this is a string`;
  // myString = 1; // generates TS2322

//
// Basic types
//
var myBoolean: boolean = true;
var myNumber: number = 1234;
var myStringArray: string[] = [`first`, `second`, `third`];
  // myBoolean = myNumber;
  // myStringArray = myNumber;
  // myNumber = myStringArray[0];

myBoolean = myNumber === 456;
myStringArray = [myNumber.toString(), "5678"];
myNumber = myStringArray.length;

console.log();
console.log(`myBoolean = ${myBoolean}`);
console.log(`myStringArray = ${myStringArray}`);
console.log(`myNumber = ${myNumber}`);

//
// Inferred typing
//
var inferredString = "this is a string";
var inferredNumber = 1;
  // inferredNumber = inferredString;

//
// Duck typing
//
var nameIdObject = { name: "myName", id: 1, print() { } };
nameIdObject = { id: 2, name: "anotherName", print() { } };
 //nameIdObject = { id: 3, name: "thirdName", print() {} , select() {} };

var obj1 = { id: 1, print() { } };
var obj2 = { id: 2, print() { }, select() { } }

obj1 = obj2;
  // obj2 = obj1;

//
// Function signatures and void
//
function calculate(a: number, b: number, c: number): number {
    return (a * b) + c;
}

console.log();
console.log(`calculate() = ${calculate(3, 2, 1)}`);
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
function printString(a: string): void {
    console.log(a);
}
  //var returnedValue: string = printString("this is a string");

//
// Using 3rd Party libraries
//
import * as inquirer from 'inquirer';

inquirer.prompt(
    [
        {
            name: "first_name",
            message: "what is your name ?"
        }
    ]
).then(answers => {
    console.log(`you answered : ${answers.first_name}`);
})