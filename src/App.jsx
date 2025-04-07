import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Episodes from "./Pages/Episodes/Episodes";
import Studio from "./Pages/Studio/Studio";
import News from "./Pages/News/News";
import Footer from "./components/Footer/Footer";
import AboutUs from "./Pages/AboutUS/AboutUs";
import Live from "./Pages/Radio LIVE/Live";
import EpisodesInnerPage from "./Pages/Episodes/EpisodesInner/EpisodesInnerPage";
import SingleEpisode from "./Pages/Episodes/EpisodesInner/SingleEpisode";
import AOS from "aos";
import "aos/dist/aos.css";

/* Sticky Sponsor Ad Component (always at bottom) */
function StickySponsorAd({ onClose }) {
  const [adWidth, setAdWidth] = useState("900px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setAdWidth("300px");
      } else {
        setAdWidth("900px");
      }
    };

    // Set initial width on mount
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50">
      <div className="relative h-[90px]" style={{ width: adWidth }}>
        <img
          src="https://i.ytimg.com/vi/dKWlVrYY4m8/maxresdefault.jpg"
          alt="Sponsor Ad"
          className="w-full h-full"
        />
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-2 text-red-500 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 text-2xl"
          aria-label="Close ad"
        >
          ×
        </button>
      </div>
    </div>
  );
}

/* PopUp Sponsor Ad Component for Mobile */
function PopUpSponsorAd() {
  const [visible, setVisible] = useState(false);
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    // Only run on mobile screens
    if (window.innerWidth < 768) {
      setVisible(true);
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setVisible(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div
        className="bg-white rounded-lg shadow-lg relative"
        style={{ width: "280px", height: "500px" }}
      >
        {/* Countdown Timer in Top Right */}
        <div className="absolute top-0 right-0 m-2 bg-gray-200 rounded-full px-2 py-1 text-sm font-bold text-gray-800">
          {timer}s
        </div>
        <img
          src="https://i.ytimg.com/vi/dKWlVrYY4m8/maxresdefault.jpg"
          alt="Sponsor Ad"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

/* Main App Component */
function App() {
  const [showAd, setShowAd] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      offset: 100,
    });
  }, []);

  // Reset the sticky ad visibility on every route change
  const location = useLocation();
  useEffect(() => {
    setShowAd(true);
  }, [location]);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/shows" element={<Episodes />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/news" element={<News />} />
          <Route path="/RadioLive" element={<Live />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/episodes" element={<EpisodesInnerPage />} />
          <Route path="/singleEpisode" element={<SingleEpisode />} />
          {/* Add additional routes here */}
        </Routes>
      </main>
      <Footer />
      {showAd && <StickySponsorAd onClose={() => setShowAd(false)} />}
      <PopUpSponsorAd />
    </>
  );
}

/* Wrap App with Router */
function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
