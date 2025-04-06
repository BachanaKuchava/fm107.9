import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

function SingleEpisode() {
  // Example recommended videos (replace with your real data)
  const recommendedVideos = [
    {
      title: "Recommended Video 1",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Recommended Video 2",
      videoUrl: "https://www.youtube.com/embed/i9e9Xz4OHig",
    },
    {
      title: "Recommended Video 3",
      videoUrl: "https://www.youtube.com/embed/SSoICd4U8Qw",
    },
    {
      title: "Recommended Video 4",
      videoUrl: "https://www.youtube.com/embed/6n3pFFPSlW4",
    },
  ];

  // Dummy comments (replace with dynamic data if needed)
  const dummyComments = [
    { user: "User1", comment: "This episode was amazing!" },
    { user: "User2", comment: "Really enjoyed the discussion." },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side: Main Video & Episode Info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Main Video Container */}
            <div className="w-full h-[500px] bg-black">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Main Episode Video"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Episode Title */}
            <h1 className="text-2xl font-bold text-gray-800">
              Episode Title: A Great Adventure
            </h1>

            {/* Action Buttons: Like, Dislike, Subscribe */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition">
                <FaThumbsUp />
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition">
                <FaThumbsDown />
                <span>Dislike</span>
              </button>
              <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition">
                Subscribe
              </button>
            </div>

            {/* Episode Description */}
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              vitae dictum augue. Nullam nec consequat mi. Morbi sodales
              vehicula purus, id porttitor arcu consequat at. Phasellus
              sollicitudin, lacus et tristique ullamcorper, neque felis commodo
              orci, vitae consequat eros ex vel sapien.
            </p>

            {/* Comments Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Comments</h2>
              <textarea
                className="w-full border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write a comment..."
                rows="3"
              ></textarea>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Post Comment
              </button>

              {/* Dummy Comments List */}
              <div className="mt-6 space-y-4">
                {dummyComments.map((comment, idx) => (
                  <div key={idx} className="border-b pb-2">
                    <p className="font-semibold text-gray-800">
                      {comment.user}
                    </p>
                    <p className="text-gray-600">{comment.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Recommended Videos & Advertisement */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Recommended Videos
            </h2>
            {recommendedVideos.map((video, idx) => (
              <div key={idx} className="flex space-x-2">
                {/* Small video embed */}
                <div className="w-32 h-20 bg-black relative overflow-hidden">
                  <iframe
                    src={video.videoUrl}
                    title={`Recommended Video ${idx}`}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                {/* Video info */}
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">
                    {video.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    Channel Name or short description
                  </p>
                </div>
              </div>
            ))}

            {/* Advertisement Block */}
            <div className="mt-8 bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-pink-400 mb-3">
                Sponsored Ad
              </h3>
              <img
                src="https://avatars.mds.yandex.net/i?id=9427c272751c28e63ebaa15983df81ea_l-4081108-images-thumbs&n=13"
                alt="Advertisement"
                className="w-full max-w-xs rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleEpisode;
