import React from "react";
import '../App.css';

const Bird = ({ top, gameRunning }) => {
  const style = { top: `${top}px` };
  if (gameRunning) {
    return (
      <div className="Bird" style={style}>
        <img src="bird.gif" style={{ width: "70px", height: "70px" }} />
      </div>
    )
  } else {
    return (
      <div className="Bird" style={style}>
        <img src="birdStatic.png" style={{ width: "70px", height: "70px" }} />
      </div>
    )
  }

}

export default Bird;
