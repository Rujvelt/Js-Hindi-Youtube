// object literals

const mySym = Symbol("Key1")
const Juser = {
               name :"Rujvelt",
               age : 34,
               location : "Nagpur",
               [mySym] : "WTF",
               Email : "Rujvelt@123gmail.com",
               LogeedIn : false,
               LastLoginDay : ["Monday","Friday"],
               "full name" : "Hitesh Chaudhary"
              }

            //   console.log(Juser["Email"])
            //   console.log(Juser["full name"])
            //   console.log(Juser.Email)
            //   console.log(typeof Juser.mySym)

            //   Juser.Email= "Hitesh@alphabet.com"
            //   Object.freeze(Juser)
            //   Juser.Email = "Hitesh@microsoft.com"
            //   console.log(Juser);
                            
            //   Juser.Email = "hitesh@chatgpt.com"
            //   Object.freeze(Juser)
            //   Juser.Email = "Hitesh@microsoft.com"
            //   console.log(Juser);
              
              Juser.greeting = function()
              {
                console.log("Hello js user");
              }

              Juser.greeting2 = function()
              {
                console.log(`Hello js user, ${this.name}`);
              }
              
              console.log(Juser.greeting());
              console.log(Juser.greeting2());
              