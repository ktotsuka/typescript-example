"use strict";
//
// classes
//
class SimpleClass {
    print() {
        console.log(`SimpleClass.id = ${this.id}`);
    }
}
let mySimpleClass = new SimpleClass();
mySimpleClass.id = 2020;
mySimpleClass.print();
//
// implmenting interfaces
//
class ClassA {
    print() {
        console.log(`ClassA.print() called.`);
    }
    ;
}
class ClassB {
    print() {
        console.log(`ClassB.print() called.`);
    }
    ;
}
function printClass(a) {
    a.print();
}
let classA = new ClassA();
let classB = new ClassB();
printClass(classA);
printClass(classB);
class ClassC {
    print() {
        console.log(`ClassC.print() called.`);
    }
    ;
}
let classC = new ClassC();
printClass(classC);
//
// class constructors
//
class ClassWithConstructor {
    constructor(id) {
        this.id = id;
    }
}
let classWithConstructor = new ClassWithConstructor(10);
console.log(`classWithConstructor = 
    ${JSON.stringify(classWithConstructor)}`);
//
// class modifiers
//
class ClassWithPublicProperty {
}
let publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;
class ClassWithPrivateProperty {
    constructor(id) {
        this.id = id;
    }
}
let privateAccess = new ClassWithPrivateProperty(10);
// privateAccess.id = 20;
privateAccess["id"] = 20;
//
// ES6 private fields
//
class ClassWithCtorMods {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let myClassMod = new ClassWithCtorMods(1, "test");
console.log(`myClassMod.id = ${myClassMod.id}`);
// console.log(`myClassMod.name = ${myClassMod.name}`);
//
// readonly
//
class ClassWithReadonly {
    constructor(name) {
        this.name = "test";
        this.name = name;
    }
}
//
// Get and set
//
class ClassWithAccessors {
    constructor() {
        this._id = 0;
    }
    get id() {
        console.log(`get id property`);
        return this._id;
    }
    set id(value) {
        console.log(`set id property`);
        this._id = value;
    }
}
let classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 10;
console.log(`classWithAccessors.id = ${classWithAccessors.id}`);
// 
// static functions
//
class StaticFunction {
    static printTwo() {
        console.log(`2`);
    }
}
StaticFunction.printTwo();
//
// static properties
//
class StaticProperty {
    updateCount() {
        StaticProperty.count++;
    }
}
StaticProperty.count = 0;
let firstInstance = new StaticProperty();
let secondInstance = new StaticProperty();
firstInstance.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`);
secondInstance.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`);
//
// namespaces
//
var FirstNameSpace;
(function (FirstNameSpace) {
    class NameSpaceClass {
    }
    FirstNameSpace.NameSpaceClass = NameSpaceClass;
    class NotExported {
    }
})(FirstNameSpace || (FirstNameSpace = {}));
let nameSpaceClass = new FirstNameSpace.NameSpaceClass();
// let notExported = new FirstNameSpace.NotExported();
//
// interfaces extending classes
//
class BaseInterfaceClass {
    constructor() {
        this.id = 0;
    }
    print() {
        console.log(`this.id = ${this.id}`);
    }
}
class ImplementsExt extends BaseInterfaceClass {
    setId(id) {
        this.id = id;
    }
}
//# sourceMappingURL=classes.js.map