import React, { useState } from "react";
import "./Header.css";
import "./HeaderQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  const [isClick, setIsCLick] = useState(false);
  const handleClick = () => {
    if (!isClick) {
      setIsCLick(true);
    } else {
      setIsCLick(false);
    }
  };
  return (
    <header>
      <nav className="flex items-center bg-yellow-500 p-3 flex-wrap md:px-14">
        <NavLink
          to="/"
          className="p-2 mr-4 inline-flex items-center brand-name"
        >
          <span className="text-3xl text-white italic font-bold tracking-wide">
            &nbsp;Knock <span className="text-gray-800">Knock</span>
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
              className="lg:inline-flex nav-link lg:w-auto w-full mx-3 py-2 rounded text-white items-center justify-center hover:text-gray-300 leading-4	 font-semibold"
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="active"
              className="lg:inline-flex nav-link lg:w-auto w-full mx-3 py-2 rounded text-white items-center justify-center hover:text-gray-300 leading-4	 font-semibold"
            >
              <span>About</span>
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="active"
              className="lg:inline-flex nav-link lg:w-auto w-full mx-3 py-2 rounded text-white items-center justify-center hover:text-gray-300 leading-4	 font-semibold"
            >
              <span>Contact Us</span>
            </NavLink>
            {user ? (
              <div
                onClick={handleClick}
                className="lg:inline-flex user-profile lg:w-auto w-full mx-3 py-2 rounded text-white items-center justify-center hover:text-gray-300 leading-4	 font-semibold"
              >
                {!user.photoURL ? (
                  <FontAwesomeIcon icon={faUserCircle} size="2x" />
                ) : (
                  <img
                    width="40"
                    className="rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                )}
                <ul className="dropdown" id={isClick ? "show" : "hide"}>
                  <li className="text-gray-800 font-semibold px-2 bg-yellow-400">
                    <FontAwesomeIcon icon={faUser} size="sm" />{" "}
                    {user.displayName}
                  </li>
                  <li>
                    <Link
                      to="/myOrders"
                      className="text-gray-800 font-semibold px-2"
                    >
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/manageOrders"
                      className="text-gray-800 font-semibold px-2"
                    >
                      Manage Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-800 font-semibold px-2"
                      to="/login"
                      onClick={logOut}
                    >
                      Log out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="lg:inline-flex lg:w-auto w-full mx-3 py-2 rounded text-white items-center justify-center hover:text-gray-300 leading-4	 font-semibold"
              >
                <span>Log in</span>
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
