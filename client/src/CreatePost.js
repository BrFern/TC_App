import {Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import Images from './image';
import MaterialsPost from "./form";
import {useState} from "react";
import axios from "axios";
import post from './form';
import navigate from './form';

function CreatePost() {
    // const navigate = useNavigate();
    const handleClick = (event) => {
        event.preventDefault();
        console.log(post)

        axios
        .post("/create", post)
        .then(res => console.log(res))
        .catch(err => console.log(err));
        

    }
    

    return (
        <div style={{width:"90%", margin: "auto auto",textAlign:"center" }}>
            {/* IF YOUR STYLING IS WEIRD LOOK HERE -Not best practice*/}
            <h1>Your shelf</h1>
               <Images />
                <MaterialsPost />
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
