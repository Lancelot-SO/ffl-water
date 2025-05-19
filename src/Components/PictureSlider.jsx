/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './PictureSlider.css';
import img1 from "../assets/pictureslider/ffl1.png";
import img2 from "../assets/pictureslider/ffl2.png";
import img3 from "../assets/pictureslider/ffl3.png";
import img4 from "../assets/pictureslider/ffl4.png";
import cert from "../assets/pictureslider/caclogo.png";

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const images = [img3, img2, img1, img4];
const thumbnailNames = ["Fountains", "Streams", "Ponds", "Waterfalls"];
const descriptions = [
    "Add a touch of drama, elegance, or tranquility with a custom water fountain. Whether you want a bold statement piece or a serene accent, we’ve got you covered. From indoor to garden, sprouting to disappearing, we consult, install, and maintain so you can sit back and enjoy the flow.",
    "The gentle flow of water brings peace and movement to any space. Whether trickling into a pond or vanishing into a hidden feature, our custom streams create a serene, natural atmosphere. We handle design, installation, and maintenance, crafting one-of-a-kind water features that keep your home or business flowing effortlessly.",
    "We pride ourselves in our expert installation and maintenance of various ponds. We provide consultation services as well as installation and maintenance of various ponds such as; concrete ponds, ecosystem ponds, commercial and private fish ponds, pondless water features and ornamental decorative fish ponds. From tranquil backyard escapes to large commercial fish ponds, we create and care for stunning water features.",
    "Bring the beauty of a majestic waterfall to your space with our expert artificial waterfall installations. Whether indoors or outdoors, we create stunning, natural-looking waterfalls that transform any lawn, garden, or business into a serene retreat."
];

const PictureSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timeAutoNext = 10000;

    // Function to handle next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to handle previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Auto slide effect that only runs when not paused
    useEffect(() => {
        if (!isPaused) {
            const autoSlide = setInterval(nextSlide, timeAutoNext);
            return () => clearInterval(autoSlide);
        }
    }, [isPaused]); // Depend on isPaused to reset the effect

    return (
        <div className="overflow-x-hidden relative">
            <div className="carousel">
                {/* List of slides */}
                <div className="list">
                    {images.map((img, index) => (
                        <div key={index} className={`item ${index === currentIndex ? "active" : ""}`}>
                            <img src={img} alt={`Slide ${index + 1}`} loading="lazy" />
                            {/* <div className="absolute inset-0 z-30 bg-black bg-opacity-50 flex items-center justify-center"></div> */}
                            <div className="content bg-black/50 backdrop-blur-md rounded-xl p-4
                            + shadow-lg border-4 border-white/40 mr-4">
                                <div className="author">FFL WATER FEATURES</div>
                                <div className="title">Pouring Life Into Your Space</div>
                                <div className="des w-full lg:w-[570px] pr-5 lg:pr-0">
                                    {descriptions[index]}
                                </div>
                                <div className="flex items-center w-full lg:w-[600px] h-[100px] mt-4">
                                    {/* Left Content */}
                                    <div className="flex-2 text-white  text-lg font-semibold">
                                        Certified by Aquascape
                                    </div>
                                    {/* Divider */}
                                    <div className="h-8 w-[1px] bg-white mx-4"></div>
                                    {/* Badge */}
                                    <div className='lg:w-[100px] '>
                                        <img
                                            src={cert}
                                            alt="Aquascape Certified Badge"
                                            className="lg:w-full object-cover"
                                            loading='lazy'
                                        />
                                    </div>
                                </div>
                                <div className="cert"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Thumbnails */}
                <div className="thumbnail absolute lg:bottom-[50px] bottom-4 left-[50%]">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`item ${index === currentIndex ? "active" : ""}`}
                            onMouseEnter={() => setCurrentIndex(index)}
                            onClick={() => {
                                setCurrentIndex(index);
                                setIsPaused(true); // Pause auto slide when thumbnail is clicked
                            }}
                        >
                            <img src={img} alt={`Thumbnail ${index + 1}`} loading="lazy" />
                            <div className="content">
                                <div className="title">{thumbnailNames[index]}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="arrows">
                    <button onClick={prevSlide}>&lt;</button>
                    <button onClick={nextSlide}>&gt;</button>
                </div>

                {/* Timer */}
                <div className="time"></div>

                {/* Social Media Icons */}
                <div className="fixed lg:bottom-10 bottom-20 left-10 z-50">
                    <div className="space-x-4 flex gap-2">
                        <a href="#"><FaFacebook className="text-white text-xl hover:text-blue-600" /></a>
                        <a href="#"><FaXTwitter className="text-white text-xl hover:text-blue-600" /></a>
                        <a href="#"><FaLinkedin className="text-white text-xl hover:text-blue-600" /></a>
                        <a href="#"><FaInstagram className="text-white text-xl hover:text-blue-600" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PictureSlider;
