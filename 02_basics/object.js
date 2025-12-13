//singleton
//Object.create


//objects literals
const mySym = Symbol("key1");

const JsUser = {
    name : "Ritesh",
    "full name": "Ritesh Kumar",
    [mySym]: "mykey1",
    age : 18,
    location: "Jaipur",
    email: "ritesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday","Saturday"];
}

console.log(JsUser.email);
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "ritesh@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "ritesh@microsoft.com"
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));// has own property

//
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        
            firstname: "ritesh",
            lastname: "kumar"
        }
    }

console.log(regularUser.fullname.firstname);


//array of objects
//const users = [{},{},{}]

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj4 = {obj1, obj2, obj3}
/*const obj4 =  Object.assign({}, obj1, obj2, obj3)
console.log(obj4);
const obj = {...obj1, ...obj2, ...obj3}//spreader 
*/

//Deconstructor 
/*const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Ramesh"
}
    */
//course.courseInstructor
//const {courseInstructor: Instructor} = course //DECONSTRUCTOR
//console.log(Instructor)

//RANDOM USER ME, JSON FORMATTER
