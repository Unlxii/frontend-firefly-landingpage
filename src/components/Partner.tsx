import { Logo } from "../constants/images";

const PartnerSection = () => {
  return (
    <div className="w-full bg-custom-gradient2 flex flex-col">
      <h2 className="gradient-text2 text-3xl font-bold mb-6 flex justify-center mt-4">
        PARTNERSHIP
      </h2>
      <div className="flex flex-wrap justify-center items-center mb-8">
        {Logo.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partner logo ${index}`}
            className="h-16 w-auto mx-4 my-2 sm:h-24 md:h-32 lg:h-40"
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
