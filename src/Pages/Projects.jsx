/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import projectbg from "../assets/project/projectbg.png";
import { motion, AnimatePresence } from "framer-motion";
import ProjectSlider from "../Components/ProjectSlider";

const Projects = () => {
    const [showSlider, setShowSlider] = useState(false); // Toggle ProjectSlider visibility

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }, // Stagger effect (each child appears after 0.3s)
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    };

    const sliderVariants = {
        hidden: { x: "100%", opacity: 0 }, // Start off-screen (right)
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    };

    return (
        <div>
            <div className="h-screen w-full relative">
                <img src={projectbg} alt="project" className="w-full h-full object-cover" />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute top-[40%] left-[200px] flex flex-col gap-4 text-white">
                    {/* Wrap all elements inside a motion.div to enable staggerChildren */}
                    <motion.div variants={containerVariants} initial="hidden" animate="visible">
                        <motion.h1 className="text-[52px] font-bold" variants={textVariants}>
                            Projects
                        </motion.h1>

                        <motion.span className="text-[25px] font-semibold" variants={textVariants}>
                            AT FFL WATER FEATURES
                        </motion.span>

                        <motion.p className="w-[900px] h-[168px]" variants={textVariants}>
                            At FFL Water Features, we are dedicated to upholding exceptional service standards and take immense
                            pride in our work. Our diverse client portfolio showcases our unique work ethic, meticulous attention to
                            detail, and commitment to precision. Are you looking to create a fountain, waterfall, pond, or any other
                            water feature in Accra or nearby areas? As the preferred pond builders, we prioritize your specific needs
                            and preferences. Together, we can transform your backyard into the garden of your dreams, evoking the
                            feelings you've always envisioned.
                        </motion.p>

                        {/* Slide-in Button */}
                        {!showSlider && (
                            <motion.button
                                onClick={() => setShowSlider(true)}
                                className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Projects
                            </motion.button>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Slide-in Project Slider */}
            <AnimatePresence>
                {showSlider && (
                    <motion.section
                        variants={sliderVariants}
                        initial="hidden"
                        animate="visible"
                        className="fixed top-0 right-0 w-full h-screen bg-white shadow-lg z-50"
                    >
                        <ProjectSlider />
                    </motion.section>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
