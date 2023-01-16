import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Particle from "./components/Particles/Particle";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const onInputChange = function (event) {
    console.log(event.target.value);
  };

  ////////////// FACE DETECTION API //////////////////
  const USER_ID = "marko_1310";
  // Your PAT (Personal Access Token) can be found in the portal under Authentification
  const PAT = "2a16d935ac2b43b1b08762124abc2a7a";
  const APP_ID = "my-first-application";
  // Change these to whatever model and image URL you want to use
  const MODEL_ID = "general-image-recognition";
  const MODEL_VERSION_ID = "aa7f35c01e0642fda5cf400f543e7c40";
  const IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";

  const onButtonSubmit = function () {
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
      .then((result) => console.log(result))
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
      <FaceRecognition />
    </div>
  );
}

export default App;
