const express = require("express");
const app = express();
const port = 3000;

// ------------------------------------------------------
// Here this middleware is executed with each request so if we write response send in middleware. It will send same response on all the route. 
// app.use( (req, res)=>{
//     console.log("Hi, I am middleware.");
//     res.send("Middleware Finished.");
// });
// ------------------------------------------------------

app.use((req,res,next)=>{
    
});

app.get("/", (req,res)=>{
    res.send("Hi, I am root.")
});

app.get("/random", (req,res)=>{
    res.send("This is random page");
});

app.listen(port, (req,res)=>{
    console.log("Server listening at port 3000");
}); 