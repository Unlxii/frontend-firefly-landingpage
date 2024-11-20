import { useState, useEffect, useCallback } from "react";
import { texts } from "../constants/texts";
import { Coverimage } from "../constants/images";
import covertext from "../constants/data/covertext.json";

interface covertext {
  descrpition: string;
}

const CoverSlide: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const updateIndex = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Coverimage.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(updateIndex, 3000);
    return () => clearInterval(interval);
  }, [updateIndex]);

  return (
    <div className="relative">
      {/* Slideshow Image */}
      <img
        src={Coverimage[currentIndex]}
        alt="cover slide"
        className="w-screen h-screen object-cover"
        aria-live="polite"
      />
      {/* Overlay Content */}
      <div className="flex flex-col absolute top-0 left-0 w-screen h-screen items-center justify-center p-4 md:p-0">
        {/* Welcome Text */}
        <div className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg mb-4 md:mb-6">
          Welcome To
        </div>
        {/* Project Name */}
        <div className="text-white text-5xl md:text-8xl font-bold drop-shadow-2xl">
          Project FireFly
        </div>
        {/* Gradient Text */}
        <div className="drop-shadow-2xl mt-8 md:mt-12 bg-opacity-10 bg-black px-8 md:px-48 py-2">
          <div className="gradient-text text-xl md:text-2xl font-semibold inline-block">
            {texts[currentIndex % Object.keys(covertext).length]}
          </div>
        </div>
        <button className="text-white text-lg md:text-xl font-semibold mt-6 md:mt-10 border-2 bg-black bg-opacity-40 rounded-lg px-4 md:px-8 py-4 md:py-5 hover:inline-block hover:gradient-text hover:bg-opacity-10 transition-colors duration-300">
          GET TO KNOW US
        </button>
      </div>
    </div>
  );
};

export default CoverSlide;
