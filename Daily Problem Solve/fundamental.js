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

//5 Return the percentage of a number
function percentageA(a, b) {
    return (b / a) * 100
}
console.log(percentageA(500, 25));