interface people2{
    name:string,
    age:number
}

class Manager implements people2{
    name:string;
    age:number;

    constructor(name: string,age: number){
        this.name=name;
        this.age=age;
    }
}

let user3=new Manager("Vinayak",20);
console.log(`name of manager is ${user3.name} and age is ${user3.age}`);