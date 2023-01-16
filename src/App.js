import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Particle from "./components/Particles/Particle";
import { useState } from "react";

function App() {
  // state for image adress input
  const [input, setInput] = useState("");

  // state for image
  const [imageURL, setImageURl] = useState("");

  // state for a box
  const [box, setBox] = useState("");

  const onInputChange = function (event) {
    setInput(event.target.value);
  };

  const calculateFaceLocation = function (data) {
    const clarifaiFace =
      JSON.parse(data).outputs[0].data.regions[0].region_info.bounding_box;

    console.log(clarifaiFace);

    const image = document.getElementById("inputImage");
    const width = image.width;
    const height = image.height;

    console.log(height, width);
  };

  ////////////// FACE DETECTION API //////////////////
  const USER_ID = "marko_1310";
  // Your PAT (Personal Access Token) can be found in the portal under Authentification
  const PAT = "2a16d935ac2b43b1b08762124abc2a7a";
  const APP_ID = "my-first-application";
  // Change these to whatever model and image URL you want to use
  const MODEL_ID = "face-detection";
  const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105";
  const IMAGE_URL = input;

  const onButtonSubmit = function () {
    setImageURl(input);
    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id

    fetch(
      "https://api.clarifai.com/v2/models/" +
        MODEL_ID +
        "/versions/" +
        MODEL_VERSION_ID +
        "/outputs",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) =>
        // console.log(
        //   JSON.parse(result).outputs[0].data.regions[0].region_info.bounding_box
        // )
        calculateFaceLocation(result)
      )
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="App">
      <Particle />
      <Navigation />
      <Logo />
      <Rank />
      <div className="Logo-center">
        <ImageLinkForm
          onButtonSubmit={onButtonSubmit}
          onInputChange={onInputChange}
        />
      </div>
      <FaceRecognition imageURL={imageURL} />
    </div>
  );
}

export default App;
