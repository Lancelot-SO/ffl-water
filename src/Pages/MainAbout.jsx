/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import aboutbanner from "../assets/about/aboutbanner.png"
import main1 from "../assets/about/main1.png"
import main2 from "../assets/about/main2.jpg"
import main3 from "../assets/about/main3.png"
import main4 from "../assets/about/main4.png"
import vector from "../assets/about/Vector 4.png"
import forest from "../assets/about/forest.png"
import logo from "../assets/navbar/fflogo.png"
import aboutlast from "../assets/about/aboutlast.png"
import mobile from "../assets/about/mobile.png"


import Team1 from "../assets/about/t1.png"
import { FaArrowDown, FaPhoneAlt } from 'react-icons/fa'
import { FaChevronDown, FaChevronRight, FaArrowUp } from 'react-icons/fa6'

const teamMembers = [
    {
        name: "Jessca Arow",
        role: "Designer",
        image: Team1
    },
    {
        name: "Kathleen Smith",
        role: "Designer",
        image: Team1
    },
    {
        name: "Rebecca Tylor",
        role: "Designer",
        image: Team1
    }
];


const MainAbout = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const sections = ["mainabout", "features", "forest", "cert", "team", "price", "faq"];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const scrollToSection = (index) => {
        const section = document.getElementById(sections[index]);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleScrollDown = () => {
        const nextIndex = (currentIndex + 1) % sections.length;
        setCurrentIndex(nextIndex);
        scrollToSection(nextIndex);
    };

    const handleScrollUp = () => {
        const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
        setCurrentIndex(prevIndex);
        scrollToSection(prevIndex);
    };

    return (
        <div>
            <section id='mainabout'>
                <div className="relative w-full h-screen">
                    {/* Background Image */}
                    <img
                        src={aboutbanner}
                        alt="about"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay Text */}
                    <div className="absolute top-1/2 left-10 lg:left-[200px] transform -translate-y-1/2">
                        <h1 className="font-bold text-[44px] text-white">
                            About Our Craft
                        </h1>
                    </div>
                </div>
            </section>

            <section id='features' className="w-full h-screen  items-center justify-center flex bg-white px-6 lg:px-[200px] py-10 lg:py-14">
                <div className="flex flex-col md:flex-row w-full max-w-[1100px] mx-auto">
                    {/* Left - Image */}
                    <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                        <img
                            src={main1}
                            alt="About Us"
                            className="w-full h-[250px] lg:h-[400px] object-cover shadow-sm rounded-lg"
                            loading="lazy"
                        />
                    </div>

                    {/* Right - Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center md:pl-10">
                        <h2 className="text-[30px] lg:w-[355px] w-full font-semibold leading-tight text-[#1C1F35]">
                            Who We Are
                        </h2>
                        <p className="mt-4 text-[#666C89] text-[16px] leading-relaxed">
                            FFL Water Features, established in August 2020, is a Ghanaian-owned company and a branch of Fin Fins Limited, founded in February 2016. Based in Dansoman, we specialize in designing and building water features for both corporate institutions and private residences.
                        </p>
                        <p className="mt-4 text-[#666C89] text-[16px] leading-relaxed">
                            We are committed to excellence, delivering top-tier craftsmanship and service.
                            Our portfolio showcases our dedication to quality, precision, and attention to detail. Having worked with world-class hospitality resorts, educational institutions, corporate organizations, and heads of state, we continue to set the standard for professionalism and customer-focused solutions.                        </p>
                    </div>
                </div>
            </section>

            <section id='forest'>
                <div className='w-full h-screen relative'>
                    <img src={forest} alt='forest'
                        loading='lazy'
                        className='w-full h-full object-cover' />
                    <div className='absolute top-[25%] lg:left-[200px] lg:w-[1130px] lg:h-[380px]
                                            bg-white/10 backdrop-blur-[5px] border border-white/20 
                                            shadow-lg rounded-xl p-6 flex flex-col flex-shrink-0 gap-5 transition-all'>
                        <h1 className='lg:text-[45px] text-[32px] leading-10 font-bold mb-14'>
                            "When life places stones in your path, be the water. A persistent drop of water will wear away even the hardest stone."
                        </h1>
                        <span className='text-[27px] font-light'>Nikoe Gavu</span>

                        <div className='absolute bottom-4 right-10'>
                            <img src={logo} alt='logo'
                                loading='lazy'
                                className='object-cover' />
                        </div>

                    </div>
                </div>
            </section>
            <section id='cert' className='h-screen bg-[#E3F7FC]'>
                <div className='relative w-full flex flex-col'>
                    {/* Background Image */}
                    <img
                        src={main2}
                        alt='about'
                        loading='lazy'
                        className='object-cover w-full lg:h-[400px] h-[500px] lg:absolute lg:inset-0'
                    />

                    <div className='flex lg:w-[800px] lg:h-[300px] lg:absolute lg:top-[340px] lg:left-[350px] bg-white mt-10'>
                        <div className='flex lg:flex-row flex-col-reverse'>
                            <img
                                src={main3}
                                alt='about'
                                loading='lazy'
                                className='object-cover w-full h-full lg:absolute lg:inset-0'
                            />
                            <div className='lg:absolute lg:inset-0 w-full flex'>
                                <div className='flex flex-col flex-1 pl-6 py-4'>
                                    <h2 className='text-[27px] font-bold text-[#475569]'>Our Affiliations</h2>
                                    <p className='text-[#0F172A] w-[350px]'>
                                        We are proud members of the elite Certified Aquascape Contractors (CAC) group, the world’s largest network of pond builders. As the first and only Certified Aquascape Contractors in Africa, we have undergone extensive training in pond construction and business management through Aquascape Inc. in the USA, ensuring top-tier expertise in every project we undertake.
                                    </p>
                                </div>
                                <div className='hidden md:flex lg:flex flex-1'>
                                    <img
                                        src={main4}
                                        alt='main'
                                        loading='lazy'
                                        className='object-cover'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id='team' className="bg-white lg:px-[200px] px-4 lg:h-screen h-[1750px]">
                <div className="w-full max-w-[1100px] mx-auto text-center p-8 rounded-lg mt-8">
                    <h2 className="text-3xl font-bold text-gray-900 mt-[80px] mb-5">Meet The Team</h2>

                    {/* Using Grid Instead of Flex for Responsive Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index}
                                className="relative lg:h-[500px] bg-white rounded-lg shadow-lg overflow-hidden mx-auto">

                                {/* Team Member Image */}
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />

                                {/* Vector Image */}
                                <div className="absolute top-[330px] h-[72px] w-full">
                                    <img src={vector} alt="vector"
                                        loading="lazy"
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                {/* Overlaying Text */}
                                <div className="absolute bottom-0 left-0 w-full h-[100px] bg-[#1C1F35] text-white p-4 flex flex-col">
                                    <h3 className="text-lg font-semibold text-left mt-6">{member.name}</h3>
                                    <p className="text-sm text-left">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section id="price" className="hidden h-screen md:mt-5 flex justify-center items-center bg-white">
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-2xl font-semibold text-black mb-6">Pricing</h2>
                    <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
                        {/* Basic Plan */}
                        <div className="p-6 h-full shadow-lg bg-[#F4F4F4] flex flex-col justify-between transform transition-transform duration-300 hover:scale-105">
                            <div className="flex flex-col items-center">
                                <h3 className="text-lg font-bold text-black text-center">Basic</h3>
                                <p className="text-[70px] font-medium text-black text-center mt-2">$329</p>
                            </div>
                            <ul className="flex-grow mt-4 space-y-4 text-center">
                                <li className="border-b pb-6 text-black">Offers</li>
                                <li className="border-b pb-6 text-black">Offers</li>
                                <li className="border-b pb-6 text-black">Offers</li>
                                <li className="border-b pb-6 text-black">Offers</li>
                            </ul>
                            <button className="w-full py-3 text-white bg-blue-900">Choose Plan</button>
                        </div>

                        {/* Standard Plan (Highlighted) */}
                        <div className="p-6 h-full shadow-lg bg-[#091242] flex flex-col justify-between transform transition-transform duration-300 hover:scale-105">
                            <div className="flex flex-col items-center">
                                <h3 className="text-lg font-bold text-white text-center">Standard</h3>
                                <p className="text-[70px] font-medium text-white text-center mt-2">$459</p>
                            </div>
                            <ul className="flex-grow mt-4 space-y-4 text-center text-white">
                                <li className="border-b pb-6">Offers</li>
                                <li className="border-b pb-6">Full Insurance</li>
                                <li className="border-b pb-6">500 Km</li>
                                <li className="border-b pb-6">Real-time rate shopping</li>
                            </ul>
                            <button
                                className="w-full py-3 text-black"
                                style={{ background: "linear-gradient(to right, #E2A60F, #FFD7A6)" }}
                            >
                                Choose Plan
                            </button>
                        </div>

                        {/* Premium Plan */}
                        <div className="p-6 h-full shadow-lg bg-[#F4F4F4] flex flex-col justify-between transform transition-transform duration-300 hover:scale-105">
                            <div className="flex flex-col items-center">
                                <h3 className="text-lg font-bold text-black text-center">Premium</h3>
                                <p className="text-[70px] font-medium text-black text-center mt-2">$489</p>
                            </div>
                            <ul className="flex-grow mt-4 space-y-4 text-center">
                                <li className="border-b pb-6 text-black">Double Truck</li>
                                <li className="border-b pb-6 text-black">Full Insurance</li>
                                <li className="border-b pb-6 text-black">Unlimited</li>
                                <li className="border-b pb-6 text-black">Real-time rate shopping</li>
                            </ul>
                            <button className="w-full py-3 text-white bg-blue-900">Choose Plan</button>
                        </div>
                    </div>
                </div>
            </section>


            <section id='faq' className="h-screen flex relative">
                <div className='absolute top-[150px] flex w-full h-[400px] bg-[#F4F4F4]'>
                    <div className='flex flex-1'>
                        {/* FAQ Section */}
                        <div className="w-full flex justify-end py-8">
                            <div className="max-w-[500px] w-full px-6">
                                <h2 className="text-3xl font-bold text-[#1A1B3A] mb-8 text-left">
                                    Frequently Asked Questions
                                </h2>
                                <div className="space-y-4 w-full">
                                    {[
                                        {
                                            question: "How can I pay for your Pond services?",
                                            answer:
                                                "You can pay using credit/debit cards, PayPal, or direct bank transfers. We also support cryptocurrency payments.",
                                        },
                                        {
                                            question: "What payment methods are supported?",
                                            answer:
                                                "We accept Visa, MasterCard, American Express, PayPal, and wire transfers.",
                                        },
                                        {
                                            question: "What options for FFL plans are available?",
                                            answer:
                                                "We provide multiple FFL plans, including basic, premium, and enterprise options.",
                                        },
                                        {
                                            question: "Can I specify a service date when booking?",
                                            answer:
                                                "Yes! During checkout, you can select a preferred service date based on availability.",
                                        },
                                    ].map((faq, index) => (
                                        <div
                                            key={index}
                                            className="border-b pb-4 cursor-pointer w-full max-w-[500px]"
                                            onClick={() => toggleFAQ(index)}
                                        >
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-lg font-semibold text-[#1A1B3A]">
                                                    {faq.question}
                                                </h3>
                                                {openIndex === index ? (
                                                    <FaChevronDown className="text-[#FFB629]" />
                                                ) : (
                                                    <FaChevronRight className="text-gray-500" />
                                                )}
                                            </div>
                                            {openIndex === index && (
                                                <p className="mt-2 text-gray-500 max-w-[600px]">
                                                    {faq.answer}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className='flex flex-1 items-center justify-end'>
                        <img src={mobile} alt='about'
                            loading='lazy'
                            className='w-[450px] h-full object-cover' />
                    </div>
                    <div className='absolute top-0 right-[250px]'>
                        {/* Call Us Box */}
                        <div className="w-full lg:w-[400px] mt-10 lg:mt-28">
                            <div className="bg-[#091242] text-white p-8 shadow-lg font-medium">
                                <h3 className="text-xl font-semibold mb-4">Have More Questions?
                                </h3>
                                <p className="text-lg font-medium">Call Us</p>
                                <div className="flex items-center gap-3 mt-3 ">
                                    <div className='flex items-center justify-center bg-[#2D3A7B] h-10 w-10 rounded-full border-white'>
                                        <FaPhoneAlt className="text-[#ffffff]" />
                                    </div>
                                    <span className="text-lg font-semibold">(00) 112 365 489</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-1'>
                    <img src={aboutlast} alt='about'
                        loading='lazy'
                        className='w-full h-full object-cover' />
                </div>
                <div className='flex flex-1 bg-white'>

                </div>
            </section>

            {/* Scroll Buttons */}
            <div className="fixed bottom-10 right-10 flex flex-col gap-4 z-50">
                <button
                    onClick={handleScrollUp}
                    className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition duration-300"
                >
                    <FaArrowUp size={20} />
                </button>
                <button
                    onClick={handleScrollDown}
                    className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition duration-300"
                >
                    <FaArrowDown size={20} />
                </button>
            </div>
        </div>
    )
}

export default MainAbout