function isPrime(num){
    // Leaving out the first two prime numbers 2 and 3, and excluding 1 or anything negative
    if(num<=1) return false;
    if (num<=3) return true;

    // Incase the mumber itself is divisible by 2 or 3, since that is not prime.
    if (num%2===0 || num%3===0) return false;

    // Iterating through the numbers to check for divisors up to the sqrt of num, 
    // and using the form 6k+1( k is num) to determine the prime number
    for (let i = 5; i*i <=num; i+=6) {
        if (num%i ===0 || num%(i+2)===0){ return false;
        }
    }
    return true;
}
// Function to finally give the array of numbers 
function primesFiltered(numbers){
    // Filter the numbers in which the statement is true in isPrime
    return numbers.filter(isPrime)
}

let huh = primesFiltered([20,21,22,23,24,25,26,27,28,29,30])
console.log(huh);