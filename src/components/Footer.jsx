import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 font-[sans-serif] text-center text-white bottom-0 bg-[#000000da]">
      <div className=" grid justify-center md:justify-start items-center">© {new Date().getFullYear()} NSS KJSIT. All Rights Reserved.</div>
      <div className="text-xl font-bold cursor-pointer grid items-center">
        <Link to={"/developer"} className=" cursor-pointer">
          Meet the developers
        </Link>
      </div>
      <div className="grid grid-cols-4 text-center justify-end items-center font-medium">
        Follow us on:
        <p>
          <a href="https://www.instagram.com/nss__kjsit/">Instagram</a>
        </p>
        <p>
          <a href="https://www.facebook.com/nsskjsieit/">Facebook</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/company/nss-kjsieit/mycompany/">
            Linkedin
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
