// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

function myFunction(a, n) {
    let end = a.length;
    let solution = [];
    for(let i = n-1; i<end; i +=n)
        solution.push(a[i]);
    return solution;
}