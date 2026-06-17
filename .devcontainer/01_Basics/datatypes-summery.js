//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/////-------exxample of heap non primitive data types in this we got actula refrence ------//////
let userOne = { 
               email:"user@google.com",
               upi :"rujvelt@ygk"
              }

let usertwo = userOne
usertwo.email = "hitesh@gmail.com"
console.log(userOne.email);
console.log(usertwo.email);


//--------Example of primitive stack we got and copy here not actual refrence---------//

let myyoutubename = "hiteshchaudhary.com"
let anothername = "YourYoutubename"
anothername = "chaiaurcode"
console.log(anothername);
console.log(myyoutubename);



