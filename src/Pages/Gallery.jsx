/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gallerybg from "../assets/gallery/gallery.png";
import Image1 from "../assets/gallery/img1.jpg";
import Image2 from "../assets/gallery/img2.jpg";
import Image3 from "../assets/gallery/img3.jpg";
import Image4 from "../assets/gallery/img4.jpg";
import Image5 from "../assets/gallery/img5.jpg";
import Image6 from "../assets/gallery/img6.jpg";
import Image7 from "../assets/gallery/img7.jpg";
import Image8 from "../assets/gallery/img8.jpg";
import Image9 from "../assets/gallery/img9.jpg";

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState("Fountains");
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Image categories
    const categories = {
        Fountains: [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image1, Image2, Image3],
        Ponds: [Image4, Image5, Image6, Image7, Image8, Image9, Image1, Image2, Image3, Image1, Image2, Image3],
        Streams: [Image7, Image8, Image9, Image1, Image2, Image3, Image4, Image5, Image6, Image1, Image2, Image3],
        Others: [Image9, Image6, Image3, Image1, Image2, Image3, Image4, Image5, Image6, Image1, Image2, Image3]
    };

    const images = categories[activeCategory];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="h-screen w-full relative">
            {/* Background Image */}
            <img src={gallerybg} alt="project" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Header Section */}
            <div className="absolute top-[40%] left-[200px] flex flex-col text-white">
                <h1 className="text-[52px] font-bold">Our Gallery</h1>
                <div className="bg-white w-16 h-2 mb-4"></div>
                <span className="text-[16px]">All our artworks in one place</span>
            </div>

            {/* Gallery Grid with Smooth Slide Animation */}
            <div className="absolute top-[15%] lg:left-[600px] lg:w-[731px] lg:h-[500px] h-auto
                            bg-white/10 backdrop-blur-[5px] border border-white/20 
                            shadow-lg rounded-xl p-5 flex justify-center items-center transition-all overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full"
                    >
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="relative w-full h-24 md:h-28 lg:h-32 bg-gray-800 rounded-xl overflow-hidden cursor-pointer"
                                onClick={() => { setSelectedImage(image); setCurrentIndex(index); }}
                            >
                                <img
                                    src={image}
                                    alt={`Project ${index + 1}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Category Buttons with Smooth Transition */}
            <div className="w-[400px] h-[50px] absolute top-[80%] left-[750px]
                            bg-white/10 backdrop-blur-[5px] border border-white/20 
                            shadow-lg rounded-[34px] flex flex-shrink-0 gap-5 transition-all 
                            items-center justify-evenly p-2">
                {Object.keys(categories).map((category) => (
                    <motion.button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className={`px-3 py-2 rounded-[30px] transition-all 
                            ${activeCategory === category
                                ? `bg-white/10 backdrop-blur-[5px] border border-white/20 
                            shadow-lg rounded-[34px] flex flex-shrink-0 text-white`
                                : "text-gray-300"
                            }`}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>

            {/* Image Popup with Controls */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div className="relative w-[80%] h-[80%] bg-white rounded-xl overflow-hidden">
                            <button className="absolute top-4 right-4 text-white bg-black w-10 h-10 rounded-full" onClick={() => setSelectedImage(null)}>X</button>
                            <button className="absolute top-1/2 left-4 text-white bg-black/50 px-3 py-2 rounded-full" onClick={handlePrev}><FaArrowLeft /></button>
                            <button className="absolute top-1/2 right-4 text-white bg-black/50 px-3 py-2 rounded-full" onClick={handleNext}><FaArrowRight /></button>
                            <img src={images[currentIndex]} alt="Selected" loading="lazy" className="w-full h-full object-cover" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
