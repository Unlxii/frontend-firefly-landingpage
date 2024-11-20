import MissionData from "../constants/data/mission.json"; // Import JSON file
import TreeLeft from "../assets/mission/tree-left.png"; // Import tree-left image
import TreeRight from "../assets/mission/tree-right.png"; // Import tree-right image
import QuoteIcon from "../assets/mission/quote-icon.png"; // Import quote icon

interface Mission {
  title: string;
  subtitle: string;
}

const Mission = () => {
  const data: Mission = MissionData;
  return (
    <div className="relative w-full h-auto bg-color3 flex flex-col items-center px-6 py-12">
      <div className="max-w-4xl text-center mt-2">
        {/* Quotation Marks */}
        <div className="text-white flex justify-center items-center text-2xl w-full h-auto text-center relative px-4">
          <img
            src={QuoteIcon}
            alt="Quote Left"
            className="absolute left-[-20px] md:left-[-50px] lg:left-[-150px] top-0 w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12"
          />
          <p className="gradient-text relative z-10 font-semibold text-lg md:text-xl lg:text-2xl">
            {data.title}
          </p>
          <img
            src={QuoteIcon}
            alt="Quote Right"
            className="absolute right-[-20px] md:right-[-50px] lg:right-[-150px] top-0 rotate-180 w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12"
          />
        </div>

        {/* Supporting Text */}
        <div className="text-white flex justify-center mt-4 px-4 text-sm md:text-base lg:text-lg">
          {data.subtitle}
        </div>
      </div>

      {/* Trees Illustration */}
      <div className="flex justify-between w-full max-w-8xl absolute bottom-0 left-0 right-0 gap-4">
        <img
          src={TreeLeft}
          alt="Left Trees"
          className="h-16 w-auto object-contain pl-2 md:pl-4 lg:pl-8 xl:pl-12"
        />
        <img
          src={TreeRight}
          alt="Right Trees"
          className="h-16 w-auto pr-2 md:pr-4 lg:pr-8 xl:pr-12 pt-2 object-contain"
        />
      </div>
    </div>
  );
};

export default Mission;
