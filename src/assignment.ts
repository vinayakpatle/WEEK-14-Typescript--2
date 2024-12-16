// interface vs types
//create 2 types called user and admin 

interface UserType{
    name:string;
    age:number;
}

interface Admin{
    name:string;
    permission:string;
}

type UserAdmin=UserType | Admin; // for | and & need to be type as type

let bothUser: UserAdmin={
    name:"harkirat",
    age:27
}

function greetings(user: UserAdmin){
    return "Welcome "+user.name;
}

console.log(greetings(bothUser));

// inside of interface you can use union
interface emp{
    age:string | number;
}