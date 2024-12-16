interface people2{
    name:string,
    age:number
}

class Manager implements people2{
    name:string;
    age:number;
    phone:number;// you can add some extra also ahead of people interface

    constructor(name: string,age: number){
        this.name=name;
        this.age=age;
        this.phone=9322000000; // here you need to initialize it 
    }
}

let user3=new Manager("Vinayak",20);
console.log(`name of manager is ${user3.name} and age is ${user3.age}`);