import React from "react";
import { FaHeart, FaThumbsDown, FaComment } from "react-icons/fa";

function Live() {
  return (
    <div 
      className="w-full bg-gray-100 min-h-screen" 
      data-aos="zoom-in" 
      data-aos-duration="800" 
      data-aos-easing="ease-out"
    >
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left/Main Column */}
        <div className="md:col-span-2 space-y-8">
          {/* Live Radio Player */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold text-primary mb-2">Live Radio</h3>
            <p className="text-gray-600 mb-4">
              Enjoy our live stream anywhere, anytime.
            </p>
            {/* Example audio player */}
            <audio controls className="w-full">
              <source src="https://www.example.com/live-radio-stream.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

          {/* Live Video Player */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold text-primary mb-2">Live Video</h3>
            <p className="text-gray-600 mb-4">
              Watch the show in real time right here!
            </p>
            {/* Larger video player for full cover image display */}
            <div className="w-full h-96">
              <iframe
                title="Live Video Stream"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                className="w-full h-full rounded"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Live Chat Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold text-primary mb-2">Live Chat</h3>
            {/* Reaction Buttons */}
            <div className="flex items-center space-x-4 mb-4">
              <button className="flex items-center space-x-1 text-primary hover:text-primary/80 transition">
                <FaHeart />
                <span>120</span>
              </button>
              <button className="flex items-center space-x-1 text-primary hover:text-primary/80 transition">
                <FaThumbsDown />
                <span>5</span>
              </button>
              <button className="flex items-center space-x-1 text-primary hover:text-primary/80 transition">
                <FaComment />
                <span>Comments</span>
              </button>
            </div>
            {/* Comment Input */}
            <div className="mb-4">
              <textarea
                placeholder="Type your comment..."
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                rows="3"
              ></textarea>
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition duration-300">
              Send
            </button>
            {/* Dummy Comment List */}
            <div className="mt-6 space-y-4">
              <div className="border-b pb-2">
                <p className="text-gray-800 font-semibold">User1</p>
                <p className="text-gray-600">Great stream! Really enjoying it.</p>
              </div>
              <div className="border-b pb-2">
                <p className="text-gray-800 font-semibold">User2</p>
                <p className="text-gray-600">Loving the vibes, keep it up!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: On Air & Schedule */}
        <div className="bg-white rounded-lg shadow p-6 self-start">
          <h3 className="text-xl font-bold text-primary mb-4">On Air</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3" />
              <span>Delilah</span>
            </li>
            <li className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3" />
              <span>Victor Sosa</span>
            </li>
            <li className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3" />
              <span>Cubby & Christine</span>
            </li>
          </ul>
          <hr className="my-6" />
          <h4 className="text-lg font-semibold text-primary mb-2">Schedule</h4>
          <ul className="space-y-2 text-gray-600">
            <li>10:00 AM - 2:00 PM: Music Mix</li>
            <li>2:00 PM - 7:00 PM: Afternoon Drive</li>
            <li>7:00 PM - 12:00 AM: Late Night Show</li>
          </ul>
          <hr className="my-6" />
          <div className="flex items-center justify-between text-primary font-semibold">
            <button className="hover:underline">Connect</button>
            <button className="hover:underline">Share</button>
            <button className="hover:underline">Advertise With Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Live;
