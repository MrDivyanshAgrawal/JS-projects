// let myName="Divyansh  "
// let mySurName="Agrawal    "
// console.log(myName.trueLength);

let myHeros=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getspiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.divyansh=function(){
    console.log(`divyansh is present in all objects`);
}

Array.prototype.heyDivyansh=function(){
    console.log(`Divyansh says Hello`);
}
// heroPower.divyansh()
// myHeros.divyansh()
// myHeros.heyDivyansh()
// heroPower.heyDivyansh()

// inheritence

const user={
    name:"javascript",
    email:"js@gmail.com"
}
const teacher={
    makeVideo:true
}

const teachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:"JS assignment",
    fullTime:true,
    __proto__:teachingSupport
}

teacher.__proto__=user


// modern syntax

Object.setPrototypeOf(teachingSupport,teacher)

let anotherUsername="Javascript    "

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"divyansh".trueLength()
"icetea".trueLength()