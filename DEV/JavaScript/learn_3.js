// -----------------------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------------------
// Create a function to roll a dice and always display the value of the dice(1 -6)
/*
function roll(){
    let num = Math.floor(Math.random()*6)+1;
    console.log(num);
}
roll();
*/

// -----------------------------------------------------------------------------------------
// Creta a function that gives us the average of three numbers
/*
function average(a,b,c){
    let avg = a+b+c/3;
    console.log(avg);
}

average(10,20,30);
average(1,2,3);
*/

// -----------------------------------------------------------------------------------------
// Create a function that print multiplication table of number
/*
function printTable(n){
    for(let i=1; i<=10; i++){
        console.log(n+" * "+i+" = "+i*n);
    }
}

printTable(5);
*/

// -----------------------------------------------------------------------------------------
// Create a fucntion that return sum of numbers from 1 to n 
/*
function sum(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum += i;
    }
    return sum;
}

let sum1 = sum(10);
console.log(sum1);
*/

// -----------------------------------------------------------------------------------------

// Create a function that return concatenation of all strings in the array
/*
function concatt(arr){
    let str = "";
    for(ch of arr){
        str += ch+" ";
    }
    console.log(str);
}

let arr = ["Kaushal","Sunil","Hole"];
concatt(arr);
*/

// -----------------------------------------------------------------------------------------
// Function expression -> Storing a function inside a variable
// -----------------------------------------------------------------------------------------

// Higher order function -> Functions which take one or more fuction as argument or return function 

// Example 
/*
function oddEvenTest(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n%2 == 0));
        }
        return odd;

    } else if(request == "even"){
        let even = function(n){
            console.log(n%2 == 0);
        }
        return even;

    } else {
        console.log("Wrong request");
    }
}

let result = oddEvenTest("odd");

console.log(result(3));
*/

// -----------------------------------------------------------------------------------------
// Questions
// -----------------------------------------------------------------------------------------
// Write a JavaScript function that returns array elements larger than a number.
/*
let arr = [1,2,3,56,78,45,35];
let num = 20;

function findNum(arr, num){
    arr.sort();
    for(let i=0; i<arr.length; i++){
        if(arr[i] > num){
            return arr[i];
        }
    }
}

console.log(findNum(arr,num));
*/
// -----------------------------------------------------------------------------------------

// Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”
/*
let str = "abcdabcdefgggh";

function uniqueChar(str){
    let ans = "";
    for(let i=0; i<str.length; i++){
        if(!ans.includes(str[i])){
            ans += str[i];
        } 
    }
    console.log(ans);
}

uniqueChar(str);
*/
// -----------------------------------------------------------------------------------------

// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output :"United States of America"
/*
function longestStr(arr){
    let curr = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i].length > curr.length){
            curr = arr[i];
        }
    }
    return curr;
}

let country = ["Australia", "Germany", "United States of America"];
let str = longestStr(country);
console.log(str);
*/

// -----------------------------------------------------------------------------------------
// Arrow function
// -----------------------------------------------------------------------------------------

// when the function is passed to another function as argument it is called as callback function

/*
const sum = (a,b) => {return a+b;}
console.log(sum(2,2));
*/

// -----------------------------------------------------------------------------------------
// Set setTimeout
// -----------------------------------------------------------------------------------------

// This function is executed only once.
// It does not interrupt the flow of the program 
// takes time input in miliseconds
/*
console.log("hello");
setTimeout(()=>{
    console.log("Kaushal Hole");
}, 5000);
console.log("Welcome");
*/

// -----------------------------------------------------------------------------------------
// Set Interval
// -----------------------------------------------------------------------------------------

// This function is executed after certain interval of time

/*
let id = setInterval(()=>{
    console.log("Hello World");
},2000);

setTimeout(() => {
    clearInterval(id); //This will stop setInterval function
}, 10000);
*/
// -----------------------------------------------------------------------------------------
// Questions
// -----------------------------------------------------------------------------------------

/*
let arrayAverage = (arr) => {
    let sum = 0;
    let avg = 0;
    for(ele of arr){
        sum += ele;
    }
    avg = sum/arr.length;
    console.log(avg);
}

let arr = [1,2,3,4,5];
arrayAverage(arr);
*/
// -----------------------------------------------------------------------------------------

/*
let isEven = (n) => {
    if(n%2 == 0){
        console.log("Even number");
    }else {
        console.log('Not even number');
    }
}

isEven(2);
isEven(3);
*/

// -----------------------------------------------------------------------------------------









