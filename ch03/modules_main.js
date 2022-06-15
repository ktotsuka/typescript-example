"use strict";
// 
// importing modules
//
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
const Module1_1 = require("./modules/Module1");
let mod1 = new Module1_1.Module1();
mod1.print();
//
// module renaming
//
const Module1_2 = require("./modules/Module1");
let myRenamedMod = new Module1_2.Module1();
myRenamedMod.print();
//
// multiple exports
//
const MultipleExports_1 = require("./modules/MultipleExports");
let mc1 = new MultipleExports_1.MultipleClass1();
let mc2 = new MultipleExports_1.MultipleClass2();
// 
// module namespaces
//
const MultipleExports = __importStar(require("./modules/MultipleExports"));
let meMc1 = new MultipleExports.MultipleClass1();
let meMc2 = new MultipleExports.MultipleClass2();
//
// default exports
//
const DefaultExport_1 = __importStar(require("./modules/DefaultExport"));
let modDefault = (0, DefaultExport_1.default)(1, 2);
let modNonDefault = new DefaultExport_1.ModuleNonDefaultExport();
//# sourceMappingURL=modules_main.js.map