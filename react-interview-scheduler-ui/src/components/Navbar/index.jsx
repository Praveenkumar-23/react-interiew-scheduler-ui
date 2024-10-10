import { useEffect, useState } from "react";
import NavbarDropdown from "./navbarDropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleScrollPos = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > scrollPos) {
      setIsOpen(false);
    }

    setScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPos);

    return () => {
      window.removeEventListener("scroll", handleScrollPos);
    };
  }, [scrollPos]);

  return (
    <nav className="bg-tertiary-300 relative">
      <div className="container mx-auto max-w-[1344px]">
        <div className="h-16 md:h-20 p-5 md:py-6 lg:px-5 flex items-center justify-between z-20 bg-tertiary-300 relative">
          {/* Icon */}
          <a href="#">
            <img
              className="w-[124px] h-10 lg:w-[150px] lg:h-[42px] object-contain z-20 relative"
              src="/avps-header.png"
              alt="avps-icon"
            />
          </a>

          {/* Hamburger */}
          <div
            onClick={handleOpen}
            className={`${
              isOpen ? "open" : ""
            } flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-20`}
          >
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black-500 rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-black-500 rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black-500 rounded-full"></span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center md:gap-4 lg:gap-8 text-black-200 text-sm lg:text-base font-body">
            <a href="#" className="navlink active-navlink">
              Our Products
            </a>
            <a href="#" className="navlink">
              Smart Solutions
            </a>
            <a href="#" className="navlink">
              Pricing Plans
            </a>
            <a href="#" className="navlink">
              Resource Center
            </a>
            <a href="#" className="navlink">
              Our Clients
            </a>
          </div>

          {/* Button */}
          <div className="hidden md:flex md:gap-4 lg:gap-[25px] items-center text-sm lg:text-base font-head font-medium">
            <button className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
              Start Free
            </button>
            <button className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
              Contact
            </button>
          </div>

          {/* <div className="hidden md:flex md:gap-4 lg:gap-[25px] items-center text-sm lg:text-base font-head font-medium">
            <a href="#">
              <button className="text-white bg-[#007BFF] md:py-2.5 py-3.5 px-4 rounded transition duration-300 ease-in-out transform hover:bg-[#0056b3] focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:ring-opacity-50">
                Start Free
              </button>
            </a>

            <a href="#">
              <button className="text-white bg-[#007BFF]   md:py-2.5 py-3.5 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-opacity-50">
                Contact
              </button>
            </a>
          </div> */}
        </div>

        {/* Navbar Menu (Mobile) */}
        <NavbarDropdown isOpen={isOpen} />
      </div>
    </nav>
  );
}
