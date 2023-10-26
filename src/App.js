import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";
// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer.js";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import _404 from "./pages/404";
import About from "./pages/About";
import { useEffect, useState } from "react";

// IMPORT PAGES
function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [music, setMusic] = useState(false)
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header music={music} setMusic={setMusic} />
      <div className="main">
        <div className="bg-color"></div>
        <Routes>
          <Route exact path="/" element={<Landing setMusic={setMusic} />} />
          <Route exact path="/about" element={<About scrollPosition={scrollPosition} setScrollPosition={setScrollPosition} music={music} setMusic={setMusic} />} />
          <Route exact path="/projects" element={<Projects scrollPosition={scrollPosition} setScrollPosition={setScrollPosition} music={music} setMusic={setMusic} />} />
          <Route path="/*" element={<_404 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;