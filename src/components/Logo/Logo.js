import React from "react";
import Tilt from "react-parallax-tilt";

const Logo = () => {
  return (
    <div>
      <Tilt>
        <div
          style={{
            width: "200px",
            height: "300px",
            backgroundColor: "darkgreen",
          }}
        >
          <h1>React Parallax Tilt 👀</h1>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
