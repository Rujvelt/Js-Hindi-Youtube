// const TinderUser = new Object()
 const TinderUser ={}
// console.log(TinderUser);
// const TinderUser = new Object()
// const TinderUser ={}
// console.log();
TinderUser.id = "123abc"
TinderUser.name = "sam"
TinderUser.isLoggedIn = false
// // console.log(TinderUser);

// // const regular_user
// // {
// //     email : "some@gmail.com",
// //     fullname :
// //     {
// //       userfullname :
// //       { 
// //         firstname : "hitesh",
// //         lastname : "chaudhary"
// //       }
// //     }
// // }
// console.log(regular_user.fullname.userfullname);

//-----------this is singletone object----------//
// const Aribnb = new Object() 

//-----------this is non singletone object-------//
// const Aribnb = {}
// Aribnb.id = "101" 
// Aribnb.name ="Rujvelt"
// Aribnb.isloggedin = "True"

// // console.log(Aribnb);

// const Home =  
// {
//     email:"some@gmail.com",
//     fullname :
//     {
//      username:
//      {
//         fistname :"Hitesh",
//         Lastname :"Chaudhary"
//      }
//     }
// }
// console.log(Home.fullname.username.Lastname);


// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}
// const obj4 = {5:"e",6:"f"}

//const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4) 
// const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

// const users =
// [
//     {
//         id:1,
//         email:"rujju@google.com"
//     },
//     {
//         id:2,
//         email:"rujju@oracle.com"
//     },
//     {
//         id:3,
//         email:"rujju@chatgpt.com"
//     },
//     {
//         id:4,
//         email:"rujju@microsoft.com"
//     }
// ]
// users[1].email
// console.log(TinderUser);
// console.log(Object.keys(TinderUser));
// console.log(Object.values(TinderUser));
// console.log(Object.entries(TinderUser));
// console.log(TinderUser.hasOwnProperty(`isLoggedIn:`));



const course = 
{
    coursename : "js in hindi",
    price : 999,
    courseinstructor :"Hitesh"
}
// console.log(course.courseinstructor);
const {courseinstructor :instructor}= course
// console.log(courseinstructor) = course;
console.log(instructor);


// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price": "free"
// }

[
    {}, 
    {},
    {}
]