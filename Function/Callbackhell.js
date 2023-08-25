// asynchronous function line by line execute nahi hoti ha isme diye gaye time ke bad hi function execute hota ha


//synchronous function line by line execute hote ha 


// setTimeOut function is a asynchronous function  syantx : setTimeOut(function , milisecound);


// console.log("Hello!");
// console.log("Hello!");

// setTimeout(function () {
//     console.log("This will execute later");
// },3000);
// console.log("Hello!");


function getChesse(callback) {
    setTimeout(() => {
        const chesse = "🧈"
        console.log("Here is chesse", chesse);
        callback(chesse);
    }, 2000);
}




function makedough(chesse, callback) {
    setTimeout(() => {
        const dough = chesse + "🥔";
        console.log("here is the dough", dough);
        callback(dough);
    }, 2000);

}
function bakePizza(dough, callback) {
    setTimeout(() => {
        const pizza = dough + "🍕";
        console.log("here is the pizza", pizza);
        callback(pizza);
    }, 2000);

}


getChesse((chesse) => {
    makedough(chesse, (dough) => {
        bakePizza(dough, (pizza) => {
            console.log("got my pizza", pizza);
        })
    });
});


