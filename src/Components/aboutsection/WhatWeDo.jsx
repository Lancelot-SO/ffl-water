/* eslint-disable no-unused-vars */
import React from "react";
import main1 from "../../assets/about/main1.png";

const WhatWeDo = () => {
    return (
        <div className="w-screen min-h-screen flex items-center justify-center bg-white px-6 md:px-[100px] lg:px-[200px] py-10">
            <div className="flex flex-col md:flex-row w-full max-w-[1300px] mx-auto h-full items-center">
                {/* Left - Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={main1}
                        alt="About Us"
                        className="w-full h-[300px] md:h-[500px] object-cover shadow-md rounded-lg"
                        loading="lazy"
                    />
                </div>

                {/* Right - Text Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-10 text-center md:text-left">
                    <h2 className="text-lg md:text-[35px] font-semibold leading-tight text-[#1C1F35]">
                        WHAT YOU NEED TO KNOW ABOUT US
                    </h2>
                    <p className="mt-4 text-[#666C89] text-sm md:text-[14px] leading-relaxed">
                        LFFL Water Features, incorporated in August 2020, is a wholly Ghanaian-owned company and an offshoot of Fin Fins Limited, incorporated in February 2016. Located in Dansoman, our core business is building water features of all sorts for both corporate institutions and private residents.
                    </p>
                    <p className="mt-4 text-[#666C89] text-sm md:text-[14px] leading-relaxed">
                        At FFL Water Features, we pride ourselves on providing and maintaining the highest standards of service. Our client portfolio is a testament to our unique work ethic, precision, and attention to detail. Having worked with world-class hospitality resorts, educational institutions, corporate organizations, and heads of state, we continue to uphold the highest standards of professionalism and customer-centered services.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;
