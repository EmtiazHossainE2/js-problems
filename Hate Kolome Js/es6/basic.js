// নাম্বার 5 পর্যন্ত একটা অপারেশন করতে চাচ্ছি, তারপর breakকরে দিতে চাচ্ছি 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let number of numbers) {
    if (number === 5) break
    console.log(number);
}

let position = numbers.findIndex(num => num === 7)
if (position >= 0) {
    console.log('Available on position : ', position);
}
else {
    console.log('Not available ');
}
