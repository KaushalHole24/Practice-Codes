// Requireing files  

const sum = (a,b) => a+b;
const mul = (a,b) => a*b;
const div = (a,b) => a/b;
const sub = (a,b) => a-b;

const g = 9.8;
const PI = 3.14;

// module.exports = 123;

let expo = {
    sum : sum,
    mul : mul,
    div : div,
    sub : sub
}

// module.exports = expo;

module.exports.mod = (a,b) => a%b;
