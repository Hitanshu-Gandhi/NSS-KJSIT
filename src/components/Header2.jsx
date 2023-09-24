import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Squash as Hamburger, Squash } from "hamburger-react";

const Header2 = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className=" md:hidden w-full p-2 flex justify-between items-center top-0 z-10">
        <div className="flex justify-center items-center text-3xl cursor-pointer">
          <img src={logo} height={70} width={70} />
          <h1 className="m-2 uppercase font-medium">NSS KJSIT</h1>
        </div>

        <nav className="right-0">
          <Squash
            toggled={isOpen}
            toggle={setOpen}
            onToggle={(toggled) => {
              setOpen(!isOpen);
            }}
          />
        </nav>
      </div>

      <div className={`grid grid-cols-1 gap-4 text-center ${isOpen ? "block" : "hidden"}`}>
        <Link to={"/"} className=" text-xl font-medium">
          Home
        </Link>
        <Link to={"/about"} className="text-xl font-medium">
          About Us
        </Link>
        <Link to={"/events"} className=" text-xl font-medium">
          Events
        </Link>
        <Link to={"/team"} className=" text-xl font-medium">
          Team
        </Link>
        <Link to={"/achievements"} className=" text-xl font-medium">
          Achievements
        </Link>
        <Link to={"/contact"} className=" text-xl font-medium">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header2;
