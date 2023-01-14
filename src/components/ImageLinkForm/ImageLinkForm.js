import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div className="imageLinkForm-container">
      <p>{`This magic brain will detect faces inyour image`}</p>
      <div className="imageLinkForm-input-container">
        <input className="imageLinkForm-input" type="text" />
        <button className="imageLinkForm-button">Detect</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
