import React, { useState,useContext } from "react";
import { BiChevronDown, BiMenu, BiSearch, BiShareAlt } from "react-icons/bi";
import { MovieContext } from "../../context/Movie.context";


const NavSm = () => {
  const { movie } = useContext(MovieContext);
  return (
    <>
      <div className="text-gray-700 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">{movie.original_title}</h3>
        </div>
      </div>
      <div className="w-8 h-8">
        <BiShareAlt className="w-full h-full" />
      </div>
    </>
  );
};

const NavLg = () => {
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
              className="w-full bg-transparent border-none focus: outline-none"
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
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
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
};

const MovieNavbar = () => {
  return (
    <>
      <nav className="bg-white border-b-2 lg:border-b-0 lg:bg-darkBackground-700 p-4">
        {/* Small Screen Size */}
        <div className="lg:hidden">
          <NavSm />
        </div>
        {/* Only on Large Screen Size */}
        <div className="hidden w-full lg:flex">
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
