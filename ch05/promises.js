"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//
// callback sytax
// 
const fs = __importStar(require("fs"));
fs.readFile("./test1.txt", (err, data) => {
    if (err) {
        console.log(`an error occurred : ${err}`);
    }
    else {
        console.log(`test1.txt contents : ${data}`);
        fs.readFile("./test2.txt", (err, data) => {
            if (err) {
                console.log(`an error occurred : ${err}`);
            }
            else {
                console.log(`test2.txt contents : ${data}`);
                fs.readFile("./test3.txt", (err, data) => {
                    if (err) {
                        console.log(`an error occurred : ${err}`);
                    }
                    else {
                        console.log(`test3.txt contents : ${data}`);
                    }
                });
            }
        });
    }
});
// 
// promise syntax
//
fs.promises.readFile("./test1.txt")
    .then((value) => {
    console.log(`ps test1.txt read : ${value}`);
    return fs.promises.readFile("./test2.txt");
}).then((value) => {
    console.log(`ps test2.txt read : ${value}`);
    return fs.promises.readFile("./test3.txt");
}).then((value) => {
    console.log(`ps test3.txt read : ${value}`);
})
    .catch((error) => {
    console.log(`an error occurred : ${error}`);
});
// 
// writing a promise
//
function fnDelayedPromise(resolve, reject) {
    function afterTimeout() {
        resolve();
    }
    setTimeout(afterTimeout, 1000);
}
function delayedResponsePromise() {
    return new Promise(fnDelayedPromise);
}
function delayedPromise() {
    // return new Promise object
    return new Promise(// start constructor
    (resolve, // resolve function
    reject // reject function
    ) => {
        // start of function definition
        function afterTimeout() {
            resolve();
        }
        setTimeout(afterTimeout, 1000);
        // end of function definition
    }); // end constructor
}
delayedPromise().then(() => {
    console.log(`delayed promise returned`);
}).catch(() => {
    console.log(`an error occurred`);
});
//
// promise errors
//
function errorPromise() {
    return new Promise((// constructor
    resolve, reject) => {
        // function definition
        console.log(`2. calling reject()`);
        reject();
    });
}
console.log(`1. calling errorPromise()`);
errorPromise().then(() => { })
    .catch(() => { console.log(`3. caught an error`); });
//
// promise returning values
//
function promiseReturningString(throwError) {
    return new Promise((resolve, reject) => {
        if (throwError) {
            reject(101);
        }
        resolve(`resolve with message`);
    });
}
console.log(`1. calling promiseReturningString`);
promiseReturningString(false)
    .then((returnValue) => {
    console.log(`2. returnedValue : ${returnValue}`);
}).catch((errorCode) => {
    console.log(`this is not called`);
});
console.log(`1. calling promiseReturningString (force error)`);
promiseReturningString(true)
    .then((returnValue) => {
    console.log(`this is not called`);
})
    .catch((errorCode) => {
    console.log(`2. caught : ${errorCode}`);
});
function complexPromise(connection, accessKey) {
    return new Promise((resolve, reject) => {
        // check the connection properties
        // connect to the database
        // retrieve data, or
        // reject with an error 
    });
}
complexPromise({
    server: "test",
    port: 4200
}, "abcd").then((rows) => {
    // do something with rows
})
    .catch((error) => {
    // do something with error
});
