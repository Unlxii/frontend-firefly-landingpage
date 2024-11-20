import Coversilde from "./components/Coversilde";
import Navbar from "./components/Navbar";
import AboutUs from "./components/Aboutus";
import Mission from "./components/Mission";
import Partner from "./components/Partner";
import Dashboard from "./components/Dashboard";
import Other from "./components/Other";
import Footer from "./components/Footer";

function Landscape() {
  return (
    <>
      <div className=" bg-bgmain w-screen h-screen">
        <Navbar />
        <Coversilde />
        <Mission />
        <AboutUs />
        <Partner />
        <Dashboard />
        <Other />
        <Footer />
      </div>
    </>
  );
}

export default Landscape;
