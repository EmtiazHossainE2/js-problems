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