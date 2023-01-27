import React from "react";
// import mongoose from "mongoose";
import {useNavigate} from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';
import {useState, useEffect} from 'react';


function MaterialsPost () {
    const navigate = useNavigate ();
    const [post, setPost] = useState({
        image: "",
        name: "",
        description: ""
    })

    const handleChange =(event) => {
        const {name, value} = event.target;

        setPost(prev => {
            return {
                ...prev,
                [name]:value,
            }
        })
    };

    useEffect(() => {
        console.log(post)
    })

    return (
        <div>
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

        </div>
    )
}

export default MaterialsPost;
