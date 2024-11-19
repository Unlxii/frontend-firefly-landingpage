import { useState } from "react";

function Navbar() {
  const [selectedNav, setSelectedNav] = useState<string | null>(null);
  return (
    <nav className=" backdrop-blur-lg w-screen text-white font-medium p-6 shadow-xl absolute rounded-b-3xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/firefly-logo.png"
            alt="Firefly Logo"
            className="h-8 w-8 mr-3"
          />
          <h1 className="text-2xl font-bold tracking-wide">Firefly</h1>
        </div>

        {/* Navigation Menu */}
        <ul className="flex space-x-24">
          {[
            "HOME",
            "ABOUT",
            "DASHBOARD",
            "TEAM",
            "PUBLICATIONS",
            "GALLERY",
            "NEWS",
          ].map((item) => (
            <li key={item}>
              <a
                href="#"
                className={` ${selectedNav === item ? "text-navtext " : ""}`}
                onClick={() => setSelectedNav(item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
