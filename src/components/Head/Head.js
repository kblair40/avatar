import React from "react";

import "./Head.css";
import Backdrop from "../UI/Backdrop";
import Eyes from "./Eyes";
import Nose from "./Nose";
import Hair from "./Hair";
import Ears from "./Ears";

const Head = () => {
  return (
    <Backdrop>
      <div className="headContainer">
        <div className="hairContainer">
          <Hair />
        </div>
        <div className="earsContainer">
          <Ears />
        </div>
        <div className="eyesContainer">
          <Eyes />
        </div>
        <div className="noseContainer">
          <Nose />
        </div>
      </div>
    </Backdrop>
  );
};

export default Head;
