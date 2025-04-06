import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

// Dummy show data (replace with your real data or API fetch)
const episodesData = [
  { 
    id: 1, 
    title: "Show 1: The Beginning", 
    description: "An introduction to our journey and the evolution of sound.",
    cover: "https://via.placeholder.com/400x200?text=Show+1"
  },
  { 
    id: 2, 
    title: "Show 2: Live on Air", 
    description: "Highlights and behind-the-scenes from our live radio show.",
    cover: "https://via.placeholder.com/400x200?text=Show+2"
  },
  { 
    id: 3, 
    title: "Show 3: Podcast Insights", 
    description: "A deep dive into the world of podcasts.",
    cover: "https://via.placeholder.com/400x200?text=Show+3"
  },
  { 
    id: 4, 
    title: "Show 4: Studio Sessions", 
    description: "Experience our state-of-the-art recording sessions.",
    cover: "https://via.placeholder.com/400x200?text=Show+4"
  },
  { 
    id: 5, 
    title: "Show 5: Car Media", 
    description: "Innovative ways to enjoy sound and video on the road.",
    cover: "https://via.placeholder.com/400x200?text=Show+5"
  },
  { 
    id: 6, 
    title: "Show 6: IT Solutions", 
    description: "Exploring our IT development and Bisolutions projects.",
    cover: "https://via.placeholder.com/400x200?text=Show+6"
  },
  // ... add more shows as needed
];

const Episodes = () => {
  const episodesPerPage = 4; // Customize how many shows per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalEpisodes = episodesData.length;
  const totalPages = Math.ceil(totalEpisodes / episodesPerPage);

  // Get current shows for the page
  const currentEpisodes = episodesData.slice(
    (currentPage - 1) * episodesPerPage,
    currentPage * episodesPerPage
  );

  return (
    <div 
      className="container mx-auto px-4 py-10" 
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">
        Shows
      </h1>
      
      {/* Shows Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentEpisodes.map((episode) => (
          <Link
            key={episode.id}
            to="/episodes" // Now navigates to EpisodesInnerPage
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            {/* Card Cover with Play Button Overlay */}
            <div className="relative">
              <img
                src="https://img.ausha.co/cb:-U1P~1ddd7/w:auto/h:auto/q:mauto/f:avif/https://www.ausha.co/wp-content/uploads/2021/11/Podcast-cover-art.jpg"
                alt={episode.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <FaPlay className="text-white text-4xl" />
              </div>
            </div>
            {/* Card Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{episode.title}</h2>
              <p className="text-gray-600 mb-4">{episode.description}</p>
              <span className="text-primary font-semibold hover:underline">
                See Episodes
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-10 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`py-2 px-4 rounded-md ${
            currentPage === 1
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-primary text-white hover:bg-primary/80"
          }`}
        >
          Prev
        </button>
        <span className="font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`py-2 px-4 rounded-md ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-primary text-white hover:bg-primary/80"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Episodes;
