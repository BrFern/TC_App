// import './App.css';
import {Button, Form} from "react-bootstrap";
import {navigate, useNavigate} from "react-router-dom";
import Background from "./components/Background";




function App() {
  const navigate = useNavigate();

  return (
    <div style ={{ width: "100vw", height: "100vh", textAlign: "center", margin: "auto auto", backgroundColor:"lightblue" }}>
    
      <h1> Login Page</h1>
      <Form
      style={{width: "50%", textAlign: "center", margin: "auto auto"}}>
        <Form.Group>
          <Form.Control name ="Name" placeholder="Name" style = {{marginBottom: "1rem"}}/>
          <Form.Control name = "Email" placeholder = "Email" style = {{marginBottom: "1rem"}} />
          <Form.Control name="Password" placeholder ="Password" type="password" style = {{marginBottom: "1rem"}}/> 
        </Form.Group>
      </Form>
      <Button 
      variant = "outline-dark"
      style={{width: "50%"}}
      onClick={() => navigate("create")}> Login</Button>
      <Background />

     
      
    </div>
  );
}

export default App;
