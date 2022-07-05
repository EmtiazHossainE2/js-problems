//1.Find all prime numbers

let primes = [];
for (let n = 2; n <= 100; n++) {
    if (primes.every(prime => { return n % prime != 0 })) {
        primes.push(n);
    }
}
// console.log(primes);

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
// console.log(array.filter(isPrime));

//3 find second largest number from an array 

let fans = ['Emtiaz', 'Emtiaz Emon', 'DoraEmon', 'Nobita', "Eshat hasan", 'Sj Rion Talukder']

let bigFan = '';
let secondFan = '';
for (let i = 0; i < fans.length; i++) {
    if (fans[i].length > bigFan.length) {
        secondFan = bigFan;
        bigFan = fans[i]; //Sj Rion Talukder = 16
    } else if (fans[i].length > secondFan.length && fans[i].length != bigFan.length) {
        secondFan = fans[i]; //Emtiaz Emon  = 11 
    }
}
// console.log('My big fan is =', bigFan);
// console.log('Second largest fan is =', secondFan);


// secondBig age 

const ages = [2, 5, 7, 9, 15, 20];

function findsecondBig(ages) {
    let bigAge = ages[0]
    let secondBigAge = ages[0]
    /* for (let i = 0; i < ages.length; i++) {
        const age = ages[i]
        if (age > bigAge) {
            secondBigAge = bigAge
            bigAge = age
        }
        else if (age > secondBigAge && age !== bigAge) {
            secondBigAge = age
        }
    } */
    for (const age of ages) {
        if (age > bigAge) {
            secondBigAge = bigAge
            bigAge = age
        }
        else if (age > secondBigAge && age !== bigAge) {
            secondBigAge = age
        }
    }
    return secondBigAge;
}
// console.log(findsecondBig(ages));

//4.Write a function that returns sum of all numbers. (using only forEach(),spread operator and Arithmetic operators.)

let numbers = [1,2,3,4,5,6,7,8,9,10] 

let sum = 0 
numbers.forEach(number => {
    sum+= number 
    return
});

// console.log(sum);


// 5. " We are best" --- count the vowels in this sentence ( using Array.from() and includes)

let sentence = Array.from("We re best") 
// console.log(sentence);
let vowels = ['a','e','i','o','u','A','E','I','O','U']

let count = sentence.filter(letter => vowels.includes(letter)).length

console.log(count);