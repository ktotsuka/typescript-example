"use strict";
//
// callback syntax
//
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const async_and_await_1 = require("./async_and_await");
function invokeAsync(success, failure) {
}
function usingCallbacks() {
    function afterCallbackSuccess() {
        // execute when the callback succeeds
    }
    function afterCallbackFailure() {
        // execute when the callback fails
    }
    // call a function and provide both callbacks
    invokeAsync(afterCallbackSuccess, afterCallbackFailure);
    // code here does not wait for callback to execute
}
function usingPromises() {
    (0, async_and_await_1.delayedPromise)().then(() => {
        // execute on success
    }).catch(() => {
        // execute on error
    });
    // code here does not wait for promise to return
}
function usingAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, async_and_await_1.delayedPromise)();
            // continue to next line of code on error
        }
        catch (error) {
            // execute on error
        }
        // code here waits for async call to complete
    });
}
