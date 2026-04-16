const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
    .then(()=>{
        console.log("Connection Successful");
    })
    .catch((err)=>{
        console.log(err);
    });

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/WhatsApp");
}

let allChats = [
    {
        from: "Abhishek",
        to: "Yash",
        msg: "Fuck You...",
        created_at: new Date()
    },
    {
        from: "Prince",
        to: "Raju",
        msg: "You worked so hard...",
        created_at: new Date()
    },
    {
        from: "Raj",
        to: "Raghav",
        msg: "Can you help me?",
        created_at: new Date()
    },
    {
        from: "Radhika",
        to: "Gauri",
        msg: "Hello! How are you?",
        created_at: new Date()
    },
    {
        from: "Neha",
        to: "Priya",
        msg: "Send me your exam sheets",
        created_at: new Date()
    }
]

Chat.insertMany(allChats);