const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));

app.get("/", (req, res)=>{
    res.render("home");
});

app.get("/hello", (req, res)=>{
    res.send("hello");
});

app.get("/rolldice", (req, res)=>{
    let diceValue = Math.floor(Math.random()*6) + 1;
    res.render("rolldice", { diceValue });
});

// Instagram Template

// app.get("/ig/:username", (req, res)=>{
//     let followers = ["Virat", "Tim", "Dinesh", "Romario", "Rajat"];
//     let {username} = req.params;
//     res.render("instagram", {username, followers});
// });

app.get("/ig/:username", (req, res)=>{
    let {username} = req.params; 
    const instaData = require("./data.json");
    const data = instaData[username];

    if(data){
        res.render("instagram", {data});
    }else {
        res.render("error");
    }  
});

app.listen(port, ()=>{
    console.log(`listening on port: ${port}`);
});

