//--------------------------------------------------------------------------------------
// For Loops
//--------------------------------------------------------------------------------------

// Print odd numbers
/*
for(let i=1; i<=10; i++){
    if(i%2 != 0){
        console.log(i);
    }
}
*/

//--------------------------------------------------------------------------------------
// Print even numbers
/*
for(let i=1; i<=10; i++){
    if(i%2 == 0){
        console.log(i);
    }
}
*/

//--------------------------------------------------------------------------------------
// Nested for Loop
/*
for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}
*/

//--------------------------------------------------------------------------------------

// for loop with sigle dimensional array
/*
let fruits = ["mango","apple","banana","litchi","orange"];
for(let i=0; i<fruits.length; i++){
    console.log(i, fruits[i]);
}
*/

//--------------------------------------------------------------------------------------
// for loop for 2 dimensional array
/*
let heroes = [["ironman","spiderman","thor"],["superman","batman","flash"]];
for(let i=0; i<fruits.length; i++){
    console.log("List #"+i);
    for(let j=0; j<heroes[i].length; j++){
        console.log(heroes[i][j]);
    }
}
*/

//--------------------------------------------------------------------------------------
// for of loop 
/*
let str = "Kaushal";
for(ch of str){
    console.log(ch);
}
*/

//--------------------------------------------------------------------------------------
// for of loop on multidimensional array

/*
let heros = [["ironman","spiderman","thor"],["superman","batman","flash"]];
for(list of heros){
    for(hero of list){
        console.log(hero);
    }
}
*/


//--------------------------------------------------------------------------------------
// While Loops
//--------------------------------------------------------------------------------------

// Print from 1 to 5
/*
let i=1;
while(i<=5){
    console.log(i);
    i++;
}
*/

//--------------------------------------------------------------------------------------
// Questions
//--------------------------------------------------------------------------------------

// Write a JS program to delete all occurrences of element ‘num’ in a given array.

/*
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for(let i=0; i<arr.length; i++){
    if(arr[i] == num){
        arr.splice(i,1);
    }
}
console.log(arr);
*/
//--------------------------------------------------------------------------------------

// Write a JS program to find the no of digits in a number.
/*
let number = 287152;
let count = 0;
while(number > 0){
    count++;
    number = Math.floor(number/10);
}

console.log(count);
*/

//--------------------------------------------------------------------------------------
// Object Literal
//--------------------------------------------------------------------------------------

/*
let student = {
    name : "Kaushal",
    age : 23,
    marks : 94,
    place : "Pune",
    hobby : ["reading book", "exploring new places"],
    1 : 7447546074
}

console.log(student["hobby"]);
console.log(student["name"]);
console.log(student.age);

let score = student["marks"];
console.log(score);

let score1 = "marks";
console.log(student[score1]);

student.gender = "male";
console.log(student);

// console.log(student.1); //Throw error : -> All keys in object are converted to string. So it will work with square breacket but not with . operator
console.log(student[1]);

delete student.age;
console.log(student);
*/

//--------------------------------------------------------------------------------------
// Math Random
//--------------------------------------------------------------------------------------
/*
let num = Math.random();
num*=10;
num=Math.floor(num);
console.log(num);
*/