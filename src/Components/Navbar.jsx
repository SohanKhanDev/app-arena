import React from "react";
import logo from "../assets/logo.png";
import git from "../assets/git.png";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-4 sm:px-6 md:px-10 lg:px-20 interFont">
        {/* nav start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/applications"}>Apps</Link>
              </li>
              <li>
                <Link to={"/installedApp"}>Installation</Link>
              </li>
            </ul>
          </div>

          <Link to={"/"} className="flex items-center gap-1 m">
            <img src={logo} alt="" className="w-[40px] h-[40px]" />
            <h1 className="font-bold text-base bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              APP ARENA
            </h1>
          </Link>
        </div>

        {/* nav mid */}
        <div className="navbar-center hidden lg:flex font-medium text-base">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/applications"}>Apps</Link>
            </li>
            <li>
              <Link to={"/installedApp"}>Installation</Link>
            </li>
          </ul>
        </div>

        {/* nav end */}
        <div className="navbar-end">
          <Link
            to={"https://github.com/SohanKhanDev"}
            target="_blank"
            className="btn rounded-b-sm flex items-center gap-2 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
          >
            <img src={git} alt="" />
            <h1>Contribute</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
