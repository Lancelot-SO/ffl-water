/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import contactbg from "../assets/contact/contactbg.png";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.3, duration: 0.6 } })
};

const slideInVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
};

const Contact = () => {
    const [showForm, setShowForm] = useState(false);
    const [showSecondForm, setShowSecondForm] = useState(false);


    return (
        <div className='w-screen h-screen relative'>
            <img src={contactbg} alt='contact' loading='lazy' className='w-full h-full object-cover' />

            <div className='absolute w-full top-[350px] flex items-center justify-between text-white px-[200px]'>
                <div className='flex flex-col gap-6'>
                    <motion.div initial='hidden' animate='visible' custom={0} variants={fadeUpVariants}>
                        <h1 className='text-5xl font-bold mb-4'>Speak to us</h1>
                        <div className="bg-white w-16 h-2 mb-4"></div>
                        <p className='text-[12px] w-[250px] h-[50px]'>LOOKING FOR YOUR NEXT POND BUILDER? REACH OUT.</p>
                    </motion.div>
                    <motion.div initial='hidden' animate='visible' custom={1} variants={fadeUpVariants} className='flex flex-col gap-4'>
                        <p className='text-[15px] font-semibold w-[270px] h-[50px]'>LOOKING FOR YOUR NEXT POND BUILDER? REACH OUT.</p>
                        <motion.button
                            initial='hidden'
                            animate='visible'
                            custom={2}
                            variants={fadeUpVariants}
                            className='bg-blue-600 w-[121px] h-[32px] rounded text-white font-semibold hover:bg-blue-800 transition'
                            onClick={() => setShowForm(true)}
                        >
                            Call us
                        </motion.button>
                    </motion.div>
                </div>

                {/* Center Contact Section */}
                <motion.div
                    initial='hidden'
                    animate='visible'
                    custom={3}
                    variants={fadeUpVariants}
                    className='text-center w-[400px] border border-transparent border-y-0'
                    style={{ borderImage: "linear-gradient(to bottom, gray, white, gray) 1" }}
                >
                    <p className='text-xl font-semibold mb-2'>CONTACT</p>
                    <p>www.@ffwater.gmail.com</p>
                    <p>+233 542618595</p>
                    <div className='flex justify-center gap-4 mt-4'>
                        <FaLinkedin className='text-white text-2xl hover:text-[#f1683a] cursor-pointer' />
                        <FaTwitter className='text-white text-2xl hover:text-[#f1683a] cursor-pointer' />
                        <FaFacebook className='text-white text-2xl hover:text-[#f1683a] cursor-pointer' />
                    </div>
                </motion.div>

                {/* Right Consultant Section */}
                <motion.div initial='hidden' animate='visible' custom={4} variants={fadeUpVariants} className='text-right max-w-md'>
                    <p className='font-semibold text-[15px] mb-4'>CONSULTANT INFORMATION</p>
                    <p className='text-[12px] leading-relaxed w-[360px]'>
                        As part of our company policy, we have a commitment fee of GHC800 for every 50 Km travelled outside Accra, which must be paid before our design consultant will come to your home and together with their expertise and your input, design a custom water feature that works best for you and your landscape. The commitment fee will be credited to your final bill within the next three months after payment if the project commences.
                    </p>
                    <motion.button
                        initial='hidden'
                        animate='visible'
                        custom={5}
                        variants={fadeUpVariants}
                        className='bg-blue-600 px-6 py-2 mt-4 rounded text-white font-semibold hover:bg-blue-800 transition'
                        onClick={() => setShowSecondForm(true)}
                    >
                        Link us up
                    </motion.button>
                </motion.div>
            </div>

            {showForm && (
                <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={slideInVariants}
                    className='absolute top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-90 flex justify-center items-center'
                    onClick={() => setShowForm(false)}
                >
                    <div className='bg-[#1e293b] p-8 border-2 border-[#5882C1] rounded-lg shadow-lg w-[580px]' onClick={(e) => e.stopPropagation()}>
                        <div className='flex justify-between items-center mb-4'>
                            <h2 className='text-white text-2xl font-bold'>Looking for your next POND BUILDER? Reach Out.</h2>
                            <IoClose className='text-white text-2xl cursor-pointer' onClick={() => setShowForm(false)} />
                        </div>
                        <form className='grid grid-cols-2 w-[520px] gap-4'>
                            <label>Name<input type='text' className='w-full p-2 rounded text-black' /></label>
                            <label>How did you hear about us<input type='text' className='w-full p-2 rounded text-black' /></label>
                            <label>Budget<input type='number' className='w-full p-2 rounded text-black' /></label>
                            <label>City<input type='text' className='w-full p-2 rounded text-black' /></label>
                            <label>Email<input type='email' className='w-full p-2 rounded text-black' /></label>
                            <label>Specific Feature<input type='text' className='w-full p-2 rounded text-black' /></label>
                            <label>Address<input type='text' className='w-full p-2 rounded text-black' /></label>
                            <label>Date<input type='date' className='w-full p-2 rounded text-black' /></label>
                        </form>
                        <button className='bg-blue-600 w-[250px] p-2 mt-4 rounded text-white font-semibold hover:bg-blue-800 transition' onClick={() => setShowForm(false)}>Sign in</button>
                    </div>
                </motion.div>
            )}

            {showSecondForm && (
                <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={slideInVariants}
                    className='absolute top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-90 flex justify-center items-center'
                    onClick={() => setShowSecondForm(false)}
                >
                    <div className='bg-[#1e293b] border-2 border-[#5882C1] p-8 rounded-lg shadow-lg w-[580px]' onClick={(e) => e.stopPropagation()}>
                        <div className='flex justify-between items-center mb-4'>
                            <h2 className='text-white text-2xl font-bold'>Second Form</h2>
                            <IoClose className='text-white text-2xl cursor-pointer' onClick={() => setShowSecondForm(false)} />
                        </div>
                        <form className='grid grid-cols-2 w-[520px] gap-4'>
                            <label>Consultation date<input type='date' className='w-full p-2 rounded text-black' /></label>
                            <label>Preferred Time<input type='time' className='w-full p-2 rounded text-black' /></label>
                            <label>Cash<input type='number' className='w-full p-2 rounded text-black' /></label>
                            <label>Online<input type='text' className='w-full p-2 rounded text-black' /></label>
                        </form>
                        <button className='bg-blue-600 w-[250px] p-2 mt-4 rounded text-white font-semibold hover:bg-blue-800 transition' onClick={() => setShowSecondForm(false)}>Submit</button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Contact;
