// This is a more difficult challenge
// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds

function myFunction(a, b){
    const time = new Date(Math.abs(a-b));
    return {
        hrs: time.getUTCHours(),
        min: time.getUTCMinutes(),
        sec: time.getUTCSeconds()
    };
}