const names = [
    'HM Nayeem',
    'Aditya Chakraborty',
    'Abu Rayhan',
    'Shaker Hossain',
    'Akib Ahmad',
    'Alvi Chowdhury',
];
let index = -1;
let person = names[++index];

setInterval(() => {
    person = names[index++];
    console.log(person, person.length);

    if (index === names.length) {
        index = 0;
    }
}, 1000);

const student1 = {
    firstName: 'Abu',
    secondName: 'Rayhan',
    email: 'rayhan@example.com',
    age: 25,
    attend: true,
};

const student2 = {
    firstName: 'Alvi',
    secondName: 'Chowdhury',
    email: 'alvi@example.com',
    age: 25,
    attend: true,
};

const student3 = {
    firstName: 'Akib',
    secondName: 'Ahmad',
    email: 'akib@example.com',
    age: 25,
    attend: true,
};

const allStudents = [student1, student2, student3];

for (let i = 0; i < allStudents.length; i++) {
    sendEmail(allStudents[i].email);
}

function sendEmail(email) {
    console.log('Sending email to', email);
}