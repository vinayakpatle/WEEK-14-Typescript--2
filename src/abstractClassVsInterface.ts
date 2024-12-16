abstract class usert{  // abstract class is like theory uper uper se bta raha hu
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    abstract greet():string;

    hello(){
        console.log("abstract class have default function like that");  // abstract let's you create a default function(diff of abstract and interface)
    }
}

class Employee extends usert{
    name:string;
    age:number;
    constructor(name:string,age:number){
        super(name,age);
        this.name=name;
        this.age=age;
    }

    greet(){
        return "Hi "+this.name;
    }
}

const EmployeeObject=new Employee("Vinayak",20);
console.log(EmployeeObject.greet());
console.log(EmployeeObject.name);
console.log(EmployeeObject.age);
