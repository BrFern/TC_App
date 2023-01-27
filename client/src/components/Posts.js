import {useEffect, useState} from "react";
import axios from "axios";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


function Posts () {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    axios
        .get("/posts")
        .then((res) => {
        console.log(res)
        setPosts(res.data);
    })
        .catch(err => console.log(err));
    }, [])

    const deletePost=(id) => {
        axios.delete(`/delete/${id}`)
        .then(res => console.log(res))
        .catch(err =>console.log(err));

        window.location.reload(); 
    }
    return(
        <div style={{width:"90%", textAlign:"center", margin: "auto auto"}}>
            <h1>Posts page</h1>
            <Button style= {{width: "100%", marginBottom:"1rem"}} variant="outline-dark" onClick={() => navigate(-1)}> Back </Button>

            {posts ? (
                <>
                   {posts.map(post => {
                    return (
                        <div 
                        key={post._id}
                        style= {{
                            border: "solid lightgray 1px",
                            borderRadius: "8px",
                            marginBottom:"1rem",
                            padding: "1 rem",  }}>
                            <h4>{post.image}</h4>
                            <p> {post.name}</p>
                            <p> {post.description}</p>
                            <div style={{
                                display: "flex", 
                                flexDirection: "row", 
                                justifyContent: "space-between",
                        }}>
                            <Button variant="outline-info" style = {{width: "100%", marginRight: "1rem"}}>
                                 Update 
                                 </Button>
                            <Button onClick={() => deletePost(post._id)} variant="outline-danger" style = {{width: "100%",}}> Delete</Button>
                            </div>
                        </div>
                    )
                   })} 
                </>
            ) : ""}
        </div>
    )
}

export default Posts;