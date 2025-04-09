import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

// Dummy image URL
const dummyImage =
  "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/10/breaking-news-template-5-1697245577.jpg";

// Dummy description text used in the hero block
const heroDescription =
  "This is a wider card with supporting text below as a natural lead-in to additional content.";

// Helper function to truncate text to maxLength characters
const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

// Description text used in Europe/Africa items
const descriptionText =
  "This is a wider card with supporting text below as a natural lead-in to additional content. This is a wider card with supporting text below as a natural lead-in to additional content.";

// Constant release date
const releaseDate = "06/04/2025";

function News() {
  // Initialize sliders (American slider & Mobile slider)
  useEffect(() => {
    // "American" slider (ID: post-carousel)
    const splideAmerican = new Splide("#post-carousel", {
      rewind: true,
      perPage: 3,
      gap: 32,
      autoplay: true,
      interval: 6000,
      pauseOnHover: true,
      breakpoints: {
        768: {
          perPage: 1,
          interval: 4000,
        },
      },
    });
    splideAmerican.mount();

    // Mobile slider for the Hero section (ID: mobile-slider)
    const mobileSplide = new Splide("#mobile-slider", {
      type: "loop",
      perPage: 1,
      gap: 16,
      autoplay: true,
      interval: 4000,
      pauseOnHover: true,
    });
    mobileSplide.mount();
  }, []);

  return (
    <main id="content">
      {/* HERO BIG GRID SECTION */}
      <div className="bg-white py-6">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Left: Featured Cover (Big Image with text below) */}
            <div className="w-full lg:w-1/2">
              <div className="hover-img overflow-hidden">
                <Link to="/NewsInner">
                  <img
                    className="w-full h-96 object-cover"
                    src={dummyImage}
                    alt="Cover"
                  />
                </Link>
              </div>
              <div className="px-5 py-3">
                <Link to="/NewsInner">
                  <h2 className="text-3xl font-bold capitalize text-gray-800 mb-2">
                    Amazon Shoppers Are Ditching Designer Belts for This Best-Selling
                  </h2>
                </Link>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>{releaseDate}</span>
                </div>
                <p className="text-gray-600 mb-2">{heroDescription}</p>
                <div className="flex items-center text-gray-500">
                  <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                  Europe
                </div>
              </div>
            </div>

            {/* Right: Desktop Grid Version (4 Smaller Images) */}
            <div className="hidden lg:block w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-2">
                {["Image 2", "Image 3", "Image 4", "Image 5"].map((text, idx) => (
                  <article key={idx} className="hover-img overflow-hidden">
                    <Link to="/NewsInner">
                      <img
                        className="w-full h-36 object-cover"
                        src={dummyImage}
                        alt={`Dummy ${text}`}
                      />
                    </Link>
                    <div className="px-2 py-2">
                      <Link to="/NewsInner">
                        <h2 className="text-lg font-bold capitalize text-gray-800 mb-1">
                          {text} headline goes here
                        </h2>
                      </Link>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span>{releaseDate}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">{heroDescription}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                        Techno
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Mobile Slider Version (4 Smaller Images) */}
            <div className="block lg:hidden w-full mt-4">
              <div id="mobile-slider" className="splide">
                <div className="splide__track">
                  <ul className="splide__list">
                    {["Image 2", "Image 3", "Image 4", "Image 5"].map((text, idx) => (
                      <li key={idx} className="splide__slide">
                        <div className="hover-img overflow-hidden">
                          <Link to="/NewsInner">
                            <img
                              className="w-full h-36 object-cover"
                              src={dummyImage}
                              alt={`Dummy ${text}`}
                            />
                          </Link>
                        </div>
                        <div className="px-2 py-2">
                          <Link to="/NewsInner">
                            <h2 className="text-lg font-bold capitalize text-gray-800 mb-1">
                              {text} headline goes here
                            </h2>
                          </Link>
                          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            <span>{releaseDate}</span>
                          </div>
                          <p className="text-gray-600 text-sm mb-1">{heroDescription}</p>
                          <div className="flex items-center text-gray-500 text-sm">
                            <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                            Techno
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK NEWS SECTION (Europe) */}
      <div className="bg-white py-6">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            {/* Left: Europe's Latest News */}
            <div className="w-full lg:w-2/3">
              <div className="py-3">
                <h2 className="text-2xl font-bold text-gray-800">
                  <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                  Europe
                </h2>
              </div>

              {/* Desktop Version: Grid Layout (4 items) */}
              <div className="hidden lg:block">
                <div className="flex flex-row flex-wrap -mx-3">
                  {["News 1", "News 2", "News 3", "News 4"].map((news, idx) => (
                    <div
                      key={idx}
                      className="w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 border-dotted border-gray-100"
                    >
                      <div className="hover-img">
                        <Link to="/NewsInner">
                          <img
                            className="w-full object-cover"
                            src={dummyImage}
                            alt={`News ${idx + 1}`}
                          />
                        </Link>
                        <div className="px-3 py-2">
                          <h3 className="text-lg font-bold leading-tight mb-1">
                            <Link to="/NewsInner">
                              5 Tips to Save Money Booking Your Next Hotel Room
                            </Link>
                          </h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            <span>{releaseDate}</span>
                          </div>
                          <p className="text-sm text-gray-600">
                            {truncateText(descriptionText, 100)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Version: Vertical List */}
              <div className="block lg:hidden">
                <div className="flex flex-col space-y-6">
                  {["News 1", "News 2", "News 3", "News 4"].map((news, idx) => (
                    <div key={idx} className="flex space-x-4 border-b pb-4">
                      <div className="w-24 h-24 flex-shrink-0">
                        <Link to="/NewsInner">
                          <img
                            className="w-full h-full object-cover rounded"
                            src={dummyImage}
                            alt={`News ${idx + 1}`}
                          />
                        </Link>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          <span>{releaseDate}</span>
                        </div>
                        <h3 className="text-lg font-bold line-clamp-2 mb-2">
                          <Link to="/NewsInner">
                            5 Tips to Save Money Booking Your Next Hotel Room
                          </Link>
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {truncateText(descriptionText, 100)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
              <div className="bg-gray-50 p-6">
                <div className="text-sm py-6 sticky">
                  <div className="text-center">
                    <a className="uppercase" href="#">
                      Advertisement
                    </a>
                    <a href="#">
                      <img className="mx-auto mt-4" src={dummyImage} alt="Advertisement" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SLIDER NEWS SECTION (American) */}
      <div
        className="relative bg-gray-50"
        style={{
          backgroundImage: `url(${dummyImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="bg-black bg-opacity-70">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col">
              <div className="py-4">
                <h2 className="text-white text-2xl font-bold text-shadow-black">
                  <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                  American
                </h2>
              </div>
              <div id="post-carousel" className="splide post-carousel">
                <div className="splide__track">
                  <ul className="splide__list">
                    {["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"].map((slide, idx) => (
                      <li key={idx} className="splide__slide">
                        <div className="pb-3">
                          <div className="hover-img bg-white rounded-lg overflow-hidden">
                            <Link to="/NewsInner">
                              <img
                                className="w-full object-cover"
                                src={dummyImage}
                                alt={`Slide ${idx + 1}`}
                              />
                            </Link>
                            <div className="py-3 px-6">
                              <h3 className="text-lg font-bold leading-tight mb-2">
                                <Link to="/NewsInner">
                                  5 Tips to Save Money Booking Your Next Hotel Room
                                </Link>
                              </h3>
                              <Link className="text-gray-500" to="/NewsInner">
                                <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                                Europe
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK NEWS SECTION (Africa) */}
      <div className="bg-gray-50 py-6">
        <div className="container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            {/* Africa News Grid */}
            <div className="flex-1">
              <div className="py-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                  Africa
                </h2>
              </div>
              <div className="flex flex-row flex-wrap -mx-3">
                {["News A", "News B", "News C", "News D"].map((news, idx) => (
                  <div
                    key={idx}
                    className="w-full sm:w-1/3 lg:w-1/4 px-3 py-4 border-b-2 border-dotted border-gray-100"
                  >
                    <div className="hover-img">
                      <Link to="/NewsInner">
                        <img
                          className="w-full object-cover"
                          src={dummyImage}
                          alt={`News ${idx + 1}`}
                        />
                      </Link>
                      <div className="pt-3 pl-3">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                          <Link to="/NewsInner">
                            5 Tips to Save Money Booking Your Next Hotel Room
                          </Link>
                        </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">
                          This is a wider card with supporting text below as a natural lead-in to additional content.
                        </p>
                        <Link className="text-gray-500" to="/NewsInner">
                          <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                          Europe
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Africa Sidebar */}
            <div className="w-full lg:w-1/3 lg:pl-8">
              <div className="bg-white p-6 rounded-lg">
                <div className="mb-6">
                  <div className="p-4 bg-gray-100">
                    <h2 className="text-lg font-bold">Most Popular</h2>
                  </div>
                  <ul className="post-number space-y-2">
                    {[
                      "Why the world would end without political polls",
                      "Meet The Man Who Designed The Ducati Monster",
                      "2020 Audi R8 Spyder spy shots release",
                      "Lamborghini makes Huracán GT3 racer faster for 2019",
                      "ZF plans $14 billion autonomous vehicle push, concept van",
                    ].map((item, idx) => (
                      <li key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                        <Link className="text-lg font-bold px-6 py-3 flex items-center" to="/NewsInner">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-sm py-6 sticky top-8">
                <div className="text-center">
                  <a className="uppercase text-base" href="#">
                    Advertisement
                  </a>
                  <a href="#">
                    <img className="mx-auto mt-4" src={dummyImage} alt="advertisement area" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default News;
