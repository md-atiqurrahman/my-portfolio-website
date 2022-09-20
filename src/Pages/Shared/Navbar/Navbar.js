import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Navbar.css';
import img from '../../../images/Header/name logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
    const navbarItems = <>
        <li className='navbar-item'>
            <CustomLink as={Link} to='/'>
                <span className='text-primary'>01. </span>
                Home
            </CustomLink>
        </li>
        <li className='navbar-item'>
            <AnchorLink href='#about'>
                <span className='text-primary'>02. </span>
                About
            </AnchorLink>
        </li>
        <li className='navbar-item'>
            <AnchorLink href='#skills'>
                <span className='text-primary'>03. </span>
                Skills
            </AnchorLink>
        </li>
        <li className='navbar-item'>
            <AnchorLink href='#projects'>
                <span className='text-primary'>04. </span>
                Projects
            </AnchorLink>
        </li>
        <li className='navbar-item'>
            <AnchorLink href='#contacts'>
                <span className='text-primary'>05. </span>
                Contacts
            </AnchorLink>
        </li>
    </>

    return (
        <div className='header'>
            <div className="navbar bg-[#0b1224] pr-[54px] pl-[49px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn  btn-ghost mr-[5px] lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  w-52 text-white">
                            {navbarItems}
                        </ul>
                        <img className='w-auto max-h-full' src={img} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="navbar-items p-0 uppercase mt-[9px] text-white text-[14px] leading-[1.8] font-medium">
                        {navbarItems}
                    </ul>
                </div>
                <div className='navbar-end hidden lg:flex'>
                    <div className='hire-btn'>Hire me</div>
                </div>
                <div className="navbar-end flex lg:hidden">
                    <label htmlFor="dashboard-sidebar" tabIndex="1" className="btn btn-ghost  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;