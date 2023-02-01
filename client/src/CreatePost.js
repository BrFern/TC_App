import {Button, Form} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {useState} from "react";
import axios from "axios";
import Shelf from "./components/Shelf";
import FileBase from 'react-file-base64';



function CreatePost() {
    const navigate = useNavigate();
    const [post, setPost] = useState({
        selectedFile: "",
        name: "",
        description: ""
    });

    const handleChange=(event) => {
        const {name, value} = event.target;
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
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

        navigate("posts");
    }

    return (
        <div style={{ width: "50%", textAlign: "center", margin: "auto auto" }}>
        
            {/* IF YOUR STYLING IS WEIRD LOOK HERE -Not best practice*/}
            <h1>Create a new material below!</h1>
            <br></br>
                <Shelf />
            <Form>
                <Form.Group>
            <FileBase
               type = "file"
               multiple={false}
               onDone={({base64}) => setPost({ ... post, selectedFile: base64})}
               />
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
        </div>
    )
}

export default CreatePost;
