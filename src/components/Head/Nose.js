import React from "react";
import "./Nose.css";

const Nose = () => {
  return (
    <React.Fragment>
      <div className="nose">
        <div className="caveIn">
          <div className="caveInLeft"></div>
          <div className="caveInRight"></div>
        </div>
        <div className="noseCircle"></div>
      </div>
    </React.Fragment>
  );
};

export default Nose;
