//  CLI --> Command to run sl on terminla
// /usr/local/mysql/bin/mysql -u root -p
// -----------------------------------------------------------------------------------------------------------------

const {faker} = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const port = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Mysql2002'
});

let getRandomUser = () =>  {
    return [
      faker.string.uuid(),
      faker.internet.username(),
      faker.internet.email(),
      faker.internet.password(),
    ];
}

// Home Route 
app.get("/", (req,res)=>{
    let query = "SELECT count(*) FROM user";
    try{
        connection.query(query, (err, result)=>{
            if(err) throw err;
            let count = result[0]["count(*)"];
            res.render("home", {count});
        });
    } catch(err){
        console.log(err);
    }
});

// Show Route
app.get("/user", (req, res) => {
    let query = "SELECT * FROM user";
    try{
        connection.query(query, (err, result)=>{
            if(err) throw err;
            res.render("showUsers", {result});
        });
    } catch(err){
        res.send("Some error occured");
    }
}); 

// Edit Route
app.get("/user/:id/edit", (req, res)=>{
    let { id } = req.params;
    let query = `SELECT * FROM user WHERE id="${id}"`;
    try{
        connection.query(query, (err, result)=>{
            if(err) throw err;
            let user = result[0];
            res.render("edit", {user});
        });
    } catch(err){
        res.send("Some error in database");
    }
});

// Update (DataBase) Route
app.patch("/user/:id", (req, res)=>{
    let {id} = req.params;
    let {username : newUserName, password: userPassword} = req.body;

    let query = `SELECT * FROM user WHERE id = ?`;

    connection.query(query, [id], (err, result)=>{
        if(err) return res.send("Database Error");
            
        if(result.length == 0){
            return res.send("User not found");
        }

        let user = result[0];

        if(user.password == userPassword){
            let query2 = `UPDATE user SET username = ? WHERE id = ?`;

            connection.query(query2, [newUserName, id], (err, result)=>{
                if(err) return res.send("Update Failed");
                res.redirect("/user");
            });

        } else {
            res.send("Wrong Password");
        }
    });
}); 

app.listen(port, (req, res)=>{
    console.log(`Listening at port ${port}`);
});

// -----------------------------------------------------------------------------------------------------------------

// This is query when we want to add single data. Example to add data from node to database.
/*
let query = "INSERT INTO user (id, username, email, password) VALUES ?";
// let user = ["123", "123_newuser", "newuser@gmail.com", "abc"];      // Single data

let data = []; 

for(let i=1; i<=100; i++){                   // Random data is generated from function and added to data array
    data.push(getRandomUser());              // Multiple data
}

try{
    connection.query( query, [data], (err, result)=>{
        if(err) throw err;
        console.log(result);
    }); 
} catch(err) {
    console.log(err);
}

connection.end();
*/

// -----------------------------------------------------------------------------------------------------------------
