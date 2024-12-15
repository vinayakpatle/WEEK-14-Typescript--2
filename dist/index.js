"use strict";
const user2 = {
    name: "harkirat",
    age: 25,
    address: {
        pincode: 441911,
    },
};
const user1 = {
    name: "Vinayak",
    age: 20,
    address: {
        city: "pune",
        country: "india",
        pincode: 410001,
    },
};
function isLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
function isLegal2(user) {
    if (user.age >= 18) {
        console.log(`${user.name} is legal to vote`);
    }
    else {
        console.log(`${user.name} is not legal to vote`);
    }
}
const ans = isLegal(user1);
console.log(`is ${user1.name} legal to vote? ${ans}`);
isLegal2(user2);
