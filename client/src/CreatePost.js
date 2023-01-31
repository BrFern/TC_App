import {Button, Form} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {useState} from "react";
import axios from "axios";
// import CardDisplay from "./components/Cards";
// import UploadImages from "./components/FileUploader";
import shelf from "./images/side_table.png";

//Newly added for image stuff, delete if needed
// const express = require("express");
// const router = express.Router(); 
// const image = require("./client/src/models/image");

//NEW STUFF-LOOK AT IF NEEDED------------------------------------------------------------------
// router.post("/store-image", async(req, res) => {
//     try {
//         const {image} = req.body;
//         if(!image) {
//             return res.status(400).json({msg:"Please enter an image"});
//         }
//         let newImage = new Image({
//             image,
//         });

//         newImage = await newImage.save();
//         res.json(newImage);
//     } catch(err) {
//         res.status(500).json({error: err});
//     }
// });



// //New function to try to get image to render
// async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       let imageUrl = "";
//       if (image) {
//         const formData = new FormData();
//         formData.append("file", image);
//         formData.append("upload_preset", "Teacher_class_app");
//         const dataRes = await axios.post(
//           "cloudinary://386482126368168:9nE0OBIUr0eFQ9LBHz9X4miTXMg@dcja8kinx",
//           formData
//         );
//         imageUrl = dataRes.data.url;
//       }

//       const submitPost = {
//         image: imageUrl,
//       };
//       console.log(selectedCommunity);
//       await axios.post("http://localhost:3001/store-image", submitPost);
//     } catch (err) {
//       err.response.data.msg && setError(err.response.data.msg);
//     }
//   }
//--------END OF NEW STUFF ADDED BESIDES FORM BELOW-------//

function CreatePost() {
    const navigate = useNavigate();
    const [post, setPost] = useState({
        image: "",
        name: "",
        description: ""
    });

    const handleChange=(e) => {
        const {name, value} = e.target;
        setPost((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleClick = (event) => {
        event.preventDefault();

        axios
        .post("/create", post)
        .then(res => console.log(res))
        .catch(err => console.log(err));

        navigate("posts")
    }

    return (
        <div style={{width:"90%", width: "90%", position: "absolute", top:"40px", bottom:"20px", height:"100%", margin: "auto auto",textAlign:"center", backgroundImage: `url(${shelf}`, backgroundRepeat: "no-repeat" }}>
            {/* IF YOUR STYLING IS WEIRD LOOK HERE -Not best practice*/}
            <h1>Your shelf</h1>
                <h1> Make a new material below! </h1>
            <Form>
                {/* <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label> Input Image</Form.Label>
                    <Form.Control type="file" />
                </Form.Group> */}
                <Form.Group>

                     {/* <Form.File
                    className="position-relative mt-2"
                    name="file"
                    accept="image/*"
                    onChange = {handleChange}
                  /> */}
                    <label class="form-label" for="customFile">
                        Default file input example</label>
                    <input type="file" class="form-control" id="customFile" onChange={handleChange} />

                    {/* <Form.Control 
                    label for= "formFile"
                    type="file" 
                    class="form-control-file"
                    style = {{marginBottom: "1rem"}} 
                    onChange = {handleChange}
                    />  */}
                
                    {/* <UploadImages /> */}
                    <Form.Control 
                    name="name"
                    value={post.name}
                    placeholder ="Name of the material" 
                    style = {{marginBottom: "1rem"}} 
                    onChange = {handleChange}/>

                    <Form.Control 
                    name="description" 
                    value={post.description}
                    placeholder="Description" 
                    style = {{marginBottom: "1rem"}} 
                    onChange = {handleChange} />

                </Form.Group>
            </Form>

                <Button 
                variant="outline-success"
                onClick={(handleClick)}
                style= {{marginBottom:"1rem"}}> Create New Material </Button>
            <Button
            style={{width:"100%"}} 
            variant="outline-dark"
            onClick= {() => navigate (-1)}> Back </Button> 
            {/* Button to navigate back to previous page */}
        </div>
    )
}

export default CreatePost;
