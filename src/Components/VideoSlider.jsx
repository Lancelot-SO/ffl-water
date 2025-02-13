/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './VideoSlider.css';
import video1 from "../assets/pictureslider/vid1.mp4";
import video2 from "../assets/pictureslider/vid2.mp4";
import video3 from "../assets/pictureslider/vid3.mp4";
import video4 from "../assets/pictureslider/vid4.mp4";
import cert from "../assets/pictureslider/caclogo.png";

const videos = [video1, video2, video3, video4];

const VideoSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeAutoNext = 7000;

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
                            <div className="content">
                                <div className="author">FFL WATER FEATURES</div>
                                <div className="title">We bring life to your space</div>
                                <div className="des w-[300px] lg:w-[600px]">
                                    Explore our extensive collection of water features tailored to suit every style and budget. From modern minimalist designs to classic rustic charm, we provide everything you need to bring your vision to life.
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
                                <div className="title">Fountains</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="arrows">
                    <button onClick={prevSlide}>&lt;</button>
                    <button onClick={nextSlide}>&gt;</button>
                </div>
            </div>
        </div>
    );
};

export default VideoSlider;
