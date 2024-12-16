type usertype={
    firstname:string;
    lastname:string;
    age:number;
}

let list: usertype[]=[{
    firstname:"Vinayak",
    lastname:"patle",
    age:20
},{
    firstname:"harkirat",
    lastname:"singh",
    age:27
},{
    firstname:"kunal",
    lastname:"kushwaha",
    age:27
},{
    firstname:"striver",
    lastname:"patle",
    age:17
}]

function isValid(user: usertype): boolean{
    if(user.age>=18){
        return true;
    }else{
        return false;
    }
}

let legalList: usertype[]=list.filter(isValid);
console.log(legalList);