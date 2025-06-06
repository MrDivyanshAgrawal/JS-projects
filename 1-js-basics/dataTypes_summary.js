// Primitive
// 7 types: String,Number,Boolean,Null,Undefined,BigInt,Symbol
const score=100
const scoreValue=100.5
const isLoggedIn=true
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);
const bigNumber = 3456543576654356754n

// Reference (Non-Primitive)

// Array,Object,Functions

const heros=["shaktiman", "naagraj", "doga"]
let myObj={
    name:"Divyansh",
    age:"21",
}
const myFun=function(){
    console.log("Hello World");
}
console.log(typeof(myFun));

    