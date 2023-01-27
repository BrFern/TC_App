import {useEffect, useState} from "react";
import axios from "axios";
import {Button} from "react-bootstrap";


function Posts () {
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
    return(
        <div style={{width:"90%", textAlign:"center", margin: "auto auto"}}>
            <h1>Posts page</h1>
            {posts ? (
                <>
                   {posts.map(post => {
                    return (
                        <div style= {{
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
                            <Button variant="outline-info" style = {{
                                width: "100%",
                                marginRight: "1rem"
                            }}> Update </Button>
                            <Button variant="outline-danger" style = {{width: "100%",}}> Delete</Button>
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