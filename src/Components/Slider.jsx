/* eslint-disable no-unused-vars */
import React, { useCallback, useRef, useState } from 'react'
import { gsap } from 'gsap'
import "./Slider.css"
import About1 from "../assets/about/about1.jpg"
import About2 from "../assets/about/about2.jpg"
import About3 from "../assets/about/about3.jpg"
import About4 from "../assets/about/about4.jpg"
import About5 from "../assets/about/about5.jpg"


const slidesData = [
    {
        id: 1,
        title: "Stream",
        imgSrc: About1,
    },
    {
        id: 2,
        title: "Pond",
        imgSrc: About2,
    },
    {
        id: 3,
        title: "fountains",
        imgSrc: About3,
    },
    {
        id: 4,
        title: "Ecosystem pond",
        imgSrc: About4,
    },
    {
        id: 5,
        title: "Concrete Pond",
        imgSrc: About5,
    }
]

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState();
    const slidesRef = useRef([]);
    const intervalRef = useRef(null);

    const removeActiveClasses = useCallback(() => {
        return new Promise((resolve) => {
            slidesRef.current.forEach((slide) => {
                gsap.killTweensOf(slide);
                gsap.to(slide, {
                    flex: 1,
                    ease: "none"
                });
            });
            setTimeout(() => resolve(), 100);
        });
    }, []);

    const setActiveSlide = useCallback(
        (index) => {
            removeActiveClasses().then(() => {
                const slide = slidesRef.current[index];
                gsap.to(slide, {
                    flex: 10,
                    duration: 2.5,
                    ease: "elastic.out(1, 0.3)",
                }
                );
                setCurrentSlide(index);
            });
        }, [removeActiveClasses]);
    return (
        <main className='slider'>
            {
                slidesData.map((slide, index) => (
                    <div key={slide.id} className={`slide ${index === currentSlide ? "active" : ""}`}
                        ref={(el) => (slidesRef.current[index] = el)}
                        onClick={() => {
                            setActiveSlide(index);
                        }}
                    >
                        <h1>{slide.title}</h1>
                        <img src={slide.imgSrc} alt={slide.title} loading='lazy' />
                    </div>
                ))
            }
        </main>
    )
}

export default Slider