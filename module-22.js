//১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।  

function triangle (a,b,c){
    let s = ( a+b+c ) / 2 ; 
    // s= (a+b+c) /2 , area A = √ s(s-a)(s-b)(s-c)
    let areaTotal = (Math.sqrt(s * (s-a) *(s-b) * (s-c))) ;
    // return s ;
    return areaTotal ;
} 
let a = 3 ;
let b = 4 ;
let c = 5 ; 
let triangleArea = triangle(a,b,c) 
console.log(triangleArea)


//২.কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো।  

/* function primeNumber (number){
    if(number % 1 === number && number % number === 1){
        return ('Prime Number')
    }
}
console.log(primeNumber(7)) ; */ 

function isPrime(num) {
    let sqrtnum=Math.floor(Math.sqrt(num));
    let prime = num != 1;
    for(let i=2; i<sqrtnum+1; i++) { // sqrtnum+1
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}
// console.log(isPrime(6));
console.log(isPrime(7));


