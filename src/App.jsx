import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Episodes from "./Pages/Episodes/Episodes";
import Studio from "./Pages/Studio/Studio";
import News from "./Pages/News/News";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      offset: 100,
    });
  }, []);

  return (
    <Router>
      <div className="">
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/shows" element={<Episodes />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/news" element={<News />} />
            {/* You can add more routes here, e.g., /radio, /about */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
