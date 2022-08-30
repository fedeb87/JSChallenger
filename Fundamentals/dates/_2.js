// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

function myFunction(a, b){
    return Math.abs((a - b) / (24 * 3600 * 1000));
}