import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
  return (
    <div className="imageLinkForm-container">
      <p>{`This magic brain will detect faces inyour image`}</p>
      <div className="imageLinkForm-input-container">
        <input
          onChange={onInputChange}
          className="imageLinkForm-input"
          type="text"
        />
        <button onClick={onPictureSubmit} className="imageLinkForm-button">
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
