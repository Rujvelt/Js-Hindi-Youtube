// Immidiately Invoked Function Expression

// (function chai ()
// {
//  console.log(`Db Connect`); 
// })
// ();

(function Aurcode ()// this is named iife 
{
 console.log(`Db Connect Two`); 
})
();

( () =>  // unnamed iife
{
 console.log(`Db Connect Three`); 
})
()

( (name) => {   // parameter wise iife
 console.log(`Db Connect Four to ${name}`); 
})
('Hitesh chaudhary')