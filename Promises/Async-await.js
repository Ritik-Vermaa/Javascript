function getcheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese = "🧈";
            resolve(cheese);
        }, 2000);
    });
}

function makedough(cheese) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = cheese + "🍚";
            resolve(dough);
        }, 2000);
    });
}

function bakepizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = dough + "🍕";
            resolve(pizza);
        }, 2000);
    });
}

async function orderpizza(){
     const chesse = await getcheese();
     console.log("here is your cheese ", chesse);

     const dough = await makedough(chesse);
     console.log("here is your dough ", dough);
     
     const pizza = await bakepizza(dough);
     console.log("here is your pizza", pizza);
}

orderpizza();