//--------------------------------------------------------------------------------------
//Create a traffic light system that shows what to do based on color

/*
let color = 'red';

if(color === 'red'){
    console.log("Stop");
}else if(color === 'yellow'){
    console.log("Ready");
}else if(color == 'green'){
    console.log("Goo");
}else {
    console.log("Enter valid color input");
}
*/

//--------------------------------------------------------------------------------------
// Create a system to calculate popcorn prices based on the size customer asked for

/*
let size = "L";

if(size == "XL"){
    console.log("Price of popcorn tube is 250rs");
} else if(size == "L"){
    console.log("Price of popcorn tube is 200rs");
} else if(size == "M"){
    console.log("Price of popcorn tube is 100rs");
} else if(size == "S"){
    console.log("Price of popcorn tube is 50rs");
}
*/

//--------------------------------------------------------------------------------------
//A "good string" is a string that starts with letter 'a' and has length greater the 3. Write a program to find the string is good or bad.

/*
let str = 'pshok';

let size = str.length;
if((str[0] === 'A' || str[0]==='a') && size > 3){
    console.log("String is good.");
}else {
    console.log("String is bad.")
}
*/

//--------------------------------------------------------------------------------------
//Create number variable num with some value and print 'good' if number is divisible by 10 or print bad if it is not.

/*
let num = 23;

if(num%10 == 0){
    console.log('good');
}else {
    console.log('bad');
}
*/

//--------------------------------------------------------------------------------------

/*
let name = prompt("Enter you name :");
let age = prompt("Enter your age :");
alert(name+" is "+age+" years old.");
*/

//--------------------------------------------------------------------------------------
//Write a program to print months in quarter 

/*
let quarter = 5;

switch(quarter){
    case 1 : console.log("January, February, March");
             break;
    case 2 : console.log("April, May, June");
             break;
    case 3 : console.log("July, August, September");
             break;
    case 4 : console.log("October, November, December");
             break;
    default : console.log("Enter correct quarter");
}
*/

//--------------------------------------------------------------------------------------
//Write a program to find largest number of 3

/*
let a = 10;
let b = 2;
let c = 0;

if(a>b && a>c){
    console.log(a);
} else if(b>c){
    console.log(b);
} else {
    console.log(c);
}
*/

//--------------------------------------------------------------------------------------

// Write a program to check if 2 numbers have the same last digit.

/*
let num1 = 34;
let num2 = 47852;

if((num1%10)==(num2%10)){
    console.log("Number have the same last digit which is "+num1%10);
}else {
    console.log("Number does not have any same digit.");
}
*/

//--------------------------------------------------------------------------------------

// Strings Methods

//--------------------------------------------------------------------------------------

/*
let str0 = "   Hello   ";

console.log("Original: "+str0);
console.log("Using Trim: "+str0.trim());
console.log(str0.toUpperCase());
console.log(str0.toLowerCase());
console.log(str0.indexOf("H"));
console.log(str0.toUpperCase().trim());
console.log(str0.slice(4));
console.log(str0.slice(3,6));
console.log(str0.slice(-4));
console.log(str0.replace("ll","kk"));
console.log(str0.repeat(3));
*/

//--------------------------------------------------------------------------------------

// Arrays

//--------------------------------------------------------------------------------------

let students = ["Kaushal", "Vikram", "Vaibhav"];

/*
console.log(students.length);
console.log(students[0]);
console.log(students[0][0]);
students[1] = "Vardhan";
console.log(students);
*/

//--------------------------------------------------------------------------------------

// Array Methods

//--------------------------------------------------------------------------------------

/*
// Add and Remove form end in array
students.push("Vikram");
console.log(students);
console.log("Removed and returned : "+students.pop());
console.log(students);

// Add and remove from start in array
students.unshift("Adarsh");
console.log(students);
console.log("Removed and returned : "+students.shift());
console.log(students);

console.log(students.indexOf("Vaibhav"));
console.log(students.includes("Kaushal"));

let newArr = [1,2,3];
console.log(students.concat(newArr));
console.log(students.reverse());

console.log(students.slice(1,3));
// Splice Syntax
// array.splice(startIndex, deleteCount, item1, item2, ..., itemN);
students.splice(0,0,"Chinmaya", "Stith");
console.log(students);
console.log(students.sort()); 
// Sort does not work with numbers as javascript first convert number into UTF16 code and then sort
*/

//--------------------------------------------------------------------------------------

// For the given start state of an array, change it to final form using splice
/* start ['january', 'july', 'march', ,'august']
   final ['july', 'june', 'march', 'august'] */
/*
let arr1 = ['january', 'july', 'march', 'august'];
arr1.splice(0,1,"june").sort();
console.log(arr1);
*/

//--------------------------------------------------------------------------------------
//Find the index of javascript after the array is reversed
/*
let pro = ['c', 'c++', 'html', 'javascript', 'paython', 'java', 'C#', 'sql'];
console.log(pro.reverse().indexOf("javascript"));
*/
