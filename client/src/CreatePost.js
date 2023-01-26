import {Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import Images from './image'


function CreatePost() {
    const navigate = useNavigate();
    

    return (
        <div style={{width:"90%", margin: "auto auto",textAlign:"center" }}>
            {/* IF YOUR STYLING IS WEIRD LOOK HERE -Not best practice*/}
            <h1>Your shelf</h1>
               <Images />

            <Button
            style={{width:"100%"}} 
            variant="outline-dark"
            onClick= {() => navigate (-1)}> Back </Button> 
            {/* Button to navigate back to previous page */}
        </div>
    )
}

export default CreatePost;
