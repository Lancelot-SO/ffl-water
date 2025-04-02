/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PictureSlider from './PictureSlider';
import VideoSlider from './VideoSlider'; // Corrected the import
import { FaImage, FaPlay } from 'react-icons/fa';

const Hero = () => {
    const [isVideoMode, setIsVideoMode] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleToggle = (mode) => {
        if (mode !== isVideoMode) {
            setIsTransitioning(true);
            setTimeout(() => {
                setIsVideoMode(mode);
                setIsTransitioning(false);
            }, 300);
        }
    };

    return (
        <div className="w-full h-screen relative"> {/* Ensure Hero is full screen */}
            {/* Content Area with Smooth Transition */}
            <div className={`w-full h-full transition-opacity duration-500 flex items-center justify-center ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                {isVideoMode ? <VideoSlider /> : <PictureSlider />}
            </div>

            {/* Vertical Toggle Icons (Now inside Hero, not fixed) */}
            <div className="absolute lg:top-1/2 top-[70%] left-4 lg:left-10 transform -translate-y-1/2 flex flex-col items-center space-y-2 md:space-y-4 z-50">
                <button onClick={() => handleToggle(false)} className={`p-2 md:p-3 rounded-full transition ${!isVideoMode ? 'bg-white text-black' : 'bg-gray-800 text-white'} shadow-md hover:bg-gray-100`}>
                    <FaImage size={16} className="md:size-[20px] text-[#f1683a]" />
                </button>
                <div className="w-[1px] h-12 md:h-16 bg-white"></div>
                <button onClick={() => handleToggle(true)} className={`p-2 md:p-3 rounded-full transition ${isVideoMode ? 'bg-white text-black' : 'bg-gray-800 text-white'} shadow-md hover:bg-gray-100`}>
                    <FaPlay size={16} className="md:size-[20px] text-[#f1683a]" />
                </button>
            </div>
        </div>
    );
};

export default Hero;
