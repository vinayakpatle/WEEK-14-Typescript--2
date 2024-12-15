interface address {
    city?: string;
    country?: string;
    pincode: number;
  }
  
  interface User {
    name: string;
    age: number;
    address?: address;
  }
  // ? is used to make optional
  
  interface office {
    name: string;
    address: address;
  }
  
  const user2: User = {
    name: "harkirat",
    age: 25,
    address: {
      pincode: 441911,
    },
  };
  
  const user1: User = {
    name: "Vinayak",
    age: 20,
    address: {
      city: "pune",
      country: "india",
      pincode: 410001,
    },
  };
  
  function isLegal(user: User): boolean {
    if (user.age >= 18) {
      return true;
    } else {
      return false;
    }
  }
  
  function isLegal2(user: User) {
    if (user.age >= 18) {
      console.log(`${user.name} is legal to vote`);
    } else {
      console.log(`${user.name} is not legal to vote`);
    }
  }
  
  const ans = isLegal(user1);
  console.log(`is ${user1.name} legal to vote? ${ans}`);
  isLegal2(user2);
  