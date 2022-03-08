//1.Find all prime numbers
let primes = [];
for (let n = 2; n <= 100; n++) {
    if (primes.every(prime => { return n % prime != 0 })) {
        primes.push(n);
    }
}
console.log(primes);

//2.Find all prime numbers in an array 
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1
}
console.log(array.filter(isPrime));