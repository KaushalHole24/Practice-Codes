const express = require("express");
const app = express();

// console.dir(app);

let port = 3000;

app.listen(port, ()=>{
    console.log(`app listening on port : ${port}`);
});

// app.use((req, res)=>{
    // console.log("request recived");
    // res.send("This is basic response");

    // res.send({
    //     name: "apple",
    //     color: "red"
    // });

    // let code = "<h1>Fruits</h1><ul><li>apple</li><li>mango</li></ul>";
    // res.send(code);   
    
// });

// ----------------------------------
// for Routing - chnaging route
// ----------------------------------

app.get("/apple", (req, res)=>{
    res.send({
        name: "apple",
        color: "red"
    });
});

app.post("/apple", (req, res)=>{
    console.log("This is post request after installing nodemon. Now it will auto start the server with changes.");
});

app.get("/:username/:id", (req, res)=> {
    let {username, id} = req.params;
    res.send(`This is page of @${username}.`);
})

app.get("/search", (req,res)=>{
    let {q} = req.query;
    res.send(q);
})