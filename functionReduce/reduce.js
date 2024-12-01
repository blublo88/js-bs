console.log("Hello World")
// Lam phang mang long nhau
/*const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.reduce((acc, val) => 
    acc.concat(val), []
);
console.log(flatArray);*/

// 
const fruitArr = ["Apple", "Banana", "Organce"];
const newFruitArr = fruitArr.reduce((acc, val) => {
    return [...acc, val]}, ["Coconut"]);
console.log(newFruitArr);   