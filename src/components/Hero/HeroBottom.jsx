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
      {/* Doraemon text section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full">
        <h1 className="text-6xl sm:text-[140px] md:text-[190px] text-center font-bold uppercase text-gray-300/25">
          FM 107.9
        </h1>
      </div>

      {/* Bottom section */}
      <div className="absolute bottom-0 right-0 w-full">
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-offset="0"
          className="container mx-auto grid grid-cols-1 sm:grid-cols-3 px-4 py-4"
        >
          {/* First column */}
          <div className="hidden sm:flex flex-col">
            <div className="font-semibold">
              <p className="text-gray-500">Kolkata</p>
              <p className="text-sm text-primary">India</p>
            </div>
            <div className="font-semibold">
              <p className="text-gray-500">26Jan, 2024</p>
            </div>
          </div>

          {/* Second column: Down Arrow */}
          <div className="flex justify-center items-center my-4 sm:my-0">
            <span
              className="cursor-pointer"
              onClick={scrollToFooter}
            >
              <FaArrowDown size={24} className="text-primary" />
            </span>
          </div>

          {/* Third column: Arrow Controls */}
          <div className="flex justify-center sm:justify-end mb-4">
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
        </div>
      </div>
    </>
  );
};

export default HeroBottom;
