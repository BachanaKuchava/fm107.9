import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

function News() {
  // Use your provided dummy image URL for all images
  const dummyImage = "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/10/breaking-news-template-5-1697245577.jpg";

  useEffect(() => {
    // Initialize Splide for the slider news section
    const splide = new Splide("#post-carousel", {
      rewind: true,
      perPage: 3,
      gap: 32,
    });
    splide.mount();
  }, []);

  return (
    <main id="content">
      {/* HERO BIG GRID SECTION (Reverted to Original) */}
      <div className="bg-white py-6">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            {/* Left: Featured Cover */}
            <div className="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
              <div className="relative hover-img max-h-98 overflow-hidden">
                <a href="#">
                  <img
                    className="max-w-full w-full mx-auto h-auto"
                    src={dummyImage}
                    alt="Cover"
                  />
                </a>
                <div className="absolute bottom-0 w-full px-5 pt-8 pb-5 bg-gradient-cover">
                  <a href="#">
                    <h2 className="text-3xl font-bold capitalize text-white mb-3">
                      Amazon Shoppers Are Ditching Designer Belts for This Best-Selling
                    </h2>
                  </a>
                  <p className="text-gray-100 hidden sm:inline-block">
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                  </p>
                  <div className="pt-2">
                    <div className="flex items-center text-gray-100">
                      <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                      Europe
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Box News Grid */}
            <div className="flex-shrink max-w-full w-full lg:w-1/2">
              <div className="box-one flex flex-row flex-wrap">
                {["Image 2", "Image 3", "Image 4", "Image 5"].map((text, idx) => (
                  <article
                    key={idx}
                    className="flex-shrink max-w-full w-full sm:w-1/2"
                  >
                    <div className="relative hover-img max-h-48 overflow-hidden">
                      <a href="#">
                        <img
                          className="max-w-full w-full mx-auto h-auto"
                          src={dummyImage}
                          alt={`Dummy ${text}`}
                        />
                      </a>
                      <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                        <a href="#">
                          <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">
                            {text} headline goes here
                          </h2>
                        </a>
                        <div className="pt-1">
                          <div className="flex items-center text-gray-100">
                            <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                            Techno
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK NEWS SECTION (Reverted to Original) */}
      <div className="bg-white py-6">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            {/* Left: Latest News Grid */}
            <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
              <div className="w-full py-3">
                <h2 className="text-gray-800 text-2xl font-bold">
                  <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                  Europe
                </h2>
              </div>
              <div className="flex flex-row flex-wrap -mx-3">
                {["News 1", "News 2", "News 3", "News 4"].map((news, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100"
                  >
                    <div className="flex flex-row sm:block hover-img">
                      <a href="#">
                        <img
                          className="max-w-full w-full mx-auto"
                          src={dummyImage}
                          alt={`News ${idx + 1}`}
                        />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                          <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                        </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">
                          This is a wider card with supporting text below as a natural lead-in to additional content.
                        </p>
                        <a className="text-gray-500" href="#">
                          <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                          Europe
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: Sidebar */}
            <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
              <div className="w-full bg-gray-50">
                <div className="text-sm py-6 sticky">
                  <div className="w-full text-center">
                    <a className="uppercase" href="#">Advertisement</a>
                    <a href="#">
                      <img className="mx-auto" src={dummyImage} alt="Advertisement" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SLIDER NEWS SECTION (Keep as is) */}
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
              {/* Splide Carousel for Slider News */}
              <div id="post-carousel" className="splide post-carousel">
                <div className="splide__track">
                  <ul className="splide__list">
                    {["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"].map((slide, idx) => (
                      <li key={idx} className="splide__slide">
                        <div className="pb-3">
                          <div className="hover-img bg-white rounded-lg overflow-hidden">
                            <a href="#">
                              <img
                                className="w-full object-cover"
                                src={dummyImage}
                                alt={`Slide ${idx + 1}`}
                              />
                            </a>
                            <div className="py-3 px-6">
                              <h3 className="text-lg font-bold leading-tight mb-2">
                                <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                              </h3>
                              <a className="text-gray-500" href="#">
                                <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                                Europe
                              </a>
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

      {/* BLOCK NEWS SECTION (e.g. Africa) */}
      <div className="bg-gray-50 py-6">
        <div className="container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            {/* Left: Section Header & Grid */}
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
                      <a href="#">
                        <img
                          className="w-full object-cover"
                          src={dummyImage}
                          alt={`News ${idx + 1}`}
                        />
                      </a>
                      <div className="pt-3 pl-3">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                          <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                        </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">
                          This is a wider card with supporting text below as a natural lead-in to additional content.
                        </p>
                        <a className="text-gray-500" href="#">
                          <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                          Europe
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 lg:pl-8">
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
                        <a className="text-lg font-bold px-6 py-3 flex items-center" href="#">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-sm py-6 sticky top-8">
                <div className="text-center">
                  <a className="uppercase text-base" href="#">Advertisement</a>
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
