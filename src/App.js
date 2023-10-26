import "./App.css";

import { Route, Routes } from "react-router-dom";
// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer.js";
import Landing from "./pages/Landing";
import Code from "./pages/Code";
import _404 from "./pages/404";

import About from "./pages/About";
import { useEffect, useState } from "react";

// IMPORT PAGES
function App() {



  const [scrollPosition, setScrollPosition] = useState(0);
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
      <Header />
      <div className="main">
        <div className="bg-color"></div>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/about" element={<About scrollPosition={scrollPosition} setScrollPosition={setScrollPosition} />} />
          <Route exact path="/projects" element={<Code scrollPosition={scrollPosition} setScrollPosition={setScrollPosition} />} />
          <Route path="/*" element={<_404 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;