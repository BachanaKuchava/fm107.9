import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";

const HeroBottom = ({ prevReview, nextReview }) => {
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Background Text Section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full">
        <h1 className="text-6xl sm:text-[140px] md:text-[190px] text-center font-bold uppercase text-gray-300/25">
          FM 107.9
        </h1>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-4 right-0 w-full z-20">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-4">
          {/* Left Column (Location Info - visible on desktop) */}
          <div className="hidden sm:flex flex-col order-1">
            <div className="font-semibold">
              <p className="text-gray-500">Kolkata</p>
              <p className="text-sm text-primary">India</p>
            </div>
            <div className="font-semibold">
              <p className="text-gray-500">26Jan, 2024</p>
            </div>
          </div>

          {/* Slider Arrows */}
          <div className="flex justify-center items-center order-1 sm:order-3 mb-4 sm:mb-0">
            <div className="flex flex-row sm:flex-col gap-5">
              <div
                className="bg-white rounded-full p-2 shadow-md hover:scale-110 duration-200 cursor-pointer"
                onClick={prevReview}
              >
                <IoIosArrowBack className="text-primary" />
              </div>
              <div
                className="bg-primary rounded-full p-2 shadow-md hover:scale-110 duration-200 cursor-pointer"
                onClick={nextReview}
              >
                <IoIosArrowForward className="text-white" />
              </div>
            </div>
          </div>

          {/* Down Arrow (hidden on mobile) */}
          <div className="hidden md:flex justify-center items-center order-2">
            <span className="cursor-pointer" onClick={scrollToFooter}>
              <FaArrowDown size={24} className="text-black" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBottom;
