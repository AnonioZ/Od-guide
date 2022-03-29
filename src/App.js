import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import Theaters from "./Theaters";
import Beaches from "./Beaches";
import Restoraunts from "./Restoraunts";
import Hotels from "./Hotels";
import Clubs from "./Clubs";
import {motion} from 'framer-motion'



import { Routes, Route, Link} from 'react-router-dom'

function App() {
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'yellow'
  }
  return (
    <div className="Doc">
      <Header />
       <nav className="ContentList">
        <div className="ContentItem" id="firstIt">
          <Link to="/beaches" style={linkStyle}> Пляжи </Link>
        </div>
        <div className="ContentItem" id="twoIt">
          <Link to="/theaters" style={linkStyle}> Театры </Link>
        </div>
        <div className="ContentItem" id="threeIt">
          <Link to="/clubs" style={linkStyle}> Clubs </Link>
        </div>
        <div className="ContentItem" id="fourIt">
          <Link to="/restoraunts" style={linkStyle}> рЭстораны </Link>
        </div>
        <motion.div animate = {{ rotate: 360 }} transition = {{ delay: 2, duration: 3, repeat: Infinity, type: "just", repeatType: 'reverse', repeatDelay: 1 }} className="ContentItem" id="fiveIt">
          <Link to="/homepage">            
             <img
              src="https://odessitua.com/uploads/posts/2018-07/1531802823_odessa_2.png"
              id="od"
              alt="od"
              height="150px"
            /> </Link>
        </motion.div>
        <div className="ContentItem" id="sixIt">
          <Link to="/hotels" style={linkStyle}> HOTELS </Link>
        </div>
      </nav>
      <Routes>
        <Route path = "/theaters" element = { <Theaters />}/>
        <Route path = "/beaches" element = { <Beaches />}/>
        <Route path = "/restoraunts" element = { <Restoraunts />}/>
        <Route path = "/clubs" element = { <Clubs />}/>
        <Route path = "/hotels" element = { <Hotels />}/>
      </Routes>
      
      <Footer />
      
    </div>
  );
}

export default App;
