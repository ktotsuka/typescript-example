"use strict";
//
// function overrides
//
trace("trace with string");
trace(true);
trace(1);
trace({ id: 1, name: "test" });
//
// nested namespaces
//
FirstNamespace.SecondNamespace.ThirdNamespace.log("test");
//
// interfaces
// 
let myIdName = { id: 1, name: "test" };
//
// classes
//
let myClass = new MyModuleClass();
myClass.print();
//
// static classes
//
MyModuleStatic.id = 10;
MyModuleStatic.print();
//
// abstract classes
//
class DerivedFromAbstract extends MyModuleAbstract {
    print() { }
}
//
// generics
//
let sortedStringArray = sort(["first", "second"]);
let sortedNumericArray = sort([1, 2, 3]);
//# sourceMappingURL=declaration_file_samples.js.map