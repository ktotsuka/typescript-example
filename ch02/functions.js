//
// optional parameters
//
function concatValues(a, b) {
    console.log("a + b = ".concat(a + b));
}
concatValues("first", "second");
concatValues("third");
//
// default parameters
//
function concatWithDefault(a, b) {
    if (b === void 0) { b = "default"; }
    console.log("a + b = ".concat(a + b));
}
concatWithDefault("first", "second");
concatWithDefault("third");
//
// rest parameters
//
function testArguments() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i in args) {
        console.log("args[".concat(i, "] = ").concat(args[i]));
    }
}
testArguments("1");
testArguments(10, 20);
//
// Function callbacks
//
function myCallback(text) {
    console.log("myCallback called with ".concat(text));
}
function withCallbackArg(message, callbackFn) {
    console.log("withCallback called, message : ".concat(message));
    callbackFn("".concat(message, " from withCallback\""));
}
withCallbackArg("initial text", myCallback);
function add(a, b) {
    return a + b;
}
add("first", "second");
add(1, 2);
function withLiteral(input) {
    console.log("called with : ".concat(input));
}
withLiteral("one");
withLiteral("two");
withLiteral("three");
withLiteral(65535);
// withLiteral("four");
// withLiteral(2);
