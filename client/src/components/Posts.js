import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Shelf from "./Shelf";
import FileBase from "react-file-base64";

function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [updatedPost, setUpdatedPost] = useState({
    selectedFile: "",
    name: "",
    description: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deletePost = (id) => {
    axios
      .delete(`/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
  };
  const updatePost = (post) => {
    setUpdatedPost(post);
    handleShow();
  };

  const handleChange = (e) => {
    setUpdatedPost({
      ...updatedPost,
      [e.target.name]: e.target.value,
    });
  };

  const saveUpdatedPost = () => {
    axios
      .put(`/update/${updatedPost._id}`, updatedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
    window.location.reload();
  };
  console.log(updatedPost._id);

  return (
    <div style={{ width: "90%", textAlign: "center", margin: "auto auto" }}>
      <h1>Material Creation page! </h1>
      <h2>
        {" "}
        <Shelf />
      </h2>

      <Button
        style={{ width: "100%", marginBottom: "1rem" }}
        variant="outline-dark"
        onClick={() => navigate(-1)}
      >
        {" "}
        Back{" "}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update material</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
            <FileBase
               type = "file"
               multiple={false}
               onDone={({base64}) => setUpdatedPost({ ... updatedPost, selectedFile: base64})}
               />
              {/* <Form.Control
                style={{ marginBottom: "1rem" }}
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setUpdatedPost({ ...updatedPost, selectedFile: base64 })
                }
              /> */}

              <Form.Control
                style={{ marginBottom: "1rem" }}
                name="name"
                value={updatedPost.name ? updatedPost.name : ""}
                placeholder="Name"
                onChange={handleChange}
              />

              <Form.Control
                style={{ marginBottom: "1rem" }}
                name="description"
                value={updatedPost.description ? updatedPost.description : ""}
                placeholder="Description"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUpdatedPost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {posts ? (
        <>
          {posts.map((post) => {
            return (
              <div
                key={post._id}
                style={{
                  border: "solid lightgray 1px",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                  padding: "1 rem",
                }}
              >
                <img src={post.selectedFile} alt="Material image" />
                <p> {post.name}</p>
                <p> {post.description}</p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="outline-info"
                    onClick={() => updatePost(post)}
                    style={{ width: "100%", marginRight: "1rem" }}
                  >
                    Update
                  </Button>
                  <Button
                    onClick={() => deletePost(post._id)}
                    variant="outline-danger"
                    style={{ width: "100%" }}
                  >
                    {" "}
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Posts;
