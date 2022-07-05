//১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো।
const myName = 'Emtiaz ' ;
var myAge = 23 ;
let isMyAge23 = true ; 

//২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়।
let price = 55 ;
const countryName = 'Bangladesh ' ;
price = 100 ; 
// console.log(price); 

//৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো।   
let num1 = 20 ;
let num2 = 10 ; 
let totalAddition = num1 + num2 ;
console.log(totalAddition);

let totalSubtraction = num1 - num2 ;
console.log(totalSubtraction);

let totalMultiplication = num1 * num2 ;
console.log(totalMultiplication);

let totalDivision = num1 / num2 ;
console.log(totalDivision);


//৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।  
function myComparison (num1, num2){
    let bigNum = num1 > num2 
    console.log('number 1 is big', bigNum); 
    let smallNum = num2 < num1 
    console.log('number 2 is small', smallNum); 
    let isEqual = num1 == num2 
    console.log('Is they are equal', isEqual); 
    let isNotEqual = num1 != num2 
    console.log('Is they are not equal', isNotEqual); 
    let equalOrSmall = num1 <= num2 
    console.log('is num2 equal or small', equalOrSmall); 
    let equalOrBig = num1 >= num2 
    console.log('is num1 equal or big', equalOrBig); 
}
let myNum1 = 100 ;
let myNum2 = 20 ;
myComparison(myNum1 ,myNum2)

//৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 
let num3 = 32 
let num4 = 52 
let result3 = num3 > num4 && num3 < num4 
console.log('2tai ki sotti :',result3);

let result4 = num3 > num4 || num3 < num4 
console.log('Jekono ekta ki sotti :',result4); 

//৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো  

let number = 50 ; 
if(number >= 80 && number <=100){
    console.log('You get A+ ')
}
else{
    console.log('Fail ');
}

//৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 
// while loop 
let i = 7 ; 
while(i<=19){
    if(i % 2 !=0 ){
        console.log(i);
    }
    i++
}
// for loop (chepta version of while loop )
// for(let i = 7 ; i<=19 ; i++){
//     if(i % 2 !=0 ){
//         console.log(i);
//     }
// }

//৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 
let myArray = ['Abdul', 'Babdul', 'Cabdul', 'Dabdul', 'Ebdul', 'Fabdul','Gabdul'] ;
let myArrayElement = myArray.length ;
console.log(myArrayElement); 
myArray[3] = 'Mokbul' 
console.log(myArray); 
myArray.push('Habdul','Ibdul')
console.log(myArray);
myArray.pop()
console.log(myArray); 

//৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 

function allElement (myArray){
    for(let i = 0 ; i<myArray.length ; i++){
        const element = myArray[i]
        console.log(element);
    }
    // for(const element of myArray){
    //     console.log(element);
    // } 
}

//১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 
function greaterthan80 (numbers){
    let biggerThan80 = [] 
    for(const elements of numbers){
        if(elements >= 80){
            biggerThan80.push(elements)
        }
    }
    return biggerThan80
}
let answer = greaterthan80([56,5,4,87,69,59,39,100])
console.log(answer);

//১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 
function output (value1, value2, value3){
    let result = value1 * value2 * value3 
    console.log(result);
}
output(5,10,20) ;



//১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 
let myObj = {
    name : 'Emtiaz', 
    age : 22 ,
    learning : 'JavaScript' 
}
console.log(myObj);
myObj.age = 23 ; 
console.log(myObj);

