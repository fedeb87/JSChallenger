// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

function myFunction(obj){
    return Object.entries(obj).reduce((acc, [key, val]) => {
        newVal = val.trim().length<1? null : val;
        return { ...acc, [key]: newVal };
    }, {});
}