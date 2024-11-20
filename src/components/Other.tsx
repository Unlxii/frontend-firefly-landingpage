import React from "react";
import { OtherData } from "../constants/images";

const Other: React.FC = () => {
  return (
    <div className="mx-auto max-w-xx p-4">
      <div className="text-lg w-full text-start">
        {/* Title */}
        <h2 className="text-navtext text-start mb-4 font-light">Other</h2>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-6">
        {OtherData.map((item, index) => (
          <div key={index} className="mb-10 w-full md:w-1/2 lg:w-1/3">
            <div className="relative">
              <img
                src="/other/BGButton.png"
                alt="background"
                className="h-48 md:h-72 w-full object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 flex flex-col w-full h-full p-4">
                <p className="gradient-text4 font-semibold text-xl md:text-2xl lg:text-3xl text-start mt-4">
                  {item.topic}
                </p>
                <img
                  src={item.Image}
                  alt={item.topic}
                  className="w-full h-24 md:h-32 lg:h-40 object-contain mt-8 lg:mt-16"
                />
                <button className=" lg:-mt-20 relative flex items-center justify-center px-6 py-2 bg-black bg-opacity-10 text-white text-lg lg:text-xl font-semibold rounded-full shadow-lg hover:bg-black hover:bg-opacity-20 transition duration-300 border-2 w-fit sm: -mt-20">
                  VIEW →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Other;
