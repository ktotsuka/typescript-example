"use strict";
//
// interface inheritance
//
class IdNameClass {
    constructor() {
        this.id = 0;
        this.name = "nameString";
    }
}
let multipleObject = {
    id: 1,
    name: "myName",
    description: "myDescription"
};
//
// class inheritance
//
class BaseClass {
    constructor() {
        this.id = 0;
    }
}
class DerivedFromBaseClass extends BaseClass {
    constructor() {
        super(...arguments);
        this.name = "nameString";
    }
}
class MultipleInterfaces {
    constructor() {
        this.id = 0;
        this.name = "nameString";
    }
}
// 
// the super keyword 
//
class BaseClassWithCtor {
    constructor(id) {
        this.id = id;
    }
}
class DerivedClassWithCtor extends BaseClassWithCtor {
    constructor(id, name) {
        super(id);
        this.name = name;
    }
}
let derivedClassInstance = new DerivedClassWithCtor(1, "test");
//
// function overriding 
//
class BaseClassWithFn {
    print(text) {
        console.log(`BaseClassWithFn.print() : ${text}`);
    }
}
class DerivedClassFnOverride extends BaseClassWithFn {
    print(text) {
        console.log(`DerivedClassFnOverride.print(${text})`);
    }
}
let derivedClassFnOverride = new DerivedClassFnOverride();
derivedClassFnOverride.print("test");
class DerivedClassFnCallthrough extends BaseClassWithFn {
    print(text) {
        super.print(`from DerivedClassFncallthrough : ${text}`);
    }
}
let derivedCallthrough = new DerivedClassFnCallthrough();
derivedCallthrough.print("text");
//
// protected
//
class BaseClassProtected {
    constructor(id) {
        this.name = "";
        this.id = id;
    }
}
class AccessProtected extends BaseClassProtected {
    constructor(id) {
        super(id);
        console.log(`base.id = ${this.id}`);
        // console.log(`base.name = ${this.name}`);
    }
}
let accessProtected = new AccessProtected(1);
// accessProtected.id = 1;
// accessProtected.name = "test";
//
// abstract classes
//
class EmployeeBase {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class OfficeWorker extends EmployeeBase {
    doWork() {
        console.log(`${this.name} : doing work`);
    }
}
class OfficeManager extends OfficeWorker {
    constructor() {
        super(...arguments);
        this.employees = [];
    }
    manageEmployees() {
        super.doWork();
        for (let employee of this.employees) {
            employee.doWork();
        }
    }
}
let joeBlogg = new OfficeWorker(1, "Joe");
let jillBlogg = new OfficeWorker(2, "Jill");
let jackManager = new OfficeManager(3, "Jack");
jackManager.employees.push(joeBlogg);
jackManager.employees.push(jillBlogg);
jackManager.manageEmployees();
//
// instanceof
//
class A {
}
class BfromA extends A {
}
class CfromA extends A {
}
class DfromC extends CfromA {
}
console.log(`A instance of A : 
    ${new A() instanceof A}`);
console.log(`BfromA instance of A : 
    ${new BfromA() instanceof A}`);
console.log(`BfromA instance of BfromA : 
    ${new BfromA() instanceof BfromA}`);
console.log(`CfromA instance of BfromA : 
    ${new CfromA() instanceof BfromA}`);
console.log(`DfromC instance of CfromA : 
    ${new DfromC() instanceof CfromA}`);
console.log(`DfromC instance of A : 
    ${new DfromC() instanceof A}`);
//# sourceMappingURL=inheritance.js.map