import { useState } from "react";
import classNames from "classnames";

const NAV_ITEMS = [
  "HOME",
  "ABOUT",
  "DASHBOARD",
  "TEAM",
  "PUBLICATIONS",
  "GALLERY",
  "NEWS",
];

function Navbar() {
  const [selectedNav, setSelectedNav] = useState<string | null>(null);

  const renderNavItems = (isMobile: boolean) => (
    <ul
      className={classNames({
        "hidden md:flex space-x-6 lg:space-x-20": !isMobile,
        "md:hidden mt-4 space-y-2": isMobile,
      })}
    >
      {NAV_ITEMS.map((item) => (
        <li key={item}>
          <a
            href={`#${item.toLowerCase()}`}
            className={classNames({
              "text-navtext bg-opacity-10 bg-black rounded-md":
                selectedNav === item && !isMobile,
              "block text-navtext bg-opacity-10 bg-black bg-clip-border ":
                selectedNav === item && isMobile,
              "p-2": true,
            })}
            onClick={() => setSelectedNav(item)}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="backdrop-blur-sm w-screen text-white font-medium p-3 md:p-6 shadow-xl absolute rounded-b-3xl md:backdrop-blur-lg z-50">
      <div className="container mx-auto flex justify-between items-center gap-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/firefly-logo.png"
            alt="Firefly Logo"
            className="h-4 w-4 mr-2 md:h-8 md:w-8 md:mr-3"
          />
          <h1 className="text-2xl font-bold tracking-wide">Firefly</h1>
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex">{renderNavItems(false)}</div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
            onClick={() =>
              setSelectedNav(selectedNav === "MENU" ? null : "MENU")
            }
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {selectedNav === "MENU" && (
        <div className="md:hidden mt-4">{renderNavItems(true)}</div>
      )}
    </nav>
  );
}

export default Navbar;
