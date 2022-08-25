// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

function myFunction(a, b) {
    try{
        return b.match(new RegExp("["+a+"]", "g")).length;
    }catch(error){
        return 0;
    }
}