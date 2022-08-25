// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

function myFunction(a, b) {
    return a.reduce((prev, cur) => {return cur > b ? prev + cur : prev;}, 0);
}