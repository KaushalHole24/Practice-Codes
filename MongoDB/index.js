const mongoose = require("mongoose");

main()
.then((res)=>{
    console.log("Connection Successful");
})
.catch((err)=>{
    console.log(err);
})

// Connection with MongoDB -> Return a promise 
async function main(){
    mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// Defining Schema for Collection
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// Creating a collection with name users and defining the schema
const User = mongoose.model("User", userSchema);

// Inserting one document in the collection
// const user1 = new User({
//     name: "adam",
//     email: "adam@gmail.com",
//     age: 21
// });
// user1.save();

// Inserting many document at a time in collection
// User.insertMany([
//     {name: "Kaushal", email: "holekaushal1@gmail.com", age:20},
//     {name: "Bruce", email: "bruce@yahoo.in", age: 30},
//     {name: "Peter", email: "peter@gmail.com", age: 25},
// ])
// .then((data)=>{
//     console.log(data);
// });

//Find in mongooes
// User.find({})
//     .then((res)=>{
//     console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// Find by Id and Update the document
// User.findByIdAndUpdate('69ddeeee9876ceb2f66f883d', {name : "Vaibhav"}, {new : true})
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// Delete the document
// User.deleteOne({name: "Vaibhav"})
//     .then((res)=>{
//         console.log(res);
//     })

// User.findByIdAndDelete('69ddeeee9876ceb2f66f883f')
//     .then((res)=>{
//         console.log(res);
//     })

User.findOneAndDelete({name: "Peter"})
    .then((res)=>{
        console.log(res);
    })



