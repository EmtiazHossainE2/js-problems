//1.Remove first n characters of string
function myFunc(a) {
    // return a.slice(3, 5)
    return a.substring(3, 7) //3 num e jeta oita diye start hobe,r 7 num theke bad sob 
}

console.log(myFunc('Emtiazfdf'));

//2.Get first n characters of string
function getStr(str) {
    return str.slice(0, 3)
}
console.log(getStr('123456'));

//3.Extract first half of string
function halfStr(str) {
    return str.slice(0, str.length / 2)
}
console.log(halfStr('1234567898'));

//4Remove last n characters of string
function lastStr(a) {
    return a.slice(0, -3)
}
console.log(lastStr('fgedcba'));

//5 Return the percentage (b percent of a)
function percentageA(a, b) {
    // return (b / 100) * a
    return a * b / 100
}
console.log(percentageA(500, 25));

//6 Basic JavaScript math operators
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
function myOperator(a, b, c, d, e, f) {
    return (((a + b - c) * d) / e) ** f
}
console.log(myOperator(6, 5, 4, 3, 2, 1));

//7 Check if a number is even
function evenNum(a) {
    // if (a % 2 == 0) {
    //     return true
    // }
    // else {
    //     return false
    // }
    return a % 2 === 0

}
console.log(evenNum(5));

//8 How many times does a character occur? 
//Return the number of times a occurs in b
function charOccur(a, b) {
    return b.split(a).length - 1
    // return b.split("").reduce((prev, cur) => cur === a ? prev + 1 : prev, 0)
}

console.log(charOccur('e', 'emtiaz'));