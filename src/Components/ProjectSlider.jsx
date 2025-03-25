/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Projects.css';
import img1 from "../assets/pictureslider/hyde.jpg";
import img2 from "../assets/pictureslider/svr.jpg";
import img3 from "../assets/pictureslider/saltpond.jpg";
import img4 from "../assets/pictureslider/asr.jpg";
import frame from "../assets/project/blackframe.png";

const projects = [
    {
        image: img1,
        name: "THE HYDE - KITASI",
        author: "THE HYDE - KITASI",
        price: "$22,000",
        description: "Nestled in the Akwapim mountain range, The Hyde is a family countryside retreat designed for hosting loved ones in a serene, nature-filled escape. Overlooking the mountains, this tranquil space features a stunning ecosystem pond, lush gardens, a pool, and a spa, all crafted to rejuvenate visitors. It also serves as a personal art gallery for the owner, an avid art enthusiast, showcasing a collection of unique pieces.",
        details: [
            "Size: 22’ x 14’ pond with a 14’ stream",
            "Features: Signature Series 6000 Bio Falls & Signature Series 1000 Skimmer",
            "Pump: 8PN Tsurumi Pump",
            "Lighting: LED Lights",
            "Materials: Earthen pot, 24 tons of boulders",
            "Earthen pot 24 tons boulders",
            "Extras: Auto Dozer for ponds"
        ]
    },
    {
        image: img2,
        name: "THE SVR Restaurant",
        author: "THE SVR Restaurant",
        price: "$50,000",
        description: "A stunningly designed pond set in a peaceful retreat, The SVR Pond blends unique water features with lush greenery to create a serene escape. Built with a sustainable approach, this ecosystem pond enhances its surroundings while promoting natural balance.",
        details: [
            "Size: 20’ x 12’",
            "Features: Signature Series 5000 Bio Falls & Signature Series 800 Skimmer",
            "Signature Series 800 skimmer",
            "Pump: 6PN Tsurumi Pump",
            "Lighting: Underwater LED",
            "Enhancements: Decorative stones & aquatic plants"
        ]
    },
    {
        image: img3,
        name: "THE AKYEMFO POND",
        author: "THE AKYEMFO POND",
        price: "$70,000",
        description: "A beautifully crafted water feature seamlessly blending into its natural surroundings, The Akyemfo Pond enhances biodiversity while maintaining ecological balance. Designed with sustainable materials and a contemporary touch, it brings both beauty and harmony to the landscape.",
        details: [
            "Size: 18’ x 10’",
            "Filtration: Advanced system for clean, healthy water",
            "Circulation: Eco-friendly water flow technology",
            "Lighting: LED underwater illumination",
            "Design Elements: Natural stone edging for a seamless finish"
        ]
    },
    {
        image: img4,
        name: "THE ASR POND",
        author: "THE ASR POND",
        price: "$90,000",
        description: "A modern, seamlessly integrated pond that transforms any space into a peaceful oasis. With a cascading waterfall and flowing streams, The ASR Pond creates a soothing ambiance with both visual and auditory appeal.",
        details: [
            "Size: 25’ x 15’ with a waterfall",
            "Filtration: Signature Series 7000 Bio Falls & advanced skimmer system",
            "Pump: 10PN Tsurumi Pump",
            "Lighting: Integrated system for night-time ambiance",
            "Enhancements: Aquatic plants & a thriving fish habitat",
        ]
    }
];

const ProjectSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeAutoNext = 7000;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    useEffect(() => {
        const autoSlide = setInterval(nextSlide, timeAutoNext);
        return () => clearInterval(autoSlide);
    }, []);

    return (
        <div className="overflow-x-hidden relative">
            <div className="main-carousel">
                <img src={frame} alt='project' className='absolute top-32 z-40' />
                <div className='project-name absolute top-[300px] left-[180px] z-50'>
                    <ul className='flex flex-col'>
                        {projects.map((project, index) => (
                            <li
                                key={index}
                                className={`mb-2 transition-all duration-300 ${index === currentIndex ? "text-white font-bold scale-110" : "opacity-50"}`}>
                                {project.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="slide-list">
                    {projects.map((project, index) => (
                        <div key={index} className={`slide-item relative ${index === currentIndex ? "active" : ""}`}>
                            <img src={project.image} alt={project.name} loading='lazy' />
                            <div className="slide-content">
                                <div className="author">{project.author}</div>
                                <div className="description w-[300px] lg:w-[600px]">{project.description}</div>
                                <p className='font-bold'>Project Details:</p>
                                <ul className='project-details'>
                                    {project.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-[300px] right-[100px] w-[200px] h-[90px] bg-black/20 backdrop-blur-md rounded-xl shadow-lg border border-white/30 flex flex-col items-center justify-center z-50 p-4">
                    <small className="text-white uppercase text-xs tracking-wider">Starting from</small>
                    <span className="text-white text-3xl font-extrabold">{projects[currentIndex].price}</span>
                </div>

                <div className="thumbnail absolute lg:bottom-[50px] bottom-4 left-[50%]">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`item ${index === currentIndex ? "active" : ""}`}
                            onMouseEnter={() => setCurrentIndex(index)}
                        >
                            <img src={project.image} alt={`Thumbnail ${index + 1}`} loading='lazy' />
                            <div className="content">
                                <div className="title bg-black/50 text-[13px] ">{project.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="arrows">
                    <button onClick={prevSlide}>&lt;</button>
                    <button onClick={nextSlide}>&gt;</button>
                </div>
                <div className="time"></div>
            </div>
        </div>
    );
};

export default ProjectSlider;
