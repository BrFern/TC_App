const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");



const app = express();

const url = "https://teacher-app.onrender.com/create/posts"

//Middleware
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(cors());


//Connecting to database
mongoose
.set('strictQuery', true)
.connect("mongodb+srv://BaileyFern:testing123@sei.tz0cct9.mongodb.net/?retryWrites=true&w=majority")
.catch((err) => console.log(err))


// mongodb://localhost:27017/myDB --> video way of connecting





//Database Schema and model
const materialsSchema = mongoose.Schema ({
    selectedFile: String,
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
        selectedFile: req.body.selectedFile,
        name: req.body.name,
        description: req.body.description,
    })
    .then(doc => console.log(doc))
    .catch(err => console.log(err));
})

app.get("/posts", (req,res) => {
    Post.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));

 
} ) 

//Delete functionality
app.delete("/delete/:id", (req, res) => {
   Post.findByIdAndDelete({_id: req.params.id})
   .then((doc) => console.log(doc))
   .catch((err) => console.log(err))
})

app.put("/update/:id", (req, res) => {
    Post.findByIdAndUpdate({_id: req.params.id}, {
       selectedFile: req.body.selectedFile,
       name: req.body.name,
       description: req.body.desciption
    }).then(doc => console.log(doc))
    .catch(err => console.log(err)) 
})

app.listen(3001, function() {
    console.log("Server is running")
} );


