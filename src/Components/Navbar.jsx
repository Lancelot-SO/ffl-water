/* eslint-disable no-unused-vars */
import React from 'react';
import "./Global.css";
import logo from "../assets/navbar/fflogo1.png";
import { FaBars } from 'react-icons/fa';
import cloud1 from "../assets/navbar/cloud1.png";
import cloud2 from "../assets/navbar/cloud2.png";
import cloud3 from "../assets/navbar/cloud3.png";

const Navbar = () => {
    return (
        <div>
            {/* Clouds */}
            <div className='relative'>
                <div className='flex absolute overflow-x-hidden w-full z-50'>
                    <img src={cloud1} alt='cloud' className='object-cover w-full h-full' />
                    <img src={cloud2} alt='cloud' className='object-cover w-full h-full' />
                    <img src={cloud3} alt='cloud' className='object-cover w-full h-full' />
                </div>

                {/* Fixed Navbar */}
                <nav className='navbar glass flex items-center justify-between lg:px-[200px] px-4'>
                    <img src={logo} alt='logo' className='object-cover h-16' />
                    <div className='w-8 h-8 rounded-full flex bg-white text-black items-center justify-center'>
                        <FaBars />
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
