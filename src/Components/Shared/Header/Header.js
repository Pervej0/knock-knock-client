import React from "react";
import "./Header.css";
import "./HeaderQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faStethoscope,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
// import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  // const { user, logOut } = useAuth();
  return (
    <header>
      <nav className="flex items-center bg-yellow-500 p-3 flex-wrap md:px-14">
        <NavLink
          to="/"
          className="p-2 mr-4 inline-flex items-center brand-name"
        >
          <FontAwesomeIcon
            className="text-white"
            icon={faStethoscope}
            size="2x"
          ></FontAwesomeIcon>
          <span className="text-xl text-white font-serif italic font-semibold tracking-wide">
            &nbsp;getWell C.C.
          </span>
        </NavLink>
        <button
          className="text-white inline-flex p-3 rounded lg:hidden ml-auto hover:text-gray-300 leading-4	 font-semibold outline-none nav-toggler"
          data-target="#navigation"
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
        <div
          className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
          id="navigation"
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <NavLink
              to="/home"
              activeClassName="active"
              className="lg:inline-flex  lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-gray-300 leading-4	 font-semibold"
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="active"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-gray-300 leading-4	 font-semibold"
            >
              <span>About</span>
            </NavLink>
            <NavLink
              to="/services"
              activeClassName="active"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-gray-300 leading-4	 font-semibold"
            >
              <span>Services</span>
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="active"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-gray-300 leading-4	 font-semibold"
            >
              <span>Contact Us</span>
            </NavLink>
            <h3 className="lg:inline-flex login lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-gray-300 leading-4	font-semibold">
              Hello
            </h3>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
