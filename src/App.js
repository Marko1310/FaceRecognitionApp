import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <div className="Logo-center">
        <ImageLinkForm />
      </div>
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
