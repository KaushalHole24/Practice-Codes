// -----------------------------------------------------------------------------------------
// Array Methods
// -----------------------------------------------------------------------------------------

// let arr = [2,4,6,8,10];

// function print(el){
//     console.log(el);
// }

// OR

// let print = (e) => {
//     console.log(e);
// }
// arr.forEach(print);
// -----------------------------------------------------------------------------------------

// let double = arr.map((e)=>{
//     // console.log(e*2);
//     return e*2;
// })

// console.log(double);
// -----------------------------------------------------------------------------------------

// let large = arr.filter((e)=>(e>5));
// console.log(large)
// -----------------------------------------------------------------------------------------

// let a = arr.every((e)=>(e%2==0));
// console.log(a);
// -----------------------------------------------------------------------------------------

// let a = arr.some((e)=>(e > 10));
// console.log(a);
// -----------------------------------------------------------------------------------------

// let sum = arr.reduce((a,b)=>(a+b));
// console.log(sum);

// -----------------------------------------------------------------------------------------
// Default paramenter
// -----------------------------------------------------------------------------------------
// - Giving default value to an argument 

// function add(a,b=2){
//     return a+b;
// }

// console.log(add(4,10)); 
// console.log(add(4)); //Default value of b will be considered that is 2

// -----------------------------------------------------------------------------------------
// Spread
// -----------------------------------------------------------------------------------------

// let str = "Kaushal Hole";
// console.log(...str);

// let arr1 = [1,2,3,4,5];
// console.log(...arr1);
// console.log(Math.min(arr1)); //This give NaN as output
// console.log(Math.min(...arr1)); //This will give min element as output

// // let newarr = [...arr1];
// console.log(newarr);

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];
// let nums = [...odd,...even];
// console.log(nums);

// let data = {
//     email : "ironman@gmail.com",
//     password : "abcd"
// };
// let datacopy = {...data, id : 123};
// console.log(datacopy);

// -----------------------------------------------------------------------------------------
// Rest 
// -----------------------------------------------------------------------------------------
// -Similar to spread but it allows function to take indefinite number of arguments and bundle them in an array

// function sum(...args){
//     return args.reduce((a,b)=>(a+b));
// }

// console.log(sum(1,2,3,4,5,6,7,8,9,10));
// -----------------------------------------------------------------------------------------

// function min(...args){
//     return args.reduce((min,e)=>{
//         if(min > e){
//             return e;
//         } else {
//             return min;
//         }
//     });
// }

// let minValue = min(2,3,4,5,1,-4);
// console.log(minValue);

// ------------------------------------------------------------------------------------------
// Destructuring
// ------------------------------------------------------------------------------------------
// - Storing values of array into multiple variable 
/*
let names = ['tony','bruce','steve','peter'];
let [winner, runnerup] = names;
console.log(winner);
console.log(runnerup);

const student ={
    name : "Kaushal",
    class : 10,
    age : 16,
    subject : ['hindi','english','maths','history'],
    username :'kaushal24',
    password : 1234
}

const{username : user, password : pass} = student;
console.log(user);
console.log(pass);
*/

// ------------------------------------------------------------------------------------------
// Questions
// ------------------------------------------------------------------------------------------

// Square and sum the array elements using the arrow function and then find the average of the array.
/*
let arr = [1,2,3,4,5];
let a = arr.map((n)=>n*n).reduce((a,b)=>a+b);
console.log(a/arr.length);
*/

// ------------------------------------------------------------------------------------------
//Create a new array using the map function whose each element is equal to the original element plus 5.
/*
let arr = [1,2,3,4,5];
let a = arr.map((n)=>n+5);
console.log(a);
*/
// ------------------------------------------------------------------------------------------
//Create a new array whose elements are in uppercase of words present in the original array.
/*
let str = ['hello', 'make', 'me', 'coffee'];
let str1 = str.map((n)=>n.toUpperCase());
console.log(str1);
*/
// ------------------------------------------------------------------------------------------
//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.
/*
let arr = [1,2,3,4,5];

function doubleAndReturnArgs(arr, ...args){
    let double = args.map((n)=>n*2);
    console.log(...arr, ...double);
}

doubleAndReturnArgs(arr, 6,7,8,9,10);
*/


