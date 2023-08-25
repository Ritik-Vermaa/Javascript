// jab ek function ko dusare function ke under as a parameter pass karte  ho to us ko ham callback function khate ha

// A callback function passed as an argument to another function


const calculate = (a, b ,operation) =>{
    return operation (a,b);
}


// jab function ka kuch name nahi hota ha us function ko anonemas function khate ha

//methiod 1
 const addition = calculate(3 , 4 , function ( num1 ,num2){
    return num1 + num2;

});

console.log(addition);

//method 2
const subtraction = (a,b) => a-b;

const subresult = calculate(8 ,3 ,subtraction);

console.log(subresult);

//method 3

function multiply(a,b) {
    return a*b;
}

const multiresult = calculate(10,3 ,multiply);

console.log(multiresult);

