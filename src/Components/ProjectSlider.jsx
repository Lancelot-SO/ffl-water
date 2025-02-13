/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Projects.css';
import img1 from "../assets/pictureslider/ffl1.png";
import img2 from "../assets/pictureslider/ffl2.jpg";
import img3 from "../assets/pictureslider/ffl3.png";
import img4 from "../assets/pictureslider/ffl4.jpg";
import frame from "../assets/project/blackframe.png";

const projects = [
    {
        image: img1,
        name: "THE HYDE - KITASI",
        author: "THE HYDE - KITASI",
        price: "$22,000",
        description: "The Hyde, as its nicknamed is family countryside retreat where the family will host their friends and family. Located in the Akwapim mountain range, this serene ecosystem pond overlooks the mountains. It is also a place where the owner, an art enthusiast, will exhibit his various art pieces. The space seeks to rejuvenate any visitor through its lush garden, ecosystem pond, pool, and spa whilst allowing one to appreciate the hills of Aburi through large picturesque windows.",
        details: [
            "Pond size: 22’ x 14’ pond with a 14’ stream",
            "Signature Series 6000 Bio Falls",
            "Signature Series 1000 skimmer",
            "Pump: 8PN Tsurumi Pump",
            "Led Lights",
            "Earthen pot 24 tons boulders",
            "Auto dozer for ponds"
        ]
    },
    {
        image: img2,
        name: "THE SVR POND",
        author: "THE SVR POND",
        price: "$50,000",
        description: "A beautifully designed pond located in a tranquil space, offering a serene environment with unique water features and lush greenery. This project showcases a sustainable approach to ecosystem ponds.",
        details: [
            "Pond size: 20’ x 12’ pond",
            "Signature Series 5000 Bio Falls",
            "Signature Series 800 skimmer",
            "Pump: 6PN Tsurumi Pump",
            "Underwater LED lighting",
            "Decorative stones and aquatic plants"
        ]
    },
    {
        image: img3,
        name: "THE AKYEMFO POND",
        author: "THE AKYEMFO POND",
        price: "$70,000",
        description: "An aesthetically pleasing water feature integrated into a natural setting, enhancing biodiversity and promoting ecological balance. Designed with sustainable materials and a modern touch.",
        details: [
            "Pond size: 18’ x 10’ pond",
            "Advanced filtration system",
            "Eco-friendly water circulation",
            "LED underwater lighting",
            "Natural stone edging"
        ]
    },
    {
        image: img4,
        name: "THE ASR POND",
        author: "THE ASR POND",
        price: "$90,000",
        description: "A contemporary pond design that blends seamlessly with the landscape, providing an oasis of calm with stunning visual and auditory effects from its waterfall and streams.",
        details: [
            "Pond size: 25’ x 15’ pond with waterfall",
            "Signature Series 7000 Bio Falls",
            "Advanced skimmer system",
            "Pump: 10PN Tsurumi Pump",
            "Integrated lighting system",
            "Aquatic plants and fish habitat"
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
                                className={`mb-2 transition-all duration-300 ${index === currentIndex ? "text-white scale-110" : "opacity-50"}`}>
                                {project.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="slide-list">
                    {projects.map((project, index) => (
                        <div key={index} className={`slide-item ${index === currentIndex ? "active" : ""}`}>
                            <img src={project.image} alt={project.name} loading='lazy' />
                            <div className="slide-content">
                                <div className="author">{project.author}</div>
                                <div className="description w-[300px] lg:w-[600px]">{project.description}</div>
                                <ul className='project-details'>
                                    {project.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col p-2 absolute bottom-[300px] right-[100px] w-[200px] h-[90px] bg-white z-50'>
                    <small className='text-black'>Starting from</small>
                    <span className='text-black text-[40px] font-extrabold'>{projects[currentIndex].price}</span>
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
                                <div className="title">{project.name}</div>
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
