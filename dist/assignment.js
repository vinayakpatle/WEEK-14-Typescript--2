"use strict";
// interface vs types
//create 2 types called user and admin 
let bothUser = {
    name: "harkirat",
    age: 27
};
function greetings(user) {
    return "Welcome " + user.name;
}
console.log(greetings(bothUser));
