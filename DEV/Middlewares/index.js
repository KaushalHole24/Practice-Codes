const express = require("express");
const app = express();
const port = 3000;
const expressError = require("./ExpressError");


// ------------------------------------------------------
// Here this middleware is executed with each request so if we write response send in middleware. It will send same response on all the route. 
// app.use( (req, res)=>{
//     console.log("Hi, I am middleware.");
//     res.send("Middleware Finished.");
// });
// ------------------------------------------------------

// app.get("/", (req,res)=>{
//     res.send("Hi, I am root.")
// });

// app.get("/random", (req,res)=>{
//     res.send("This is random page");
// });

// ------------------------------------------------------

const checkToken = (req,res,next) => {
    let { token } = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401, "Access Denied");
}

app.get("/api", checkToken, (req,res)=>{
    res.send("data");
});

app.listen(port, (req,res)=>{
    console.log("Server listening at port 3000");
}); 