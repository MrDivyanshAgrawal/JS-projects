function sayMyName(){
    console.log("D");
    console.log("I");
    console.log("V");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
}
// sayMyName()

// function addtwoNumbers(number1 ,number2){
//     console.log(number1+number2);
// }
function addtwoNumbers(number1 ,number2){
    // let result=number1+number2
    // return result
    return number1+number2
} 
// addtwoNumbers(3,5)
const result=addtwoNumbers(3,5)

// console.log(result);

function loginuserMessage(username="sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginuserMessage("Divyansh"))
// console.log(loginuserMessage())

function calculateCartPrice(val1,val2,...num1){
    return num1
} 

// console.log(calculateCartPrice(200,400,500,2000));

const user={
    username:"Divyansh",
    prices:2000
}

function handelObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handelObject(user)
handelObject({
    username:"Divyansh",
    price:999
})

const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));

