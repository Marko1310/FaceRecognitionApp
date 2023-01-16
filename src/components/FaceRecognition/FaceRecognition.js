import "./FaceRecognition.css";

const FaceRecognition = ({ imageURL, box }) => {
  console.log(box);
  return (
    <div className="faceRecognition-container">
      <div className="image-container">
        <img id="inputImage" className="faceRecognition-image" src={imageURL} />

        <div
          //   className="bounding-box"
          style={{
            position: "absolute",
            /* border-style: solid; */
            boxShadow: "0 0 0 3px #149df2 inset",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            cursor: "pointer",

            top: box.topRow,
            right: box.rightColumn,
            bottom: box.bottomRow,
            left: box.leftColumn,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
