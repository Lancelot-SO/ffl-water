/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gallerybg from "../assets/gallery/gallery.png";
//fountain
import Image1 from "../assets/gallery/img1.jpg";
import Image2 from "../assets/gallery/img2.jpg";
import Image3 from "../assets/gallery/img3.jpg";
import Image4 from "../assets/gallery/img4.jpg";
import Image5 from "../assets/gallery/img5.jpg";
import Image6 from "../assets/gallery/img6.jpg";
import Image7 from "../assets/gallery/img7.jpg";
import Image8 from "../assets/gallery/img8.jpg";
import Image9 from "../assets/gallery/img9.jpg";
import Image10 from "../assets/gallery/img10.jpg";
import Image11 from "../assets/gallery/img11.jpg";
import Image12 from "../assets/gallery/img12.jpg";

//Pond
import Image13 from "../assets/gallery/img13.jpg";
import Image14 from "../assets/gallery/img14.jpg";
import Image15 from "../assets/gallery/img15.jpg";
import Image16 from "../assets/gallery/img16.jpg";
import Image17 from "../assets/gallery/img17.jpg";
import Image18 from "../assets/gallery/img18.jpg";
import Image19 from "../assets/gallery/img19.jpg";
import Image20 from "../assets/gallery/img20.jpg";
import Image21 from "../assets/gallery/img21.jpg";
import Image22 from "../assets/gallery/img22.jpg";
import Image23 from "../assets/gallery/img23.jpg";
import Image24 from "../assets/gallery/img24.jpg";

//stream
import Image25 from "../assets/gallery/img25.jpg";
import Image26 from "../assets/gallery/img26.jpg";
import Image27 from "../assets/gallery/img27.jpg";
import Image28 from "../assets/gallery/img28.jpg";
import Image29 from "../assets/gallery/img29.jpg";
import Image30 from "../assets/gallery/img30.jpg";
import Image31 from "../assets/gallery/img31.jpg";
import Image32 from "../assets/gallery/img32.jpg";
import Image33 from "../assets/gallery/img33.jpg";
import Image34 from "../assets/gallery/img34.jpg";
import Image35 from "../assets/gallery/img35.jpg";
import Image36 from "../assets/gallery/img36.jpg";

//others
import Image37 from "../assets/gallery/img37.jpg";
import Image38 from "../assets/gallery/img38.jpg";
import Image39 from "../assets/gallery/img39.jpg";
import Image40 from "../assets/gallery/img40.jpg";
import Image41 from "../assets/gallery/img41.jpg";
import Image42 from "../assets/gallery/img42.jpg";
import Image43 from "../assets/gallery/img43.jpg";
import Image44 from "../assets/gallery/img44.jpg";
import Image45 from "../assets/gallery/img45.jpg";
import Image46 from "../assets/gallery/img46.jpg";
import Image47 from "../assets/gallery/img47.jpg";
import Image48 from "../assets/gallery/img48.jpg";


const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState("Fountains");
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Image categories
    const categories = {
        Fountains: [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12],
        Ponds: [Image13, Image14, Image15, Image16, Image17, Image18, Image19, Image20, Image21, Image22, Image23, Image24],
        Streams: [Image25, Image26, Image27, Image28, Image29, Image30, Image31, Image32, Image33, Image34, Image35, Image36],
        Others: [Image37, Image38, Image39, Image40, Image41, Image42, Image43, Image44, Image45, Image46, Image47, Image48]
    };

    const images = categories[activeCategory];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="h-screen w-full relative flex flex-col">
            {/* Background Image */}
            <img src={gallerybg} alt="project" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Header Section */}
            <div className="absolute lg:top-[40%] top-[10%] lg:left-[200px] left-[43%] flex flex-col text-white">
                <h1 className="lg:text-[52px] text-[24px] font-bold">OUR GALLERY</h1>
                <div className="bg-white hidden lg:block w-16 h-2 mb-4"></div>
                <span className="text-[16px] hidden lg:block">All our artworks in one place</span>
            </div>

            {/* Gallery Grid with Smooth Slide Animation */}
            <div className="absolute top-[15%] lg:left-[600px] lg:w-[731px] lg:h-[500px] h-auto
                            bg-black/50 backdrop-blur-[5px] border border-white/20 
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
                        <motion.div className="relative w-full md:w-[80%] h-[80%] bg-white rounded-xl overflow-hidden">
                            <button
                                className="absolute top-4 right-4 text-white bg-black w-10 h-10 rounded-full"
                                onClick={() => setSelectedImage(null)}
                            >
                                X
                            </button>
                            <button
                                className="absolute top-1/2 left-4 text-white bg-black/50 px-3 py-2 rounded-full"
                                onClick={handlePrev}
                            >
                                <FaArrowLeft />
                            </button>
                            <button
                                className="absolute top-1/2 right-4 text-white bg-black/50 px-3 py-2 rounded-full"
                                onClick={handleNext}
                            >
                                <FaArrowRight />
                            </button>
                            <img
                                src={images[currentIndex]}
                                alt="Selected"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Gallery;
