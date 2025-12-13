const myArr = [0,1,2,3];
const myArr2 = new Array(4,5,6);

myArr.push(5);
myArr.push(6);
console.log(myArr);

myArr.unshift(9);
myArr.shift();

console.log(myArr);

const newArr = myArr.join();//into strings
//slice, splice
const marvel_heros = ["Thor","Ironman"];
const dc_heros = ["Superman","Batman"];

//marvel_heros.push(dc_heros);
//marvel_heros.cocat(dc_heros);

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],6,7,[4,5]]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); 


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "Hitesh"}))

let score1 = 100;
let score2  = 200;
let score3 = 300;

console.log(Array.of(score1, score2,score3));