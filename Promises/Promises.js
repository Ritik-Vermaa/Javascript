// in javascript a promises is a good way to handle asynchonous operation . it is used tp find out if the asynchonous operation is succesfully completed or not 
// A promises may have one of three states.
// 1- Panding
// 2- Fullfill
// 3- rejected

const Ticket = new Promise(function(resolve , reject){
    const isBorded = true;
    if(isBorded){
        resolve("You are in the flight");
    }
    else{
        reject("Your flight has been cancelled");
    }
})

Ticket.then((data) => {
    console.log('wohoo' , data);
});
Ticket.catch((data) =>{
    console.log('oh no ' ,data);
});
