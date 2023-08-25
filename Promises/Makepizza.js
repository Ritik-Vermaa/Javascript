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

getcheese().then((cheese) => {
    console.log("here is your cheese ", cheese);
    return makedough(cheese);
})

    .then((dough) => {
        console.log("here is your dough ", dough);
        return bakepizza(dough);
    })

    .then((pizza) => {
        console.log("here is your pizza", pizza);
    })

    .catch((error) => {
        console.log("Error occurred", error);
    });
