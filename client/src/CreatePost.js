import {Button, Form} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import Images from './image';
import MaterialsPost from "./form";
import {useState} from "react";
import axios from "axios";
import post from './form';
import navigate from './form';

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

    const createPost = (e) => {
        e.preventDefault();

        axios
        .post("/create", post)
        .then(res => console.log(res))
        .catch(err => console.log(err));


    }
    const handleClick = (event) => {
        event.preventDefault();
        console.log(post)

    
    }
    

    return (
        <div style={{width:"90%", margin: "auto auto",textAlign:"center" }}>
            {/* IF YOUR STYLING IS WEIRD LOOK HERE -Not best practice*/}
            <h1>Your shelf</h1>
               <Images />
                
                <h1> Make a new material below! </h1>
            <Form>
                <Form.Group>
                    <Form.Control 
                    name="image" 
                    value={post.image}
                    placeholder="Image" 
                    style = {{marginBottom: "1rem"}}
                    onChange = {handleChange} />
                    
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
