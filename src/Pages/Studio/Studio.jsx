import React, { useState, useEffect } from "react";
import { FaMicrophone, FaMusic, FaHeadphones } from "react-icons/fa";
import { MdGraphicEq } from "react-icons/md";

const sliderImageSrc = "https://wsdg.com/wp-content/uploads/ViennaCitySound-3-Control-Room-Side.jpg";

function Studio() {
  // Use the same slider image for each slide
  const sliderImages = [
    sliderImageSrc,
    sliderImageSrc,
    sliderImageSrc,
    sliderImageSrc,
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div className="studio-page">
      {/* Slider Section */}
      <div className="relative w-full h-80 overflow-hidden">
        {sliderImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-80 object-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl text-white font-bold">
            Welcome to Our Studio
          </h2>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary text-center mb-6">
          Our Studio Services
        </h1>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Whether you need a professional voice-over, cutting-edge sound engineering,
          innovative music production, or high-quality commercial recording, our studio
          offers creative solutions tailored to your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1: Voice Over */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-all duration-300">
            <FaMicrophone className="text-primary text-6xl mb-4" />
            <h2 className="text-2xl font-bold text-primary mb-2">Voice Over</h2>
            <p className="text-gray-600 text-center">
              Engage your audience with professional voice-over services for
              commercials, narrations, and animations.
            </p>
          </div>
          {/* Service 2: Sound Engineering */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-all duration-300">
            <MdGraphicEq className="text-primary text-6xl mb-4" />
            <h2 className="text-2xl font-bold text-primary mb-2">
              Sound Engineering
            </h2>
            <p className="text-gray-600 text-center">
              Capture pristine audio for live events and studio recordings with our
              expert sound engineering.
            </p>
          </div>
          {/* Service 3: Music Production */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-all duration-300">
            <FaMusic className="text-primary text-6xl mb-4" />
            <h2 className="text-2xl font-bold text-primary mb-2">
              Music Production
            </h2>
            <p className="text-gray-600 text-center">
              From initial composition to final mix, our music production services bring
              your musical vision to life.
            </p>
          </div>
          {/* Service 4: Commercial Recording */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-all duration-300">
            <FaHeadphones className="text-primary text-6xl mb-4" />
            <h2 className="text-2xl font-bold text-primary mb-2">
              Commercial Recording
            </h2>
            <p className="text-gray-600 text-center">
              Ensure your message is heard with high-quality recording services for
              commercials, podcasts, and digital media.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Interested in Our Services?
          </h2>
          <p className="text-center text-white mb-8 max-w-2xl mx-auto">
            If you’re looking to record sounds, produce music, or create compelling
            voice-overs, our studio is here to help you bring your creative vision
            to life. Get in touch with our expert team today!
          </p>
          <form className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-primary/80 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Studio;
