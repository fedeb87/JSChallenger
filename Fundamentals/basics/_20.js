// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

function myFunction(a) {
    const isPrime = (n) => {
        for(let i = 2; i < n; i++)
            if(n % i === 0) return false;
        return true;
    }
    while(!isPrime(a)) a++;
    return a;
}