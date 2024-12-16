type goodUser={
    name:string;
    gift:string;
}

type badUser={
    name:string;
    id:number;
}

type collegeUser=goodUser | badUser;

let collegeStudent: collegeUser={
    name:"Vinayak",
    gift:"Happy christmas",
    id:2022222
}

function detect(student: collegeUser){
    return "Hi "+student.name;
}

console.log(detect(collegeStudent));
// union can have either or all  the property
