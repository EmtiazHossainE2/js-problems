//০. রিকার্সন বুঝলে চমৎকার। আর না বুঝলে আপাতত রিকার্সন না বুঝলে সেটাকে সাইডে রেখে দাও। শুধু মাথায় রাখো রিকার্সন নামে একটা জিনিস আছে। সেটা একটা ফাংশনকে নিজের ভিতর থেকে কল করে। 



//১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

function feetToInch (feet){
    let inch = feet * 12 ;
    return inch
} 
let feet = 3 ;
let inch = feetToInch(feet) ;
console.log(inch);

//২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 

function centimeterToMeter (centimeter){
    let meter = centimeter / 100 ;
    return meter ;
}
let centimeter = 1000 ; 
let meter = centimeterToMeter(centimeter)
console.log(meter);

/* ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

এইবার ভালো করে খেয়াল করো। 

প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 

তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 


এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 

উত্তর হিসেবে সংখ্যা রিটার্ন করবে।  */
const book1Page = 100 ; 
const book2Page = 200 ; 
const book3Page = 300 ; 
function paperRequirements (book1, book2, book3){
    let totalBook1 = book1Page * book1 
    let totalBook2 = book2Page * book2
    let totalBook3 = book3Page * book3 
    let totalBookPage = totalBook1 + totalBook2 + totalBook3 
    return totalBookPage ; 
}
let book1 = 3 
let book2 =  5
let book3 = 9
console.log(paperRequirements(book1, book2, book3)) ;



//৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

function myFriends (friends){
    let largeName = friends[0] ;
    /* for(let friend of friends){
        if(friend.length > largeName.length ){
            largeName = friend ;
        }
    }  */
    // console.log(friends)
    for(let i = 0 ; i < friends.length ; i++){
        const friend = friends[i]
        
        if(friend.length > largeName.length ){
            largeName = friend ;
        }
    }
    return largeName ; 
}
let friendsName = ['Emtiaz','Nobita','Doraemon','Sunio','Zian'] ;
console.log(myFriends(friendsName)) ;


//৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

function checkPositiveNumber (numbers){
    let positiveNumber = [] ;
    for(const number of numbers){
        if(number >= 0){
            positiveNumber.push(number) ;
        }
        else{
            break ;
        }
    }
    /* for(let i = 0 ; i <= numbers.length; i++){
        const number = numbers[i] ;
        if(number >= 0){
            positiveNumber.push(number) ;
        }
        else{
            break ;
        }
    } */
    return positiveNumber ;
}
let myNumbers = [2,4,6,9,1,10,43,20,-2,4,0] ;
console.log(checkPositiveNumber(myNumbers)) ;  

