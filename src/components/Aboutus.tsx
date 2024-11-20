import React from "react";
import aboutUsData from "../constants/data/aboutus.json";
import Card from "./Card";

const DetailSection: React.FC<{
  details: { text: string; style: string }[];
}> = ({ details }) => (
  <p className="mt-4">
    {details.map((item, index) => (
      <span
        key={index}
        className={
          item.style === "highlight"
            ? "font-bold text-color10" // Highlighted text
            : "text-black font-light" // Normal text
        }
      >
        {item.text}
      </span>
    ))}
  </p>
);

const Title2: React.FC<{ title2: { text: string; style: string }[] }> = ({
  title2,
}) => (
  <p className="mb-6 mt-8">
    {title2.map((item, index) => (
      <span
        key={index}
        className={
          item.style === "underline"
            ? "text-navtext font-bold underline decoration-gradient"
            : "text-navtext text-start w-full font-bold"
        }
      >
        {item.text}
      </span>
    ))}
  </p>
);

const AboutUs: React.FC = () => {
  const { title, title2, header, details, details2, details3, details4 } =
    aboutUsData;

  return (
    <div className="flex flex-col items-center mt-10 mx-auto w-full max-w-xx bg-none px-4 sm:px-6 lg:px-8">
      <div className="text-lg leading-relaxed w-full text-start">
        <div className="flex items-center flex-col">
          <div className="w-full">
            {/* Title */}
            <h2 className="text-navtext text-start mb-4 font-light">{title}</h2>

            {/* Header */}
            <h3 className="text-2xl font-bold text-start mb-6 gradient-text3">
              {header}
            </h3>
            {/* Details */}
            <DetailSection details={details} />
            <DetailSection details={details2} />
            <DetailSection details={details3} />
            <DetailSection details={details4} />
            <div>
              <Title2 title2={title2} />
              <Card />
            </div>
          </div>
        </div>
      </div>
      <img
        src="/cardimage/FIREfly Overview 2.png"
        alt="overview"
        className="w-full h-auto mt-8 mb-12 flex justify-center items-center flex-wrap"
      />
    </div>
  );
};

export default AboutUs;
