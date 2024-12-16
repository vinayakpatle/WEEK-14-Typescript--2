let num: number[]=[4,5,3,99,33,2,444];

function getMax(num: number[]){
    let maxElement=0;
    for(let i=1; i<num.length; i++){
        if(num[i]>num[maxElement]){
            maxElement=i;
        }
    }
   // console.log(num[maxElement]);
    return maxElement;
}

let maxAns=getMax(num);
console.log("Max element is "+num[maxAns]);

// users have multiple address;
/*interface address{
    City:string;
    Country:string;
    pincode:number;
}

type user={
    name:string;
    age:number;
    address:address[];
}
// or
type user2={
    name:string;
    age:number;
    address:{
        City:string;
        Country:string;
        pincode:number;
    }[];
}*/

