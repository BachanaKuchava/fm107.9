import React, { useState } from "react";
import { Link } from "react-router-dom";

// Dummy episode data (replace with your real data or API fetch)
const episodesData = [
  { id: 1, title: "Episode 1: The Beginning", description: "An introduction to our journey and the evolution of sound." },
  { id: 2, title: "Episode 2: Live on Air", description: "Highlights and behind-the-scenes from our live radio show." },
  { id: 3, title: "Episode 3: Podcast Insights", description: "A deep dive into the world of podcasts." },
  { id: 4, title: "Episode 4: Studio Sessions", description: "Experience our state-of-the-art recording sessions." },
  { id: 5, title: "Episode 5: Car Media", description: "Innovative ways to enjoy sound and video on the road." },
  { id: 6, title: "Episode 6: IT Solutions", description: "Exploring our IT development and Bisolutions projects." },
  // ... add more episodes as needed
];

const Episodes = () => {
  const episodesPerPage = 4; // Customize how many episodes per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalEpisodes = episodesData.length;
  const totalPages = Math.ceil(totalEpisodes / episodesPerPage);

  // Get current episodes for the page
  const currentEpisodes = episodesData.slice(
    (currentPage - 1) * episodesPerPage,
    currentPage * episodesPerPage
  );

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">Episodes</h1>
      
      {/* Episodes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentEpisodes.map((episode) => (
          <div
            key={episode.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-2">{episode.title}</h2>
            <p className="text-gray-600 mb-4">{episode.description}</p>
            <Link
              to={`/episodes/${episode.id}`}
              className="text-primary font-semibold hover:underline"
            >
              Read More &rarr;
            </Link>
          </div>
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
