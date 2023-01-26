import {Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom'

function CreatePost() {
    const navigate = useNavigate();

    return (
        <div style={{width:"90%", margin: "auto auto",textAlign:"center" }}>
            {/* IF YOUR STYLING IS WEIRD LOOK HERE -Not best practice*/}
            <h1>Create a material</h1>
            <Button
            style={{width:"100%"}} 
            variant="outline-dark"
            onClick= {() => navigate (-1)}> Back </Button> 
            {/* Button to navigate back to previous page */}
        </div>
    )
}

export default CreatePost;
