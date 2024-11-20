import { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              "text-navtext bg-opacity-20 bg-black rounded-md":
                selectedNav === item && !isMobile,
              "block text-navtext bg-opacity-20 bg-black bg-clip-border ":
                selectedNav === item && isMobile,
              "p-2": true,
              " text-color10 ": isScrolled,
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
    <nav
      className={classNames(
        "w-screen text-white font-medium p-3 md:p-6 shadow-xl fixed rounded-b-3xl z-50 transition-all duration-300",
        {
          "bg-white text-black": isScrolled,
          "backdrop-blur-sm text-white": !isScrolled,
        }
      )}
    >
      <div className="container mx-auto flex justify-between items-center gap-6">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          {isScrolled ? (
            <img src="/Subtract.svg" alt="Scrolled Logo" className="h-8" />
          ) : (
            <img src="/firefly-logo.svg" alt="Original Logo" className="h-8" />
          )}
          <h1
            className={classNames("text-2xl font-bold tracking-wide", {
              "gradient-text3": isScrolled,
              "text-white": !isScrolled,
            })}
          >
            Firefly
          </h1>
        </div>

        {/* Desktop Navigation */}
        {renderNavItems(false)}

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedNav(selectedNav === "MENU" ? null : "MENU");
            }}
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
        <div className="md:hidden mt-4" onClick={(e) => e.stopPropagation()}>
          {renderNavItems(true)}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
