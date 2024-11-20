import { Footerlogo } from "../constants/images";

const Footer = () => {
  return (
    <footer className="w-full h-[152px] bg-custom-gradient4">
      <div className="flex flex-col md:flex-row w-full h-full justify-center items-center flex-wrap gap-4 md:gap-[1080px]">
        <div className="text-center md:text-left">
          <p className="text-navtext">CONTACT US</p>
          <p className="text-white">Email</p>
        </div>
        <div className="flex flex-row gap-4 justify-center items-center relative">
          {Footerlogo.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Footer logo ${index}`}
              className="h-auto w-auto"
            />
          ))}
          <div className="absolute bottom-0 md:bottom-auto sm:mt-40 md:mt-20 md:ml-[220px] text-center text-navtext">
            ©FireFly
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
