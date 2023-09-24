import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className=" hidden md:block">
      <nav className="w-full p-3 flex justify-between items-center top-0 z-10">
        <div className="flex justify-center items-center text-3xl ml-4 cursor-pointer">
          <img src={logo} height={80} width={80} />
          <h1 className="m-2 uppercase font-medium">NSS KJSIT</h1>
        </div>
        <main className="flex justify-end mr-4 w-[70%]">
          <Link to={"/"} className="m-4 text-xl font-medium">
            Home
          </Link>
          <Link to={"/about"} className="m-4 text-xl font-medium">
            About Us
          </Link>
          <Link to={"/events"} className="m-4 text-xl font-medium">
            Events
          </Link>
          <Link to={"/team"} className="m-4 text-xl font-medium">
            Team
          </Link>
          <Link to={"/achievements"} className="m-4 text-xl font-medium">
            Achievements
          </Link>
          <Link to={"/contact"} className="m-4 text-xl font-medium">
            Contact
          </Link>
        </main>
      </nav>
    </div>
  );
};

export default Header;
