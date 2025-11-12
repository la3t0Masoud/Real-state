import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMobileMenu, setshowMobileMenu] = useState(false);
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.overflow = `auto`;
    }
    return () => {
      document.body.style.overflow = `auto`;
    };
  }, [showMobileMenu]);
  return (
    <div className="absolute top-0 left-0 w-full z-10 bg-gray-800">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent gap-7">
        <Link to="/">
          {" "}
          <img src={assets.logo} alt="" />
        </Link>
        <ul className="hidden md:flex gap-7 text-white ">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            {" "}
            Home{" "}
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            {" "}
            About{" "}
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            {" "}
            Projects{" "}
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-400">
            {" "}
            Testimonials{" "}
          </a>
        </ul>
        <Link to="/Signup">
          <button className="hidden md:block cursor-pointer bg-white px-8 py-2 rounded-full text-xs hover:bg-gray-100">
            {" "}
            Sign up
          </button>
        </Link>
        <img
          onClick={() => setshowMobileMenu(true)}
          src={assets.menu_icon}
          alt="menu"
          className="md:hidden w-7 cursor-pointer"
        />
      </div>
      {/* -----------mobile-menu--------- */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className="flex justify-end p-6">
          <img
            onClick={() => {
              setshowMobileMenu(false);
            }}
            src={assets.cross_icon}
            alt=""
            className={`w-6 cursor-pointer`}
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={() => {
              setshowMobileMenu(false);
            }}
            href="#Header"
            className="px-4 py-2 rounded-full inline-block">
            Home
          </a>
          <a
            onClick={() => {
              setshowMobileMenu(false);
            }}
            href="#About"
            className="px-4 py-2 rounded-full inline-block">
            About
          </a>
          <a
            onClick={() => {
              setshowMobileMenu(false);
            }}
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block">
            Projects
          </a>
          <a
            onClick={() => {
              setshowMobileMenu(false);
            }}
            href="#Testimonails"
            className="px-4 py-2 rounded-full inline-block">
            Testimonails
          </a>
          <Link to="/SignUp">
            <a
              onClick={() => {
                setshowMobileMenu(false);
              }}
              className="px-4 py-2 rounded-full inline-block bg-blue-300">
              Sign Up
            </a>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
