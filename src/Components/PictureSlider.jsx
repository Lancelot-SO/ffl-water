/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './PictureSlider.css';
import img1 from "../assets/pictureslider/ffl1.png";
import img2 from "../assets/pictureslider/ffl2.jpg";
import img3 from "../assets/pictureslider/ffl3.png";
import img4 from "../assets/pictureslider/ffl4.jpg";
import cert from "../assets/pictureslider/caclogo.png";

const images = [img1, img2, img3, img4];
const thumbnailNames = ["Fountains", "Streams", "Ponds", "Waterfalls"]; // Array for thumbnail names

const PictureSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeAutoNext = 7000;

    // Function to handle next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to handle previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Auto slide effect (without unnecessary re-renders)
    useEffect(() => {
        const autoSlide = setInterval(nextSlide, timeAutoNext);
        return () => clearInterval(autoSlide);
    }, []); // Keep this empty to prevent unnecessary resets

    return (
        <div className="overflow-x-hidden relative">

            <div className="carousel">
                {/* List of slides */}
                <div className="list">
                    {images.map((img, index) => (
                        <div key={index} className={`item ${index === currentIndex ? "active" : ""}`}>
                            <img src={img} alt={`Slide ${index + 1}`} loading='lazy' />
                            <div className="content">
                                <div className="author">FFL WATER FEATURES</div>
                                <div className="title">We put water life into your space</div>
                                <div className="des w-[300px] lg:w-[600px]">
                                    Explore our extensive collection of water features tailored to suit every style and budget. From modern minimalist designs to classic rustic charm, we provide everything you need to bring your vision to life.
                                </div>
                                <div className="flex items-center lg:p-4 p-0 w-full max-w-md">
                                    {/* Left Content */}
                                    <div className="text-white text-lg font-semibold">
                                        Certified by Aquascape
                                    </div>

                                    {/* Divider */}
                                    <div className="h-8 w-[1px] bg-white mx-4"></div>

                                    {/* Badge */}
                                    <div>
                                        <img
                                            src={cert}
                                            alt="Aquascape Certified Badge"
                                            className="w-16 h-16 object-contain"
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
                            onMouseEnter={() => setCurrentIndex(index)} // Change slide on hover
                        >
                            <img src={img} alt={`Thumbnail ${index + 1}`} loading='lazy' />
                            <div className="content">
                                <div className="title">{thumbnailNames[index]}</div> {/* Dynamic names */}
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
            </div>
        </div>
    );
};

export default PictureSlider;
