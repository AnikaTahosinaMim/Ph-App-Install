import React from "react";
import navImg from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import CommonNav from "./CommonNav";

const Navbar = () => {
  return (
    <div>
      {/* <h2>Footer</h2> */}
      <nav className=" bg-white shadow-lg sticky top-0">
        <div className="flex justify-between items-center gap-3  py-3 container mx-auto">
          <div className="flex items-center">
            <img className="w-[50px]" src={navImg} alt="" />
            <h2>Hero.OI</h2>
          </div>
          <ul className="flex justify-between items-center gap-3">
            <li>
              <CommonNav to={"/"}>Home</CommonNav>
            </li>
            <li>
              <CommonNav to={"/app"}>Allapp</CommonNav>
            </li>
            <li>
              <CommonNav to={"/install"}>Instulation</CommonNav>
            </li>
            <li>
              <CommonNav to={"/dashboad"}>DashBoad</CommonNav>
            </li>
          </ul>
          <button className="btn bg-purple-600 text-white">
            <FaGithub></FaGithub> Contribute
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
