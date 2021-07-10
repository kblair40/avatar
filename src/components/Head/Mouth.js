import React from "react";

import Teeth from "./Teeth";
import "./Mouth.css";

const Mouth = () => {
  return (
    <div className="mouth">
      <div className="lip upper-lip"></div>
      <div className="lip lower-lip"></div>
      <div className="lower-lip-rounded"></div>
      <div>
        <Teeth />
      </div>
    </div>
  );
};

export default Mouth;
