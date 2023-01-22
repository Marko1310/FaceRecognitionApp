import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Particle from "./components/Particles/Particle";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  // state for image adress input
  const [input, setInput] = useState("");

  // state for image
  const [imageURL, setImageURl] = useState("");

  // state for a face box dimensions
  const [box, setBox] = useState("");

  // state for routing between pages (home, signin and register)
  const [route, setRoute] = useState("signout");

  // state for signed in
  const [signedin, setSignedIn] = useState(false);

  const onInputChange = function (event) {
    setInput(event.target.value);
  };

  const calculateFaceLocation = function (data) {
    const clarifaiFace =
      JSON.parse(data).outputs[0].data.regions[0].region_info.bounding_box;

    const image = document.getElementById("inputImage");
    const width = image.width;
    const height = image.height;
    return {
      leftColumn: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightColumn: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  const displayFaceBox = function (box) {
    setBox(box);
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
      .then((result) => displayFaceBox(calculateFaceLocation(result)))
      .catch((error) => console.log("error", error));
  };

  // function to change the signin state
  const onRouteChange = (route) => {
    if (route === "signout") {
      setSignedIn(false);
    } else if (route === "home") {
      setSignedIn(true);
    }
    setRoute(route);
  };

  return (
    <div className="App">
      <Particle />
      <Navigation onRouteChange={onRouteChange} signedin={signedin} />

      {route === "home" ? (
        <div>
          {" "}
          <Logo />
          <Rank />
          <div className="Logo-center">
            <ImageLinkForm
              onButtonSubmit={onButtonSubmit}
              onInputChange={onInputChange}
            />
          </div>
          <FaceRecognition imageURL={imageURL} box={box} />
        </div>
      ) : route === "signin" ? (
        <Signin onRouteChange={onRouteChange} />
      ) : (
        <Register onRouteChange={onRouteChange} />
      )}
    </div>
  );
}

export default App;
