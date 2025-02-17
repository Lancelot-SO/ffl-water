/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import About from './About';
import Projects from './Projects';
import Hero from '../Components/Hero';
import Gallery from './Gallery';
import Contact from './Contact';
import { motion, AnimatePresence } from 'framer-motion';
import "./Main.css";

const Home = () => {
    const [currentPage, setCurrentPage] = useState("hero"); // Track current section

    // Function to switch pages in a cycle (Hero → About → Projects → Gallery → Contact → Hero)
    const handleNextPage = () => {
        setCurrentPage((prev) => {
            if (prev === "hero") return "about";
            if (prev === "about") return "projects";
            if (prev === "projects") return "gallery";
            if (prev === "gallery") return "contact";
            return "hero";
        });
    };

    return (
        <div className="relative bg-black overflow-hidden w-screen h-screen flex justify-center items-center">
            {/* Transition Animation */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, y: 100 }}  // Start position (below screen)
                    animate={{ opacity: 1, y: 0 }}  // Slide into place
                    exit={{ opacity: 0, y: -100 }}  // Slide out (upwards)
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full h-full absolute"
                >
                    {currentPage === "hero" && <Hero />}
                    {currentPage === "about" && <About />}
                    {currentPage === "projects" && <Projects />}
                    {currentPage === "gallery" && <Gallery />}
                    {currentPage === "contact" && <Contact />}
                </motion.div>
            </AnimatePresence>

            {/* Scroll Button with Dynamic Arrow */}
            <button
                onClick={handleNextPage}
                className="absolute transform -translate-x-1/2 text-white bg-blue-500 px-6 py-3 rounded-full flex items-center 
                           hover:bg-blue-700 transition duration-300 scroll-button"
            >
                <MdOutlineKeyboardDoubleArrowDown
                    className={`text-2xl mr-2 animate-bounce transition-transform duration-300 ${currentPage === "contact" ? "rotate-180" : ""}`}
                />
                {currentPage === "hero" ? "Go to About" :
                    currentPage === "about" ? "Go to Projects" :
                        currentPage === "projects" ? "Go to Gallery" :
                            currentPage === "gallery" ? "Go to Contact" : "Back to Home"}
            </button>

            {/* Social Media Icons */}
            <div className="fixed bottom-10 left-10 z-50">
                <div className="space-x-4 flex gap-2">
                    <a href="#"><FaFacebook className="text-white text-xl hover:text-[#f1683a]" /></a>
                    <a href="#"><FaXTwitter className="text-white text-xl hover:text-[#f1683a]" /></a>
                    <a href="#"><FaLinkedin className="text-white text-xl hover:text-[#f1683a]" /></a>
                    <a href="#"><FaInstagram className="text-white text-xl hover:text-[#f1683a]" /></a>
                </div>
            </div>
        </div>
    );
};

export default Home;
