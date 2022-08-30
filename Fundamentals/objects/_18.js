// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

function myFunction(a){
    return a.reduce((count, current) => {
        return {
          ...count,
          [current]: (count[current] || 0) + 1,
        };
      }, {});
}

