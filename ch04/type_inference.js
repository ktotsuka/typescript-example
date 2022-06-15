"use strict";
// 
// mapped types
//
let ab = {
    a: 1, b: "test"
};
let allOptional = {};
let readonlyVar = {
    a: 1, b: "test"
};
let pickAbObject = {
    a: 1,
    b: "test"
};
let recordedCdVar = {
    c: 1,
    d: 1
};
function logNumberOrString(input) {
    console.log(`logNumberOrString : ${input}`);
}
logNumberOrString(1);
logNumberOrString("test");
// logNumberOrString<boolean>(true);
logNumberOrString("boolean does not extend number");
function getTupleStringAbc(tupleValue) {
    let [...tupleDestructured] = tupleValue;
    let returnString = "|";
    for (let value of tupleDestructured) {
        returnString += `${value}|`;
    }
    return returnString;
}
let keyA = getTupleStringAbc([1]);
console.log(`keyA = ${keyA}`);
let keyAb = getTupleStringAbc([1, "test"]);
console.log(`keyAb = ${keyAb}`);
let keyAbc = getTupleStringAbc([1, "test", true]);
console.log(`keyAbc = ${keyAbc}`);
function compareValues(input, compareTo) {
    // do comparison
}
compareValues(new Date(), new Date());
compareValues(1, new Date());
compareValues(1, 2);
compareValues("test", new Date());
compareValues("test", 1);
compareValues("test", "test");
function testInferFromPropertyType(arg) { }
testInferFromPropertyType("test");
testInferFromPropertyType(1);
function testInferredFromFnParam(arg) { }
testInferredFromFnParam(1);
testInferredFromFnParam("test");
console.log("p1");
testInferredFromFnParam("test");
console.log("p2");
function testInferredFromReturnType(arg) { }
testInferredFromReturnType(1);
testInferredFromReturnType(false);
// //
// // type inference from arrays
// //
// type inferredTypeFromArray<T> = T extends (infer U)[] ? U : never;
// function testInferredFromArray<T>(args: inferredTypeFromArray<T>) { }
// testInferredFromArray<string[]>("test");
// testInferredFromArray<number[]>(1);
// //
// // standard conditional types
// //
// // exclude
// type ExcludeStringAndNumber = Exclude<
//     string | number | boolean,
//     string | number>;
// // extract
// type StringOrNumber = Extract<
//     string | boolean | never,
//     string | number>;
// let stringValue: StringOrNumber = "test";
// // nonnullable
// type NotNullOrUndef = NonNullable<number | undefined | null>;
// let numValue: NotNullOrUndef = 1;
//# sourceMappingURL=type_inference.js.map