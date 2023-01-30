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