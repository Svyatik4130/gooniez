import React from "react";
import '../App.css';

const Bird = ({ top, gameRunning }) => {
  const style = { top: `${top}px` };
  if (gameRunning) {
    return (
      <div className="Bird" style={style}>
        <img src="turtle.gif" style={{ width: "70px", height: "50px", objectFit: "cover" }} />
      </div>
    )
  } else {
    return (
      <div className="Bird" style={style}>
        <img src="static_turtle.png" style={{ width: "70px", height: "70px" }} />
      </div>
    )
  } 
 
}

export default Bird;
