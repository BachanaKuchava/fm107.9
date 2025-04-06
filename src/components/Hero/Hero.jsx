import React, { useState, useEffect } from "react";
import { FaStar, FaYoutube } from "react-icons/fa";
import HeroImg from "../../assets/dora-hero.png";
import HeroImg2 from "../../assets/dora.png";
import Fm from "../../assets/fm107.png";
import podcast1 from '../../assets/podcast1.png';
import podcast2 from '../../assets/podcastFM.png';
import HeroBottom from "./HeroBottom";
import { IoClose } from "react-icons/io5";
import logo from '../../assets/logo.png';

const Hero = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [fade, setFade] = useState(true);
  const [currentReview, setCurrentReview] = useState(0);

  const handlePlay = () => {
    setIsPlay(!isPlay);
  };

  // Define three different review blocks
  const reviews = [
    {
      image: podcast2,
      rating: "4.7",
      text: "Bandai Figuartszero Doraemont",
    },
    {
      image: podcast1,
      rating: "4.8",
      text: "Amazing collectible Doraemon",
    },
    {
      image: HeroImg2,
      rating: "4.9",
      text: "Must have for every fan!",
    },
  ];

  // Function to handle review change with fade transition
  const changeReview = (updateFn) => {
    setFade(false);
    setTimeout(() => {
      setCurrentReview((prev) => updateFn(prev));
      setFade(true);
    }, 300); // Adjust this duration for a smoother effect if needed
  };

  const nextReview = () => {
    changeReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    changeReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto change review every 5 seconds with fade transition
  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="min-h-[700px] relative flex items-center justify-center">
        <div className="container mx-auto px-4 mt-12 sm:mt-0 pb-20 sm:pb-0 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Text content */}
            <div className="space-y-3 md:space-y-7 flex flex-col justify-center text-center sm:text-left px-10 sm:px-0">
              <div data-aos="fade-up">
                <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold">
                  Watch Now in
                </h1>
                <h1 className="text-6xl font-bold text-primary">3D</h1>
              </div>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-gray-500 text-sm font-semibold"
              >
                The first full story in the Doraemon series was published in January 1970
              </p>
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="mx-auto sm:mx-0"
              >
                <button
                  onClick={handlePlay}
                  className="primary-btn flex items-center gap-2 cursor-pointer"
                >
                  Play on
                  <span>
                    <FaYoutube className="text-2xl" />
                  </span>
                </button>
              </div>
            </div>

            {/* Image section */}
            <div
              data-aos="zoom-in"
              className="relative flex items-center justify-center overflow-visible"
            >
              {/* Shadow element with z-index 0 */}
              <div className="absolute z-0 bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[80%] h-8 rounded-full bg-black/50 blur-3xl" />
              {/* FM Image with z-index 10 */}
              <img
                src={logo}
                alt="Hero"
                className="w-[300px] sm:w-[420px] lg:w-[520px] xl:w-[600px] max-w-full mx-auto relative z-10"
              />
            </div>

            {/* Review Slider Section */}
            <div
              data-aos="slide-left"
              className="sm:pl-16 md:pl-24 flex justify-center sm:justify-end items-center"
            >
              {/* Fixed-size container with fade transition */}
              <div
                className={`w-[240px] h-[200px] flex flex-col justify-center transition-opacity duration-300 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={reviews[currentReview].image}
                  alt="Review"
                  className="w-full h-[100px] object-cover rounded-xl shadow-md hover:scale-110 duration-200 cursor-pointer"
                />
                <div className="mt-2">
                  <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
                    {reviews[currentReview].rating}{" "}
                    <span>
                      <FaStar className="text-primary" />
                    </span>
                  </p>
                  <p className="text-sm text-gray-400 text-center">
                    {reviews[currentReview].text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with arrow controls */}
        <HeroBottom nextReview={nextReview} prevReview={prevReview} />
      </div>

      {/* Video Play section */}
      {isPlay && (
        <div className="absolute z-[99999] top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white m-3 p-5 rounded-lg shadow-md w-full sm:w-[500px]">
            <div className="pb-3 flex justify-between">
              <h1 className="sm:text-xl font-bold">
                Subscribe our TCJ youtube channel
              </h1>
              <IoClose
                className="text-3xl cursor-pointer hover:scale-110 duration-200"
                onClick={handlePlay}
              />
            </div>
            <iframe
              width="100%"
              height="260"
              src="https://www.youtube.com/embed/i9e9Xz4OHig?si=rZ_k0qUIcjUIPUH_"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
