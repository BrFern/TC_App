// import './App.css';
import {Button, Form} from "react-bootstrap";
import {navigate, useNavigate} from "react-router-dom";


function App() {
  const navigate = useNavigate();

  return (
    <div style ={{width: "90%", margin:"auto auto", textAlign: "center"}}>
    
      <h1> Login Page</h1>
      <Form>
        <Form.Group>
          <Form.Control name ="Name" placeholder="Name" style = {{marginBottom: "1rem"}}/>
          <Form.Control name = "Email" placeholder = "Email" style = {{marginBottom: "1rem"}} />
          <Form.Control name="Password" placeholder ="Password" style = {{marginBottom: "1rem"}}/> 
        </Form.Group>
      </Form>
      <Button 
      variant = "outline-dark"
      style={{width: "100%"}}
      onClick={() => navigate("create")}> Login</Button>
    </div>
  );
}

export default App;
