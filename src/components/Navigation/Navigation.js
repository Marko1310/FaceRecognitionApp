import React from "react";
import "./Navigation.css";

const Navigation = ({ onRouteChange, signedin }) => {
  if (signedin) {
    return (
      <nav className="navigation">
        <p onClick={() => onRouteChange("signout")} className="signout">
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav className="navigation">
        <p onClick={() => onRouteChange("signin")} className="signout">
          Sign In
        </p>
        <p onClick={() => onRouteChange("register")} className="signout">
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
