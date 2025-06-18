import React,{useState} from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Hospet <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <>
      <div className="flex items-center w-full gap-3">
        <div className="w-10 h-10">
          <img
            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
          <BiSearch />
          <input
            type="search"
            className="w-full bg-transparent border-none focus:outline-none"
            placeholder="Search for movies, events, plays, sports and activities"
          />
        </div>
      </div>
    </>
  );
}

function NavLg() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState("Location");
  
    const handleCitySelect = (city) => {
      setSelectedCity(city);
      setIsDropdownOpen(false);
    };
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, plays, sports and activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <span
              className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {selectedCity} <BiChevronDown />
            </span>

            {isDropdownOpen && (
              <div className="absolute top-8 left-0 bg-white text-black rounded shadow-lg z-50 w-40">
                {["Location", "Bangalore", "Delhi", "Chennai"].map((city) => (
                  <div
                    key={city}
                    onClick={() => handleCitySelect(city)}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/plays"
            className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white"
          >
            Plays
          </Link>
          <a
            href="http://127.0.0.1:5500/gym1.html#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
              Sign In
            </button>
          </a>

          <div className="relative">
            {" "}
            <div
              className="w-8 h-8 text-white cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <BiMenu className="w-full h-full" />
            </div>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
                {["Movies", "Plays", "Home", "Sports"].map((item) => (
                  <a
                    key={item}
                    href={item === "Home" ? "/": item === "Movies"? "/movie/668489": `/${item.toLowerCase()}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// Main Component
const Navbar = () => {
  return (
    <nav className="bg-darkBackground-700 px-4 py-3">
      {/* Mobile Screen NavBar */}
      <div className="md:hidden">
        <NavSm />
      </div>
      {/* Medium/Tab Screen NavBar */}
      <div className="hidden md:flex lg:hidden">
        <NavMd />
      </div>
      {/* Large Screen NavBar */}
      <div className="hidden md:hidden lg:flex">
        <NavLg />
      </div>
    </nav>
  );
};

export default Navbar;
