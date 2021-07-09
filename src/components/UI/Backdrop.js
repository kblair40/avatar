import React from "react";
import "./Backdrop.css";

const Backdrop = (props) => {
  return (
    <div className="backdropContainer">
      <div className="circle">{props.children}</div>
    </div>
  );
};

export default Backdrop;
