import React from 'react'
import {motion} from 'framer-motion'



export default function Footer() {

  function Move() {
    this.style.left = 50 + 'px';
  }
    return (
      <footer className = "Footer">
      <div>Contacts</div>
      <div>About Us</div>
      <div>Our supports</div>
      <div><motion.img animate = {{x: 3000, transitionEnd: { x: 0 }}} transition = {{ delay: 2, duration: 6, repeat: Infinity, type: "just", repeatDelay: 1 }} id="train" src="https://js.cx/clipart/train.gif" alt = "AZ" onClick={Move}></motion.img></div>
      </footer>
    );
  }