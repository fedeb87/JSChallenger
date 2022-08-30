// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

function myFunction(a, b){
    return a.reduce((prev, current, index) => {
        return {
           ...prev,
          [current]: b[index]
        }
      },{})
}