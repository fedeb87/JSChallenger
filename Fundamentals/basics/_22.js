// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

function myFunction(a, b) {
    let start = a.length-3;
    let arrayA = a.split("");
    for(let i = start ; i>=0 ; i-=3)
        arrayA.splice(i, 0, b);
    return arrayA.join("");
}