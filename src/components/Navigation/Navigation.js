import React from "react";
import "./Navigation.css";

const Navigation = ({ onRouteChange }) => {
  return (
    <nav className="navigation">
      <p onClick={() => onRouteChange("signin")} className="signout">
        Sign Out
      </p>
    </nav>
  );
};

export default Navigation;
