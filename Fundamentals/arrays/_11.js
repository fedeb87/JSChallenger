// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers

function myFunction(arr) {
    return arr.reduce((total, num)=>{return total + num});
}