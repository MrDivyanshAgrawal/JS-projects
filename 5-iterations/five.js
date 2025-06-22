// for Each

const coding=["js","ruby","java","python","cpp"]

coding.forEach(function(val){
    // console.log(val);
});

coding.forEach((val)=>{
    // console.log(val);
})

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe);

// coding.forEach((item,ind,array)=>{
//     console.log(item,ind,array);
// })

const myCoding=[
    {
        languageName:"javascript",
        languageFilename:"js"
    },
    {
        languageName:"java",
        languageFilename:"java"
    },
    {
        languageName:"python",
        languageFilename:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item);
})
