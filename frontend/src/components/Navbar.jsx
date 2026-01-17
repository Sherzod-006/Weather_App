//IMPORTING ICONS
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoIosSunny, IoMdMoon } from "react-icons/io";
//IMPORTING REACT
import { useState, useContext, useEffect } from "react";
import { GetLocation } from "./GetLocation";
//IMPORTING RRD
import { Link } from "react-router-dom";
//IMPORTING CONTEXTS
import { LocationContext } from "../contexts/Contexts";

const Navbar = () => {
  //STATES
  const { curLocation, setCurLocation } = useContext(LocationContext);
  const [darkMode, setDarkMode] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  const [data] = GetLocation(query);

  //BUTTONS
  const button = ({ body }) => {
    return (
      <button className="bg-orange-500 hover:bg-amber-700 py-0.5 px-2 rounded-lg font-bold text-dark dark:text-light cursor-pointer">
        {body}
      </button>
    );
  };

  //FUNCTIONS

  function switcher() {
    setDarkMode(!darkMode);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      setQuery(searchTerm);
      setSearchTerm("");
    }
  };

  const themeClass = "darkLight rounded-full text-xl ";

  useEffect(() => {
    if (data) {
      console.log("Yangi data:", data);
    }
  }, [data]);
  return (
    <section className="darkLight px-3 md:px-6 py-0.5 md:py-1 flex items-center justify-between">
      <Link to="/" className="flex">
        <img
          className="h-8 md:h-10"
          src="/assets/WeatherAppLogo.png"
          alt="Logo"
        />
        <img
          className="hidden md:flex h-8 md:h-10"
          src="/assets/WeatherAppW.png"
          alt="Logo"
        />
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex items-center relative gap-0 md:gap-6"
      >
        <h1 className="flex items-center cursor-pointer">
          <FaLocationDot className="mr-1.5" />
          {`${curLocation.city}, ${curLocation.country}`}
        </h1>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search city..."
          className=" py-0.5 px-1 md:px-5 rounded-2xl outline-none  bg-hover"
        />
        <button className="absolute right-4" type="submit">
          <FaSearch />
        </button>
      </form>
      <menu className="lg:flex items-center gap-6 hidden">
        <button
          onClick={switcher}
          className="flex items-center bg-hover rounded-2xl border-2 border-hover  gap-2 cursor-pointer "
        >
          <IoIosSunny className={darkMode ? "" : themeClass} />
          <IoMdMoon className={darkMode ? themeClass : ""} />
        </button>
        {!isSignedIn ? (
          <button className="font-bold hover:underline">
            <Link to="/signup">SignUp</Link>
          </button>
        ) : null}
        {!isSignedIn ? (
          <Link to="/login">{button({ body: "LogIn" })}</Link>
        ) : null}
        {isSignedIn ? button({ body: "LogOut" }) : null}
        {isSignedIn ? (
          <Link to="/profile">
            <img
              src="https://res.cloudinary.com/dzqw71hhs/image/upload/v1767812364/AuthSystem/dqag695jdqtne4bwd1cs.jpg"
              alt="user-avatar"
              className="h-8 md:h-10 rounded-full object-cover"
            />
          </Link>
        ) : null}
      </menu>
    </section>
  );
};

export default Navbar;
