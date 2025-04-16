/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import About from './About';
import Projects from './Projects';
import Hero from '../Components/Hero';
import Gallery from './Gallery';
import Contact from './Contact';
import { motion, AnimatePresence } from 'framer-motion';
import "./Main.css";

const Home = () => {
    const [currentPage, setCurrentPage] = useState("hero");
    // Direction: 1 means forward (next page) while -1 means backward (previous page)
    const [direction, setDirection] = useState(1);

    // Variants based on the direction:
    // - When moving forward (direction > 0):
    //    initial: page comes from 100px (below screen)
    //    exit: page leaves upward (-100px)
    // - When moving back (direction < 0):
    //    initial: page comes from -100px (above screen)
    //    exit: page leaves downward (+100px)
    const variants = {
        initial: (direction) => ({
            opacity: 0,
            y: direction > 0 ? 100 : -100,
        }),
        animate: {
            opacity: 1,
            y: 0,
        },
        exit: (direction) => ({
            opacity: 0,
            y: direction > 0 ? -100 : 100,
        }),
    };

    // Function to go forward in the cycle (Hero → About → Projects → Gallery → Contact → Hero)
    const handleNextPage = () => {
        setDirection(1);
        setCurrentPage((prev) => {
            if (prev === "hero") return "about";
            if (prev === "about") return "projects";
            if (prev === "projects") return "gallery";
            if (prev === "gallery") return "contact";
            return "hero";
        });
    };

    // Function to go backward in the cycle; available only when not on the hero page.
    const handlePreviousPage = () => {
        setDirection(-1);
        setCurrentPage((prev) => {
            if (prev === "about") return "hero";
            if (prev === "projects") return "about";
            if (prev === "gallery") return "projects";
            if (prev === "contact") return "gallery";
            return prev;
        });
    };

    return (
        <div className="relative bg-black overflow-hidden w-screen h-screen flex justify-center items-center">
            {/* AnimatePresence will handle page transitions. The motion.div receives the "direction" custom prop */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentPage}
                    custom={direction}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
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

            {/* Next Page Button (Blue) */}
            <button
                onClick={handleNextPage}
                className="absolute transform lg:-translate-x-1/2 left-4 lg:left-[43%] bottom-0 lg:bottom-8 text-white bg-blue-500 px-6 py-3 rounded-full flex items-center hover:bg-blue-700 transition duration-300 scroll-button"
            >
                <MdOutlineKeyboardDoubleArrowDown
                    className={`text-2xl mr-2 animate-bounce transition-transform duration-300 ${currentPage === "contact" ? "rotate-180" : ""}`}
                />
                {currentPage === "hero"
                    ? "Go to About Us"
                    : currentPage === "about"
                        ? "Go to Projects"
                        : currentPage === "projects"
                            ? "Go to Gallery"
                            : currentPage === "gallery"
                                ? "Go to Contact"
                                : "Back to Home"}
            </button>

            {/* Back Button (Green) – Shown only when not on the hero (home) page */}
            {currentPage !== "hero" && (
                <button
                    onClick={handlePreviousPage}
                    className="absolute transform left-4 lg:left-[3%] top-24 lg:top-[90px] text-white bg-blue-500 px-6 py-3 rounded-full flex items-center hover:bg-blue-700 transition duration-300"
                >
                    <MdOutlineKeyboardDoubleArrowDown className="text-2xl mr-2 rotate-90" />
                    {currentPage === "about"
                        ? "Back to Home"
                        : currentPage === "projects"
                            ? "Back to About Us"
                            : currentPage === "gallery"
                                ? "Back to Projects"
                                : currentPage === "contact"
                                    ? "Back to Gallery"
                                    : ""}
                </button>
            )}
        </div>
    );
};

export default Home;
