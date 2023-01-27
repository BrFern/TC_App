import {useEffect, useState} from "react";
import axios from "axios";

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
                        <div>
                            <h4>{post.name}</h4>
                        </div>
                    )
                   })} 
                </>
            ) : ""}
        </div>
    )
}

export default Posts;