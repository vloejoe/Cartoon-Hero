import React, { useState } from "react";
import sliderData from "../Data/sliderdata";

export default function Slider() {
  const [sliderIndex, setSliderIndex] = useState(1);

  return (
    <div className="max-w-lg">
      <img
        className="h-auto max-w-full rounded-lg"
        src={`src/IMG/${sliderData.image}`}
      />
      <p className="absolute px-4 text-lg text-white bottom-6">
        {sliderData.description}
      </p>
    </div>
  );
}
