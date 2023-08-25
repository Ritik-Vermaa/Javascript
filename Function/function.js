function sayMyName() {
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("I");
    console.log("K");
}

//sayMyName();


function addTwoNumber(number1, number2) {
    let result = (number1 + number2);
    return result;
}

const result = addTwoNumber(10, 35)

console.log("Result :", result);


function loginuserMassege(username) {

    if (username === undefined) {
        console.log("Please enter a username");
        return

    }
    return `${username} just logged in`

}

console.log(loginuserMassege("Ritik"));


function calculateCartPrice(...number1) {
    return number1
}

//console.log(calculateCartPrice(200,400,500));


const user = {
    username: "Ritik",
    price: 199

}


function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user);


const myNewArray = [200,300,400,600]

function returnSecoundvalue(getValue) {
    return getValue[2]
}

//console.log(returnSecoundvalue(myNewArray));
console.log(returnSecoundvalue([200,300,400,600]));

