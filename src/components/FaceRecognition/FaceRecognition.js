import "./FaceRecognition.css";

const FaceRecognition = ({ imageURL }) => {
  return (
    <div className="faceRecognition-container">
      <img src={imageURL} />
    </div>
  );
};

export default FaceRecognition;
