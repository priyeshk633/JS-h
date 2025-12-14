let a = 400
var c = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
}
console.log(a)
console.log(b)
console.log(c)

function one(){
    const username = "himesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    console.log(website)
    two()
} 
one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username + website);
    }
    console.log(website);
}
///////////////
function addone(num){
    return num + 1
}
addone(5)

addTwo(6)//wrong //bef var dec
const addTwo = function(num){
    return num + 2
}
