import "./App.css";

import { Route, Routes } from "react-router-dom";
// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer.js";
import Landing from "./components/Landing";
import Code from "./pages/Code";
import _404 from "./pages/404";

import About from "./pages/About";

// IMPORT PAGES
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Code />} />
          <Route  path="/*" element={<_404 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;



//card lift before entering Code and Main page, for code just move up whole video. For Main page, quick welcome screen so vid can load
//make responsive
//project buttons
//new mail logo
