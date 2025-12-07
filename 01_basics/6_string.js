const name = "pk"
const bc = 50
//console.log(name + bc + " value")

console.log(`Hello my name is ${name} and my bc is ${bc}`)//string interpolation
const gameName = new String('pklmnop')
console.log(gameName[0])

console.log(gameName.__proto__)
 console.log(gameName.length)
 console.log(gameName.toUpperCase())
 console.log(gameName.charAt(2))
 console.log(gameName.indexOf('m'))

 const newString = gameName.substring(0,4) //.slice-neg val
 console.log(newString)

 //.trim()-remove white spaces
 //.replace('this','that')
 //.includes,.split