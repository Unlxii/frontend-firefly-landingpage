import { useState, useEffect, useCallback } from "react";

const images = [
  "/Cover (SlideShow).png",
  "/Property 1=2.png",
  "/Property 1=3.png",
  "/Property 1=4.png",
  "/Property 1=5.png",
];

function CoverSlide() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(updateIndex, 3000);
    return () => clearInterval(interval);
  }, [updateIndex]);

  return (
    <div className="relative">
      <img
        src={images[currentIndex]}
        alt="cover slide"
        className="w-screen h-screen object-cover"
        aria-live="polite"
      />
      <div className="flex flex-col absolute -top-24 left-0 w-screen h-screen items-center justify-center">
        <div className="text-white text-4xl font-bold drop-shadow-lg mb-6">
          Welcome To
        </div>
        <div className="text-white text-8xl font-bold drop-shadow-2xl">
          Project FireFly
        </div>
        <div className="drop-shadow-2xl mt-12 bg-opacity-10 bg-black px-48 py-2">
          <div className=" text-2xl font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            {
              [
                "REAL-TIME ALERT SYSTEMS FOR FOREST FIRE DETECTION",
                "TO PROTECT VULNERABLE COMMUNITIES AROUND THE WORLD",
                "BY THE COMBINE OF UAVS, IOT, AND AI.",
              ][currentIndex % 3]
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverSlide;
