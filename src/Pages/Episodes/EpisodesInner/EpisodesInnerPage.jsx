import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Example data to mimic fetched episodes.
 * Adjust or replace with real data.
 */
const episodesData = [
  {
    id: 1,
    title: "Episode 1: Pilot",
    description:
      "In the pilot episode, everything begins. The host introduces the show, the guests, and sets the stage for an exciting series.",
    thumbnail:
      "https://i.ytimg.com/vi/7fR-w8hoPcs/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB",
  },
  {
    id: 2,
    title: "Episode 2: Deep Dive",
    description:
      "A deep exploration of the show’s main topic, featuring special guests and lively discussion.",
    thumbnail:
      "https://i.ytimg.com/vi/7fR-w8hoPcs/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB",
  },
  {
    id: 3,
    title: "Episode 3: Round Table",
    description:
      "Multiple experts gather around for a round-table talk, tackling current events and hot debates.",
    thumbnail:
      "https://i.ytimg.com/vi/7fR-w8hoPcs/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB",
  },
  {
    id: 4,
    title: "Episode 4: Special Guest",
    description:
      "An industry icon joins the show, sharing stories, insights, and taking questions from fans.",
    thumbnail:
      "https://i.ytimg.com/vi/7fR-w8hoPcs/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB",
  },
  {
    id: 5,
    title: "Episode 5: Q&A Session",
    description:
      "Listeners send in questions. The host and guests answer them live, giving personal tips and advice.",
    thumbnail:
      "https://i.ytimg.com/vi/7fR-w8hoPcs/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB",
  },
  {
    id: 6,
    title: "Episode 6: Bonus Content",
    description:
      "Extra behind-the-scenes insights and bonus discussions for our dedicated listeners.",
    thumbnail:
      "https://i.ytimg.com/vi/7fR-w8hoPcs/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB",
  },
  {
    id: 7,
    title: "Episode 7: Extended Q&A",
    description:
      "More questions answered live. Our host dives deeper into topics that matter to you.",
    thumbnail:
      "https://i.ytimg.com/vi/7fR-w8hoPcs/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB",
  },
  // Add more episodes if needed...
];

function EpisodesInnerPage() {
  const navigate = useNavigate();

  // Set episodes per page based on viewport:
  // For desktop (≥640px): 3 episodes; for mobile (<640px): 4 episodes.
  const [episodesPerPage, setEpisodesPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setEpisodesPerPage(3);
      } else {
        setEpisodesPerPage(4);
      }
      // Reset to first page when layout changes.
      setCurrentPage(1);
    };
    handleResize(); // Run once on mount.
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pagination logic
  const totalEpisodes = episodesData.length;
  const totalPages = Math.ceil(totalEpisodes / episodesPerPage);
  const startIndex = (currentPage - 1) * episodesPerPage;
  const currentEpisodes = episodesData.slice(
    startIndex,
    startIndex + episodesPerPage
  );

  // Advertisement image URL
  const adImage =
    "https://avatars.mds.yandex.net/i?id=f8695beb1dde36bcb39788d8916d09da_l-7017431-images-thumbs&n=13";

  // Handler for navigating to SingleEpisode page.
  const goToSingleEpisode = () => {
    navigate("/singleEpisode");
  };

  return (
    <main
      className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 text-white p-4"
      data-aos="fade"
      data-aos-duration="800"
    >
      {/* Hero / Banner */}
      <section className="relative w-full flex items-center justify-center py-16 px-4 text-center">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-10"
          style={{
            backgroundImage:
              "url('https://i.ytimg.com/vi/7fR-w8hoPcs/maxresdefault.jpg')",
          }}
        ></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-md">
            Our Awesome Podcast
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
            Dive into captivating episodes, explore new ideas, and get inspired
            by thought-provoking discussions.
          </p>
        </div>
      </section>

      {/* Episodes List */}
      <section className="container mx-auto px-4 py-10 relative z-10">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-pink-400">Episodes</h2>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
            Select an episode to listen and explore more details.
          </p>
        </header>

        {/* Flex container: Episodes Grid + Desktop Sidebar */}
        <div className="flex flex-col sm:flex-row gap-8">
          {/* Episodes Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentEpisodes.map((ep, idx) => (
              <React.Fragment key={ep.id}>
                <div
                  onClick={goToSingleEpisode}
                  className="bg-gray-800 bg-opacity-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer"
                >
                  {/* Using aspect-video for a 16:9 ratio */}
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={ep.thumbnail}
                      alt={ep.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col space-y-2">
                    <h3 className="text-xl font-semibold text-pink-300">
                      {ep.title}
                    </h3>
                    <p className="text-sm text-gray-200 line-clamp-3">
                      {ep.description}
                    </p>
                    <button
                      className="mt-auto bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToSingleEpisode();
                      }}
                    >
                      Listen Now
                    </button>
                  </div>
                </div>
                {/* Mobile: Insert Advertisement after the second card */}
                {idx === 1 && (
                  <div className="block sm:hidden">
                    <div className="bg-white bg-opacity-10 p-4 rounded-xl shadow-md flex flex-col items-center">
                      <h3 className="text-2xl font-bold text-pink-300 mb-3">
                        Sponsored Ad
                      </h3>
                      <img
                        src={adImage}
                        alt="Advertisement"
                        className="w-full max-w-sm rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Desktop Sidebar Advertisement */}
          <div className="hidden sm:block sm:w-1/3">
            <div className="bg-white bg-opacity-10 p-4 rounded-xl shadow-md flex flex-col items-center">
              <h3 className="text-2xl font-bold text-pink-300 mb-3">
                Sponsored Ad
              </h3>
              <img
                src={adImage}
                alt="Advertisement"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* For Mobile: Advertisement block before Pagination */}
        <div className="block sm:hidden mt-8">
          <div className="bg-white bg-opacity-10 p-4 rounded-xl shadow-md flex flex-col items-center">
            <h3 className="text-2xl font-bold text-pink-300 mb-3">
              Sponsored Ad
            </h3>
            <img
              src={adImage}
              alt="Advertisement"
              className="w-full max-w-sm rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="hidden sm:flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`py-2 px-4 rounded-md font-semibold transition-colors ${
              currentPage === 1
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-pink-500 hover:bg-pink-600"
            }`}
          >
            Prev
          </button>
          <span className="text-gray-300 font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`py-2 px-4 rounded-md font-semibold transition-colors ${
              currentPage === totalPages
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-pink-500 hover:bg-pink-600"
            }`}
          >
            Next
          </button>
        </div>

        {/* Mobile Pagination Controls */}
        <div className="flex sm:hidden justify-center items-center mt-8 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`py-2 px-4 rounded-md font-semibold transition-colors ${
              currentPage === 1
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-pink-500 hover:bg-pink-600"
            }`}
          >
            Prev
          </button>
          <span className="text-gray-300 font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`py-2 px-4 rounded-md font-semibold transition-colors ${
              currentPage === totalPages
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-pink-500 hover:bg-pink-600"
            }`}
          >
            Next
          </button>
        </div>

        {/* Additional Desktop Advertisement below pagination */}
        <div className="hidden sm:block mt-8">
          <div className="bg-white bg-opacity-10 p-4 rounded-xl shadow-md flex flex-col items-center">
            <h3 className="text-2xl font-bold text-pink-300 mb-3">
              Another Sponsored Ad
            </h3>
            <img
              src={adImage}
              alt="Advertisement"
              className="w-full max-w-xl rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default EpisodesInnerPage;
