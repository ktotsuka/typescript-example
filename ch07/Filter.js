"use strict";
function filterUndefined(input) {
    var _a;
    let output = [];
    for (let item of input) {
        if ((_a = item.name) === null || _a === void 0 ? void 0 : _a.length) {
            output.push(item);
        }
    }
    return output;
}
//# sourceMappingURL=Filter.js.map