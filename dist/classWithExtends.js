"use strict";
/*interface peoplex{
    name:string;
    age:number;
    isLegalx:()=>boolean;
}

class Managerx implements peoplex{
    name:string;
    age:number;
    constructor(name: string, age: number){
        this.name=name;
        this.age=age;
    }

    isLegalx:()=>{
        if(this.age>=18){
            return true;
        }else{
            return false;
        }
    }
}

class god extends Manager3{
    constructor(name:string,age:number){
        super(name,age);
        this.name=name;
        this.age=age;
    }
}

const userx=new god("chadwick",20);
console.log(userx.isLegalx());
console.log(userx.name);
console.log(userx.age);*/
class Manager5 {
    //name5:string;
    //age5:number;    // here we shouldn't redeclared the name and age
    constructor(name5, age5) {
        this.name5 = name5;
        this.age5 = age5;
        //this.name5=name;
        //this.age5=age;
    }
    isLegal5() {
        if (this.age5 >= 18) {
            return true;
        }
        else {
            return false;
        }
    }
}
class GodBase extends Manager5 {
    constructor(name, age) {
        super(name, age);
        this.name5 = name;
        this.age5 = age;
    }
}
const user5 = new GodBase("Vinayak", 20);
console.log(user5.isLegal5());
console.log(user5.name5);
console.log(user5.age5);
