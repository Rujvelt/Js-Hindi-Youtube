const user =
{
    username : "hitesh",
    price : 999,
    
    WelcomeMessage:function ()
    {
     console.log(`${this.username}, Welcone to the Website`);
     console.log(this);
     
    }
}
// user.WelcomeMessage()
// user.username = "sam"
// user.WelcomeMessage()
// console.log(this);


// function chai()
// {
//     let username = "Manoj"
//     console.log(this.username);
// }
// chai()


// const chai = function()
// {
//     let username = "Parul"
//     console.log(this.username);
// }
// chai()

// const chai = () =>
// {
//     let username = "Rupal"
//     console.log(this.username);
// }
// chai()


// basic arrow function
// const addtwo = (num1,num2) =>
// {
//     return num1 + num2 
// }

// //implicit return

//(jab curley braces use krte hai tb return krna padega siple bracket use kiya to koi dikkt nh)

const addtwo = (num1, num2) => ({username:"Hitesh"})
console.log(addtwo(3,4))
