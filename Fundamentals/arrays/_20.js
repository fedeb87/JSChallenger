// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}


/* Author's solution

    return arr.reduce((acc, cur) => {
    const firstLetter = cur.toLowerCase().charAt(0);
    return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
    }, {});
*/

function myFunction(arr) {
    const result =  arr.reduce((prev, current) => {
    const initial = current.split('')[0].toLowerCase();
    return { 
        ...prev, 
        [initial]: [...(prev[initial] ?? []), current] 
    };
    }, {});
    return result;
}

console.log(myFunction(['Alf', 'Alice', 'Ben']));