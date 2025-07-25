const user={
    username:"Divyansh",
    logInCount:10,
    signedIn:true,

    getUserDetails:function(){
        // console.log("Got User Details from Database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username,logInCount,signedIn){
    this.username=username,
    this.logInCount=logInCount,
    this.signedIn=signedIn

    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }
    // return this
}

const userOne=new User('Divyansh',11,true)
const userTwo=new User('Divyansh Agrawal',12,false)
console.log(userOne.constructor);
// console.log(userTwo);
console.log(userTwo.greeting());




