import "./index.css";
import Slider from "./component/slider";
import sliderData from "./Data/sliderdata";

function App() {
  return (
    <>
      <div className="max-w-lg">
        <img
          className="h-auto max-w-full rounded-lg"
          src={`src/IMG/${sliderData.image}`}
        />
        <p className="absolute px-4 text-lg text-white bottom-6">
          {sliderData.description}
        </p>
      </div>
    </>
  );
}

export default App;
