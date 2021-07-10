import React, { Fragment } from "react";
import "./Eyes.css";

const Eyes = () => {
  return (
    <Fragment>
      <div className="eyebrow left-eyebrow"></div>
      <div className="eye left-eye">
        <div className="iris">
          <div className="pupil"></div>
        </div>
      </div>
      <div className="eyebrow right-eyebrow"></div>

      <div className="eye right-eye">
        <div className="iris">
          <div className="pupil"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Eyes;
