"use strict";
let teamUser = {
    name: "Vinayak",
    contact: 9322022222,
    department: "software development"
};
function cheer(user) {
    return "Hey team leader " + user.name;
}
const teamAns = cheer(teamUser);
console.log(teamAns);
// intersection needs to have properties of all type
