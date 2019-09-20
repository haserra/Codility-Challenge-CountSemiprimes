// JavaScript source code


// Create UI

renderChallengeUI('Codility - Lesson 11 - Sieve of Eratosthenes', 'Task 11.1 - CountSemiprimes');

// Input options:

// 1. Define a const array

// let A = [0, 1, 1, 1, 1, 1, 1, 2, 2, 2];
// let A = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let A = [5,-7,3,5,-2,4,-1];
// let A = [3, 2, -6, 4, 0];
// let A = 1;
let A = Number(prompt('Please enter a positive integer N within the range [1..50000]', 1));
let P = [1];
let P1 = prompt('Please enter a sequence of integers repreentig the array P, separatyed by spaces').split(' ');
let Q = [1];
let Q1 = prompt('Please enter a sequence of integers repreentig the array P, separatyed by spaces').split(' ');

console.log('P contents:');
P1.forEach(function (x) {
    console.log(' ' + x + ', ');
});

console.log('Q contents:');
Q1.forEach(function (x) {
    console.log(' ' + x + ', ');
});


// 2. Read array a from file TXT

//Using Node.js require to load the necessary txt file

//  I would need:

/*
let fs = require('fs');
let a = fs.readFileSync('input.txt').toString().split("\r\n");
*/

// 3. Generate Test Cases  automatically 


// 4. Solution

// Codility: The solution obtained perfect score. (see screeshots )
let numFactors = solution(A);

function solution(N) {
    // find the number of its actors    
    let i = 1;
    let numFactors = i;












    return numFactors
}

writeOutputData(A,'input');
writeOutputData(numFactors,'output');



// 5. How to Generate n Primes

let primeNumbers = generatePrimes(10);

console.log('Generating 10 primes \n');
primeNumbers.forEach(function (x) {
    console.log(' ' + x + ', ')
});

function generatePrimes(N) {
    let n = 2;
    let count = 0;
    let primes = [];
    let isPrime = false;
    let j = 0;

    //let a = 10;


    while (count <= N) {

        let i = 2;
        isPrime = true;
        while (i * i <= n && isPrime) {
            if (n % i == 0) {
                isPrime = false;
            }
            i++
        }
        if (isPrime) {
            primes[j] = n;
            count++;
            j++;
        } 
        n++
    }
    return primes
}

// learn more here: en.wikipedia.org/wiki/Sieve_of_Eratosthenes

let sieveOfEratosthenesPrimeNumbers = sieveOfEratosthenes(17);

console.log('Generating primes using Sieve of Eratosthenes algorithm \n');
sieveOfEratosthenesPrimeNumbers.forEach(function (x) {
    console.log(' ' + x + ', ')
});

writeOutputData(sieveOfEratosthenesPrimeNumbers, 'output');

function sieveOfEratosthenes(n) {
    let i = 2;
    let sieve = [];
    //sieve.fill(true, 2, n);
    let output = [];

    for (let j = 0; j < n; j++) {
        sieve.push(true);
    }
    sieve[0] = false;
    sieve[1] = false;
    sieve.forEach(function (x) {
        console.log(' ' + x + ':  ')
    });

    while (i * i <= n) {
        if (sieve[i]) {
            k = i * i;
            while (k <= n) {
                sieve[k] = false;
                k += i
            }
        }
        i++
    }

    for (let i = 2; i < n; i++) {
        if (sieve[i]) {
            output.push(i)
        }
    }
    //return sieve
    return output
}



// learn more here jsfiddle.net/KARZw/ 

var eratosthenes = function (n) {
    // Eratosthenes algorithm to find all primes under n
    var array = [], upperLimit = Math.sqrt(n), output = [];

    // Make an array from 2 to (n - 1)
    for (var i = 0; i < n; i++) {
        array.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    for (var i = 2; i < n; i++) {
        if (array[i]) {
            output.push(i);
        }
    }

    return output;
}



