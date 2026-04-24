const express = require("express");
const app = express();
const port = 3000;
const ExpressError = require("./ExpressError");



app.get("/admin", (req,res)=>{
    throw new ExpressError(403, "Access to admin is Forbidden");
});

app.use((err,req,res,next)=>{
    let {status = 500, message = "Some Error"} = err;
    res.status(status).send(message);
});

app.listen(port, (req,res)=>{
    console.log("Server listening at port 3000");
}); 