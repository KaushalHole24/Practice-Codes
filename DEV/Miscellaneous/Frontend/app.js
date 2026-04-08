// -----------------------------------------------------
// OOPs
// -----------------------------------------------------

let arr = [1,2,3];
// Here only array arr will have the sayHello function
arr.sayHello = () => {console.log("Hello!, I am arr.")}

// Here this is example of object Prototyping after this all the arrays will have function sayHello.
Array.prototype.sayHello = function() {
    console.log("Hello from all arrays!");
};
// -----------------------------------------------------
// Factory Function 
// -----------------------------------------------------

function PersonMaker(name, age){
    const person = {
        name : name,
        age: age,
        talk(){
            console.log(`Hi my name is ${this.name}`);
        },
    };

    return person;
}

let p1 = PersonMaker("Vikram",24);
let p2 = PersonMaker("Anand", 22);
// -----------------------------------------------------
// New Operator
// -----------------------------------------------------

// Constructors - doesn't return anything & Start with capital letter 
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function (){
    console.log(`Hi my name is ${this.name}`);
};

let p3 = new Person("adam", 25);
let p4 = new Person("eve", 25);

// -----------------------------------------------------
// Classes
// -----------------------------------------------------

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

let p5 = new Person("adam",25);
let p6 = new Person("eve", 25);

// -----------------------------------------------------
// Inheritance
// -----------------------------------------------------

class Student extends Person{
    constructor(name, age, marks){
        super(name,age);
        this.marks = marks;
    }
    greet(){
        return "hello";
    }
}

let s1 = new Student("adam",25,95);

// ----------------------------------------------------- 