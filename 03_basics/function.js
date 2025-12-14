//sayMyName
//function addTwoNumbers(number1, number2){
//    console.log(number1 + number2);
//}
function addTwoNumbers(number1, number2){
    //const result = number1 + number2;
    //return result;
    return number1 + number2
}
 const result = addTwoNumbers(4, 6)//(4, "a")
 console.log("Result: ",result)

function loginUserMessage(username){
    if(username === undefined){ //!username
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
} 

console.log(loginUserMessage("himesh"))
console.log(loginUserMessage())

function calculateCartPrice(...num1){ //rest operator
    return num1
}
console.log(calculateCartPrice(100,200,3000))
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [100, 200, 300, 400]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));