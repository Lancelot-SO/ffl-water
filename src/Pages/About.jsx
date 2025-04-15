/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import aboutbg from "../assets/about/aboutbg.png";
import Slider from '../Components/Slider';
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';
import MainAbout from './MainAbout';

const About = () => {
    const [showDetails, setShowDetails] = useState(false); // Toggle state

    return (
        <div className="w-full h-screen relative overflow-hidden">
            <AnimatePresence mode="wait">
                {!showDetails ? (
                    <motion.div
                        key="about"
                        initial={{ x: 0, opacity: 1 }}
                        exit={{ x: "-100%", opacity: 0 }} // Slide out to left
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-full h-full"
                    >
                        <div className="relative w-full h-full">
                            <img src={aboutbg} alt="about"
                                loading='lazy'
                                className="absolute inset-0 object-cover w-full h-full" />

                            {/* Glass Container */}
                            <div className="absolute top-[20%] lg:left-[200px] lg:w-[1130px] lg:h-[410px] h-[1250px] md:h-[500px]
                                            bg-black/50 backdrop-blur-[5px] border border-white/20 
                                            shadow-lg rounded-xl flex lg:flex-row flex-col flex-shrink-0 gap-5  transition-all">

                                {/* Red Section */}
                                <div className="flex flex-col lg:w-[500px] h-full p-5 items-start justify-center">
                                    <h1 className="text-[30px] font-bold tracking-wider ">ABOUT US</h1>
                                    <p className="text-[18px] mb-5">
                                        At FFL Water Features, we take pride in delivering top-quality service, with a client portfolio that reflects our strong work ethic, precision, and attention to detail.
                                    </p>
                                    <button
                                        onClick={() => setShowDetails(true)} // Open MainAbout
                                        className="flex flex-row items-center justify-center gap-4 w-[161px] h-[48px] bg-white rounded-[11px] 
                                                text-[#2563EB] cursor-pointer shadow-lg"
                                    >
                                        <h3>See More</h3>
                                        <FaArrowRightLong />
                                    </button>
                                </div>

                                {/* Yellow Section (Fixed Position) */}
                                <div className="flex lg:w-[610px] h-full">
                                    <Slider />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="mainAbout"
                        initial={{ x: "100%", opacity: 0 }} // Start from right
                        animate={{ x: 0, opacity: 1 }} // Slide in fully
                        exit={{ x: "100%", opacity: 0 }} // Slide out when switching back
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-full h-full"
                    >
                        <MainAbout />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default About;
