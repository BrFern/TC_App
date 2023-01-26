import './App.css';
import {Button} from "react-bootstrap";
import {navigate, useNavigate} from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1> Login Page</h1>
      <Button onClick={() => navigate("create")}> Login</Button>
    </div>
  );
}

export default App;
