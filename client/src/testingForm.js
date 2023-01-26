// import axios from "axios";
import React, {useState, useRef} from "react";

const FileUploaded = ({onFileSelect}) => {
  const fileInput = useRef(null)

  const handleFileInput = (e) => {
    //handle validations
    onFileSelect(e.target.files[0])
  }

  return(
    <div className="file-uploader">
      <input type="file" onChange={handleFileInput}/>
      <button onClick = {e => fileInput.current && fileInput.current.click()} />
    </div>
  )

  }




const Form = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState ("");

  // const submitForm = () => {
  //   const formData = new FormData();
  //   formData.append("file", selectedFile);
  //   formData.append("name", name);
    
  //   axios
  //     .post(UPLOAD_URL, formData)
  //     .then((res) => {
  //       alert("File Upload success");
  //     })
  //     .catch((err) => alert("File upload error"))
  // };

  return (
    <div className="material-1">
      <form> 
        <input 
        type ="file"
        value={selectedFile}
        onChange={(e) => setSelectedFile(e.target.files[0])}  />

        <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} 
        />

        <input 
        type="textarea" 
        value={description} 
        onChange = {(e) => setDescription(e.target.value)}/>

{/* 
        <FileUploaded 
          onFileSelectSucces={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)} 
          />

        <button onClick={submitForm}>Submit</button> */}
      </form>
    </div>
 )
}

export default Form;

