import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Navbar.css";
import img from "../../../images/Header/name logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const navbarItems = (
    <>
      <li className="navbar-item">
        <CustomLink as={Link} to="/">
          <span className="text-black lg:text-primary">01. </span>
          Home
        </CustomLink>
      </li>
      <li className="navbar-item">
        <AnchorLink href="#about">
          <span className="text-black lg:text-primary">02. </span>
          About
        </AnchorLink>
      </li>
      <li className="navbar-item">
        <AnchorLink href="#skills">
          <span className="text-black lg:text-primary">03. </span>
          Skills
        </AnchorLink>
      </li>
      <li className="navbar-item">
        <AnchorLink href="#projects">
          <span className="text-black lg:text-primary">04. </span>
          Projects
        </AnchorLink>
      </li>
      <li className="navbar-item">
        <AnchorLink href="#contacts">
          <span className="text-black lg:text-primary">05. </span>
          Contacts
        </AnchorLink>
      </li>
    </>
  );

  return (
    <div className="header">
      <div className="navbar py-[16px] md:py-[10px] lg:py-[8px] bg-[#0b1224] pr-[20px] md:pr-[34px] lg:pr-[54px] pl-[20px] md:pl-[29px] lg:pl-[49px]">
        <div className="navbar-start w-full lg:w-[50%] flex justify-between items-center">
        <img className="w-auto max-h-full" src={img} alt="Atiqur" />
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-primary lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbarItems}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="navbar-items p-0 uppercase mt-[9px] text-white text-[14px] leading-[1.8] font-medium">
            {navbarItems}
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          <div className="hire-btn">Hire me</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
