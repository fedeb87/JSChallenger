// Write a function that takes an array of strings as argument
// Return the longest string

function myFunction(arr) {
    let solution = arr[0];
    arr.forEach(element => {
        if(element.length>solution.length) solution = element;
    });
    return solution;
}
