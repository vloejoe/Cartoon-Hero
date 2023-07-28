import React, { useState } from "react";
import sliderData from "/src/Data/sliderdata";

export default function Slider() {
  const [sliderIndex, setSliderIndex] = useState(1);

  return (
    <div className="max-w-lg">
      <img
        className="h-auto max-w-full rounded-lg"
        src={`src/IMG/${sliderData.image}`}
      />
      <p className="absolute px-4 text-lg text-white bottom-6">
        {sliderData.episode}
      </p>
      <p className="relative px-4 text-lg text-black bottom-6">
        'Severance's Commentary on Work/Life Balance'
      </p>
    </div>
  );
}
