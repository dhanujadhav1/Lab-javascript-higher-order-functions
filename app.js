//1
var modifiedFood = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
function slice() {
    return modifiedFood.slice(1, 4);
}

//2
modifiedFood.splice(2, 0, "Sweet potato", "Mango");
console.log(modifiedFood);
//3
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
console.log(numberArray.filter((value) => value % 2 == 0));
//5
//const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
console.log(numberArray.filter((value) => value % 2 == 0));
//6


const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray) {
    return myArray.map(value => value * value);
}


//7
var myArray1 = [2, 3, 5, 10];
console.log(myArray.reduce(function (vailu, initial) { return vailu * initial }));
function multiply(myArray1) {
    // return myArray.reduce(function(initial){return initial*initial},1);


}

