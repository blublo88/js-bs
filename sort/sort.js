console.log("Hello world for HTML");
const numbers = [1, 5, 1999, 30, 177];
numbers.sort((a, b) => {
    console.log(a, b);
    return a - b;
});
console.log(numbers);