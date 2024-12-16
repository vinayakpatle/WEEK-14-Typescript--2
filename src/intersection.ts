type manager={
    name:string;
    contact:number;
}

type employee={
    name:string;
    department:string;
}

type TeamLead=manager & employee;

let teamUser: TeamLead={
    name:"Vinayak",
    contact:9322022222,
    department:"software development"
}

function cheer(user: TeamLead): string{
    return "Hey team leader "+user.name;
}

const teamAns=cheer(teamUser);
console.log(teamAns);
// intersection needs to have properties of all type