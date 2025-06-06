// singleton
// Object.create

// object literals

const mySym=Symbol("key1")

const jsUser={
    name:"Divyansh",
    "full name":"Divyansh Agrawal",
    [mySym]:"myKey1",
    age:21,
    location:"Indore",
    email:"divyansh@google.com",
    isLoggedIn:false,
    lastLogInDays:["Monday","Tuesday","Wednesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email="divyansh@gmail.com"
// Object.freeze(jsUser)
jsUser.email="divyansh@ind.com"
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo=function(){
    console.log(`Hello JS user,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

