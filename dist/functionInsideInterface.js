"use strict";
const user = {
    name: "vinayak",
    age: 20,
    greet: () => {
        if (user.age >= 18) {
            return `${user.name} is legal to vote`;
        }
        else {
            return `${user.name} is not legal to vote`;
        }
    }
};
const ans2 = user.greet();
console.log(ans2);
