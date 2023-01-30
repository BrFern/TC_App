import {Button, Form} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {useState} from "react";
import axios from "axios";




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


    // This is from the form submission
    // const submitForm = () => {
    //     const formData = new FormData();
    //     formData.append("name", name);
    //     formData.append("file", selectedFile);

    // axios
    // .post(UPLOAD_URL, formData)
    // .then ((res) => {
    //     alert("File upload success");
    // })
    // .catch((err) => alert("File upload error"));
    // }
   
    

    return (
        <div style={{width:"90%", margin: "auto auto",textAlign:"center" }}>
            {/* IF YOUR STYLING IS WEIRD LOOK HERE -Not best practice*/}
            <h1>Your shelf</h1>
                <h1> Make a new material below! </h1>
                
            <Form>
                <Form.Group>
                    <Form.Control 
                    name="image" 
                    value={post.image}
                    input type = "file"
                    style = {{marginBottom: "1rem"}}
                    onChange = {handleChange}/>
                    
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
