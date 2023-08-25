const a = [4, 2, -1, -5, 2, 3, , -9, -6, 9, 8]



const firstnegative = (num) =>{
    return num < 0;
}

const result = a.find(firstnegative);
const result1 = a.findIndex(firstnegative);
 
console.log(result);
console.log(result1);



a.forEach((num , i) =>{

    console.log("array num " , num , i);
});