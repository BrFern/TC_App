import React from "react";
import shelfImage from "../images/side_table.png";
const bshelf = {
  background: `url(${shelfImage})`,
  backgroundRepeat: "no-repeat",
  width: "50vw",
  height: "100vh",
};

const shelfContainer = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center"
}

function Shelf() {
  return (
    <div style={shelfContainer} >
        
      <div style={bshelf}></div>
    </div>
  );
}

export default Shelf;
