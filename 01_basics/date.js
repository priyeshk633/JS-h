//DATES
let myDate = new Date()
console.log(myDate.toString());//toDateString, toLocaleString
//type myDate = object
let CreatedDate = new Date(2023 , 0 , 8 , 5 , 3);
console.log(CreatedDate.toLocaleString()); //Date("2023-01-14")

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(CreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

newDate.toLocaleString('dafault',{
    weekday: "long",
    
})
