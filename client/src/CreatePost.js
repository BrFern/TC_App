import {Button, Form} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {useState} from "react";
import axios from "axios";
// import CardDisplay from "./components/Cards";
import UploadImages from "./components/FileUploader";
import shelf from "./images/side_table.png";



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
                <Form.Group>
                    <Form.Control 
                    name="image"
                    value={post.image}
                    type="file"
                    placeholder = "Image"
                    style = {{marginBottom: "1rem"}} 
                    onChange = {handleChange}/>
                
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
