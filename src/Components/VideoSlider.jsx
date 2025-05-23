/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './VideoSlider.css';
import video1 from "../assets/pictureslider/vid1.mp4";
import video2 from "../assets/pictureslider/vid2.mp4";
import video3 from "../assets/pictureslider/vid3.mp4";
import video4 from "../assets/pictureslider/vid4.mp4";
import cert from "../assets/pictureslider/caclogo.png";

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const videos = [video1, video2, video3, video4];
const thumbnailNames = ["Fountains", "Streams", "Ponds", "Waterfalls"];
const descriptions = [
    "Add a touch of drama, elegance, or tranquility with a custom water fountain. Whether you want a bold statement piece or a serene accent, we’ve got you covered. From indoor to garden, sprouting to disappearing, we consult, install, and maintain so you can sit back and enjoy the flow.",
    "The gentle flow of water brings peace and movement to any space. Whether trickling into a pond or vanishing into a hidden feature, our custom streams create a serene, natural atmosphere. We handle design, installation, and maintenance, crafting one-of-a-kind water features that keep your home or business flowing effortlessly.",
    "We pride ourselves in our expert installation and maintenance of various ponds. We provide consultation services as well as installation and maintenance of various ponds such as; concrete ponds, ecosystem ponds, commercial and private fish ponds, pondless water features and ornamental decorative fish ponds. From tranquil backyard escapes to large commercial fish ponds, we create and care for stunning water features. Our expert team handles everything from consultation to installation and maintenance, ensuring your pond stays beautiful, functional and thriving for years.",
    "Bring the beauty of a majestic waterfall to your space with our expert artificial waterfall installations. Whether indoors or outdoors, we create stunning, natural-looking waterfalls that transform any lawn, garden, or business into a serene retreat."
];

const VideoSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeAutoNext = 10000;

    // Function to handle next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    // Function to handle previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    };

    // Auto slide effect (without unnecessary re-renders)
    useEffect(() => {
        const autoSlide = setInterval(nextSlide, timeAutoNext);
        return () => clearInterval(autoSlide);
    }, []); // Empty dependencies to prevent unnecessary resets

    return (
        <div className="overflow-x-hidden">
            <div className="carousel">
                {/* List of slides */}
                <div className="list">
                    {videos.map((video, index) => (
                        <div key={index} className={`item ${index === currentIndex ? "active" : ""}`}>
                            <video
                                src={video}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="video-slide object-cover"
                            />
                            <div className="content bg-black/50 backdrop-blur-md rounded-xl p-4
                            + shadow-lg border-4 border-white/30">
                                <div className="author">FFL WATER FEATURES</div>
                                <div className="title">We bring life to your space</div>
                                <div className="des w-full lg:w-[570px]">
                                    {descriptions[index]}
                                </div>
                                <div className="flex items-center p-4 w-full max-w-md">
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
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className={`item ${index === currentIndex ? "active" : ""}`}
                            onMouseEnter={() => setCurrentIndex(index)} // Change slide on hover
                        >
                            <video
                                src={video}
                                muted
                                playsInline
                                className="thumbnail-video"
                            />
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

                {/* Social Media Icons */}
                <div className="fixed lg:bottom-10 bottom-14 left-10 z-50">
                    <div className="space-x-4 flex gap-2">
                        <a href="#"><FaFacebook className="text-white text-xl hover:text-[#f1683a]" /></a>
                        <a href="#"><FaXTwitter className="text-white text-xl hover:text-[#f1683a]" /></a>
                        <a href="#"><FaLinkedin className="text-white text-xl hover:text-[#f1683a]" /></a>
                        <a href="#"><FaInstagram className="text-white text-xl hover:text-[#f1683a]" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSlider;
