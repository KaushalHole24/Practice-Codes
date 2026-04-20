const express = require("express");
const app = express();
const port = 8080;

const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");

const Listing = require("./models/listing");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(()=>{
        console.log("Connected to Database...");
    })
    .catch((err)=>{
        console.log(err);
    })

async function main(){
    await mongoose.connect(MONGO_URL);
}

// Index Route
app.get("/listings", async(req, res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index", {allListings})
});

// New Route
app.get("/listings/new", (req,res)=>{
    res.render("listings/new");
});

// Show Route
app.get("/listings/:id", async(req, res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    console.log(listing);
    res.render("listings/show", {listing});
});



app.listen(port, (req, res)=>{
    console.log("Server Started at localhost:8080");
});
