const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded);



app.get("/", (req,res) => {
    res.send("express is here!")
});

app.post("create", (req,res) => {
    console.log(req.body)
})

app.listen(3001, function() {
    console.log("Server is running")
} );


