// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

function myFunction(str) {
    let end = str.length;
    let solution = [];
    for(let i = 0; i<end ; i++)
        solution.push(String.fromCharCode(str.charCodeAt(i) + 1));   
    return solution.join("");
}