const names = [
    'Emtiaz',
    'Emon',
    'Alif',
    'Raju',
    'Jamal',
    'Salam',
];
let index = -1;
let person = names[++index];

setInterval(() => {
    person = names[index++];
    // console.log(person, person.length);

    if (index === names.length) {
        index = 0;
    }
}, 1000);

const student1 = {
    firstName: 'Emtiaz',
    secondName: 'Emon',
    email: 'emtiaz@gmail.com',
    age: 21,
    attend: true,
};

const student2 = {
    firstName: 'Dora',
    secondName: 'Emon',
    email: 'doraemon@gmail.com',
    age: 23,
    attend: true,
};

const student3 = {
    firstName: 'Nobita',
    secondName: 'Nobi',
    email: 'nobita@gmail.com',
    age: 20,
    attend: false,
};

const allStudents = [student1, student2, student3];

for (let i = 0; i < allStudents.length; i++) {
    sendEmail(allStudents[i].email);
}

function sendEmail(email) {
    console.log('Sending email to', email);
}

//random number
function generateRandomNumber(max) {
    const randomNumber = Math.floor(Math.random() * max);
    return randomNumber;
}

console.log(generateRandomNumber(10));
console.log(generateRandomNumber(100));
console.log(generateRandomNumber(1000));