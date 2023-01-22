import React from "react";
import "./Rank.css";

const Rank = ({ user }) => {
  return (
    <div className="rank-container">
      <div className="rank-text">{`${user.name} your current entries count is... `}</div>
      <div className="rank-number">{`# ${user.entries}`}</div>
    </div>
  );
};

export default Rank;
