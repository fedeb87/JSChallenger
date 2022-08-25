// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

function myFunction(arr) {
    const solution = new Map();
    arr.forEach(element => {
        let index = element.charAt(0).toLowerCase();
        if(solution.has(index))
            solution.set(index,solution.get(index).concat([element]));
        else
            solution.set(index,[element]);
    });
    return solution;
}

console.log(myFunction(['Alf', 'Alice', 'Ben']));