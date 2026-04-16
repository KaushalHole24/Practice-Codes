const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

main()
    .then(()=>{
        console.log("Connection Successful");
    })
    .catch((err)=>{
        console.log(err);
    })

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/WhatsApp");
}

// Index Route
app.get("/chats", async(req, res)=>{
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index", {chats});
});  

// New Route
app.get("/chats/new", (req, res)=>{
    res.render("new");
});

//Create Route
app.post("/chats", (req, res)=>{
    let {from, msg, to} = req.body;
    let newChat = new Chat({
        from: from,
        msg: msg,
        to: to, 
        created_at: new Date()
    });
    newChat.save()
        .then(()=>{
            console.log("Saved");
        })
        .catch((err)=>{
            console.log(err);
        });
    res.redirect("/chats");
});

// Edit Route
app.get("/chats/:id/edit", async (req, res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit", {chat});
});

app.listen(port, (req, res)=>{
    console.log("Listening at port 3000");
});