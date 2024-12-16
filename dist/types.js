"use strict";
//interface and type does the same thing
// difference come here 1= class can build as interface
// 2=types have equal to sign (=)
// 3=types have union and intersection
function greeting1(user) {
    return "Hi " + user.name;
}
function greeting2(user) {
    return "Hi " + user.name;
}
let userI = {
    name: "Vinayak",
    age: 20
};
let userT = {
    name: "vinayak",
    age: 20
};
console.log(greeting1(userI));
console.log(greeting2(userT));
