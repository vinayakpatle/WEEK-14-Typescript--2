"use strict";
class usert {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello() {
        console.log("abstract class have default function like that"); // abstract let's you create a default function(diff of abstract and interface)
    }
}
class Employee extends usert {
    constructor(name, age) {
        super(name, age);
        this.name = name;
        this.age = age;
    }
    greet() {
        return "Hi " + this.name;
    }
}
const EmployeeObject = new Employee("Vinayak", 20);
console.log(EmployeeObject.greet());
console.log(EmployeeObject.name);
console.log(EmployeeObject.age);
