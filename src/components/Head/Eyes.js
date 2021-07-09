import React, { Fragment } from "react";
import "./Eyes.css";

const Eyes = () => {
  return (
    <Fragment>
      <div className="eye leftEye">
        <div className="pupil"></div>
      </div>
      <div className="eye rightEye">
        <div className="pupil"></div>
      </div>
    </Fragment>
  );
};

export default Eyes;
