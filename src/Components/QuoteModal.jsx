/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import { RiCloseLargeFill } from "react-icons/ri";
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function QuoteModal({ open, setOpen }) {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'YOUR_SERVICE_ID',     // e.g. 'service_xxx'
                'YOUR_TEMPLATE_ID',    // e.g. 'template_yyy'
                formRef.current,
                'YOUR_PUBLIC_KEY'      // e.g. 'user_zzz'
            )
            .then(() => {
                toast.success('Your request has been sent!');
                formRef.current.reset();
            })
            .catch(() => {
                toast.error('Something went wrong. Please try again.');
            });
    };

    if (!open) return null;

    return (
        <>
            <ToastContainer position="top-right" autoClose={5000} />

            <div
                className="fixed inset-0 z-[1000] bg-black/70 flex items-center justify-center"
                role="dialog"
                aria-modal="true"
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/50"
                    onClick={() => setOpen(false)}
                />

                {/* Panel */}
                <div className="relative bg-white rounded-lg shadow-lg w-full max-w-3xl mx-4 overflow-hidden">
                    {/* Close Button */}
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute top-[45%] md:top-4 right-4 text-gray-500 hover:text-gray-700"
                        aria-label="Close"
                    >
                        <RiCloseLargeFill />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Left side */}
                        <div className="bg-gradient-to-br from-green-500 to-green-900 p-8 text-white flex flex-col justify-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Join our community
                            </h2>
                            <p className="mb-6 opacity-90">
                                Sign up today and become part of our growing network of
                                professionals. Get access to exclusive resources, events, and
                                opportunities.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Access to premium content and resources",
                                    "Connect with industry professionals",
                                    "Early access to new features and updates",
                                ].map((text) => (
                                    <li key={text} className="flex items-start">
                                        <div className="flex-shrink-0 bg-white/20 p-1 rounded-full mt-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-4 h-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <p className="ml-3 text-sm">{text}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right side - Form */}
                        <div className="p-8">
                            <h3 className="text-2xl font-semibold mb-2">
                                Create an account
                            </h3>
                            <p className="text-gray-500 mb-6">
                                Fill out the form below to get started.
                            </p>
                            <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        id="name"
                                        name="user_name"
                                        type="text"
                                        placeholder="Enter your full name"
                                        required
                                        className="mt-1 block w-full border text-black border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-200"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="user_email"
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                        className="mt-1 block w-full border text-black border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-200"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Message (Optional)
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell us why you're interested"
                                        className="mt-1 block w-full border text-black border-gray-300 rounded-md p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-green-200"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-br from-green-500 to-green-900 text-white py-2 rounded-md transition"
                                >
                                    Send Quote Request
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
