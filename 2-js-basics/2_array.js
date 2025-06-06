const marvelHeros=["thor","ironman","spiderman"]
const dcHeros=["superman","flash","batman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const AllHeros = marvelHeros.concat(dcHeros)
// console.log(AllHeros);

const allHeros=[...marvelHeros,...dcHeros]
// console.log(allHeros);

const anotherArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_arr=anotherArr.flat(Infinity)
// console.log(anotherArr);
// console.log(real_another_arr);

// console.log(Array.isArray("Divyansh"));
// console.log(Array.from("Divyansh"));
// console.log(Array.from({name:"Divyansh"}));

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));

