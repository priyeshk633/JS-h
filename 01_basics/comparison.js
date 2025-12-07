console.log(2>1)
console.log("2">1) 

console.log(null > 0)
console.log(null == 0) 
console.log(null >= 0)  //comp oper convert null to 0
//undefined -all false
console.log("2" === 2) //false

//DATA TYPES
//primitive
//7 types=string,number,boolean,null,undefined,symbols,bigint

//non primitive(referenced)
//array,objects,functions

//js-weakly,dynamically typed
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const heros = ["shaktiman", "naagraj", "doga"]
let myObj={
    name: "pk",
    age: 20 ,
}
//type-object

//stack(primitive)  heap(non-primitive)
let myname = "Pk" 
let anothername = myname
anothername = "ak"
console.log(myname)
console.log(anothername)
//access to a copy(stack),original refer(heap)

let userOne = {
    email: "ak@gmail.com",
    upi: "ak@ybl",
}
let userTwo = userOne

userTwo.email = "pk@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)