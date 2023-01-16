import "./FaceRecognition.css";

const FaceRecognition = ({ imageURL }) => {
  return (
    <div className="faceRecognition-container">
      <img id="inputImage" className="faceRecognition-image" src={imageURL} />
    </div>
  );
};

export default FaceRecognition;
