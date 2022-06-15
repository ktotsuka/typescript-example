"use strict";
function printGeneric(value) {
    console.log(`typeof T is : ${typeof value}`);
    console.log(`value is : ${value}`);
}
printGeneric(1);
printGeneric("test");
printGeneric(true);
printGeneric(() => { });
printGeneric({ id: 1 });
printGeneric("test");
// printGeneric<string>(1);
//
// multiple generic types
//
function usingTwoTypes(first, second) {
}
usingTwoTypes(1, "test");
usingTwoTypes(1, "test");
usingTwoTypes(true, false);
usingTwoTypes("first", "second");
//
// constraining the type of T
//
class Concatenator {
    concatenateArray(items) {
        let returnString = "";
        for (let i = 0; i < items.length; i++) {
            returnString += i > 0 ? "," : "";
            returnString += items[i].toString();
        }
        return returnString;
    }
}
let concator = new Concatenator();
let concatResult = concator.concatenateArray([
    "first", "second", "third"
]);
console.log(`concatResult = ${concatResult}`);
concatResult = concator.concatenateArray([
    1000, 2000, 3000
]);
console.log(`concatResult = ${concatResult}`);
function useT(item) {
    item.print();
    // item.id = 1; // error : id is not common
    // item.name = "test"; // error : name is not common
}
//
// generic constraints
//
function printProperty(object, key) {
    let propertyValue = object[key];
    console.log(`object[${String(key)}] = ${propertyValue}`);
}
let obj1 = {
    id: 1,
    name: "myName",
    print() { console.log(`${this.id}`); }
};
printProperty(obj1, "id");
printProperty(obj1, "name");
// printProperty(obj1, "surname");
printProperty(obj1, "print");
class LogClass {
    logToConsole(iPrintObj) {
        iPrintObj.print();
    }
}
let printObject = {
    print() { console.log(`printObject.print() called`); }
};
let logClass = new LogClass();
logClass.logToConsole(printObject);
//
// creating new objects within generics
//
class ClassA {
    constructor() {
        this.id = 1;
    }
}
class ClassB {
}
// function createClassInstance<T>
//     (arg1: T): T {
//     return new arg1(); // error : see below
// }
function createClassInstance(arg1) {
    return new arg1();
}
let classAInstance = createClassInstance(ClassA);
console.log(`${JSON.stringify(classAInstance)}`);
//# sourceMappingURL=generics.js.map