// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

function myFunction(min, max) {
    let solution = [];
    for(let i = min ; i<=max ; i++)
        solution.push(i);
    return solution;
}