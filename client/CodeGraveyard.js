//FILE UPLOADER DATA

// import React, {useRef} from 'react';

// const FileUploader = ({onFileSelect}) => {
//     const fileInput = useRef(null)

//     const handleFileInput = (e) => {
//         //handle validations
//         const file = e.target.files [0];
//         if(file.size > 1024)
//             onFileSelectError({error: "File size cannot exceed more than 1MB"});
//         else onFileSelectSuccess(file)

//     }
//     return (
//         <div className="file-uploader">
//             <input type="file" onChange={handleFileInput} />
//             <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary" />
//         </div>
//     )
// }

// export default FileUploader;



  {/* <FileUploader 
            onFileSelectSuccess = {(file) => setSelectedFile(file)}
            onFileSelectError = {({error}) => alert(error)}/> */}

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




//     import React from "react";
// // import mongoose from "mongoose";
// import {useNavigate} from 'react-router-dom';
// import {Button, Form} from 'react-bootstrap';
// import {useState, useEffect} from 'react';


// function MaterialsPost () {
//     const navigate = useNavigate ();
//     const [post, setPost] = useState({
//         image: "",
//         name: "",
//         description: ""
//     })

//     const handleChange =(event) => {
//         const {name, value} = event.target;

//         setPost(prev => {
//             return {
//                 ...prev,
//                 [name]:value,
//             }
//         })
//     };

//     useEffect(() => {
//         console.log(post)
//     })

//     return (
//         <div>
//             <h1> Make a new material below! </h1>
//             <Form>
//                 <Form.Group>
//                     <Form.Control 
//                     name="image" 
//                     value={post.image}
//                     placeholder="Image" 
//                     style = {{marginBottom: "1rem"}}
//                     onChange = {handleChange} />
                    
//                     <Form.Control 
//                     name="name"
//                     value={post.name}
//                     placeholder ="Name of the material" 
//                     style = {{marginBottom: "1rem"}} 
//                     onChange = {handleChange}/>

//                     <Form.Control 
//                     name="description" 
//                     value={post.description}
//                     placeholder="Description" 
//                     style = {{marginBottom: "1rem"}} 
//                     onChange = {handleChange} />

//                 </Form.Group>
//             </Form>

//         </div>
//     )
// }

// export default MaterialsPost;


   {/* <Form.Control 
                style={{marginBottom: "1rem"}} 
                placeholder="Image" 
                name="image"
                value={updatedPost.image ? updatedPost.image: "" }
                onChange={handleChange}
                /> */}