// Dates

let mydate=new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toTimeString());
// console.log(mydate.toUTCString());
// console.log(typeof mydate);

let myCreateDate=new Date(2004,0,10)
// console.log(myCreateDate.toDateString());
let myCreateDate1=new Date(2004,0,10,7,45)
// console.log(myCreateDate1.toLocaleString());
let myCreateDate2=new Date("2004-01-10")
// console.log(myCreateDate2.toLocaleString());
let myCreateDate3=new Date("01-10-2004")
// console.log(myCreateDate3.toLocaleString());

let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate3.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long"
})
// console.log(newDate.toLocaleString('default',{
//     weekday:"long"
// }));







