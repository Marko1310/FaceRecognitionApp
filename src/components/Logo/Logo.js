import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "./Brain.png";

const Logo = () => {
  return (
    <div className="tilt-container">
      <Tilt className="tilt-icon" options={{ tiltEnable: false }}>
        <div className="tilt-image">
          <img src={brain} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
