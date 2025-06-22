// for of

["","",""]
[{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings="Hello world:"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map=new Map()
map.set('IN',"INDIA");
map.set('USA',"UNITED STATES OF AMERICA");
map.set('FR',"FRANCE");
map.set('IN',"INDIA");

// console.log(map);

for(const [key,val] of map){
    // console.log(key,':-',val);
}

const myOject={
    game1:"NFS",
    game2:"Spiderman"
}
for(const [key,val] of myObject){
    console.log(key,':-',val);
}
