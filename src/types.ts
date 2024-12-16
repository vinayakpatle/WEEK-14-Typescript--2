//interface and type does the same thing
// difference come here 1= class can build as interface
// 2=types have equal to sign (=)
// 3=types have union and intersection

interface UserI{
    name:string;
    age:number;
}

type UserT={
    name:string;
    age:number;
}

function greeting1(user: UserI): string{
    return "Hi "+user.name;
}

function greeting2(user: UserT): string{
    return "Hi "+user.name;
}

let userI: UserI={
    name:"Vinayak",
    age:20
}

let userT: UserT={
    name:"vinayak",
    age:20
}

console.log(greeting1(userI));
console.log(greeting2(userT));
