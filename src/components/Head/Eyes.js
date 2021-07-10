import { Fragment } from "react";
import "./Eyes.css";

const Eyes = () => {
  return (
    <Fragment>
      <div className="eyebrow left-eyebrow"></div>
      <div className="eyebrow-rounded left-eyebrow-rounded"></div>
      <div className="eye left-eye">
        <div className="iris">
          <div className="pupil">
            <div className="pupil-detail"></div>
          </div>
        </div>
      </div>
      <div className="eyebrow right-eyebrow"></div>
      <div className="eyebrow-rounded right-eyebrow-rounded"></div>

      <div className="eye right-eye">
        <div className="iris">
          <div className="pupil">
            <div className="pupil-detail"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Eyes;
