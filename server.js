const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


//Connecting to database
mongoose
.connect("mongodb://localhost:27017/myDB")
.catch((err) => console.log(err));

//Database Schema and model
const materialsSchema = mongoose.Schema ({
    img: { 
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
});

const Post = mongoose.model("Post", materialsSchema);

//API Routes

app.get("/", (req,res) => {
    res.send("express is here!")
});

app.post("/create", (req,res) => {
    Post.create ({
        image: req.body.image,
        name: req.body.name,
        description: req.body.description,
    }).then(doc => console.log(doc))
    .catch(err => console.log(err));
})

app.listen(3001, function() {
    console.log("Server is running")
} );


