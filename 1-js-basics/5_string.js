const name="Divyansh"
const age=21
// console.log(name+ age + " is my name and age");

// console.log(`Hello, my name is ${name} and I am ${age} years old`);
const surName=new String("Agrawal_10")
// console.log(surName[0]);
// console.log(surName.__proto__);

// console.log(surName.length);
// console.log(surName.toUpperCase());
console.log(surName.charAt(3));
console.log(surName.indexOf("a"));

const newString=surName.substring(0,4)
console.log(newString);

const anotherString=surName.slice(-6,4)
console.log(anotherString);

const newString1="  Divyansh  "
console.log(newString1);
console.log(newString1.trim());

const url="https://github.com/MrDivyanshAgrawal"
console.log(url.replace('github','gitlab'));

console.log(url.includes('gitlab'));

console.log(surName.split('_'));



