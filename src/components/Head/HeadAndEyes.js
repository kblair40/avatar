import React from "react";
import Backdrop from "../UI/Backdrop";
import "./HeadAndEyes.css";

const Head = () => {
  return (
    <Backdrop>
      <div className="headContainer">
        <div className="eyesContainer">
          <div className="eye leftEye">
            <div className="pupil"></div>
          </div>
          <div className="eye rightEye">
            <div className="pupil"></div>
          </div>
        </div>
      </div>
    </Backdrop>
  );
};

export default Head;
