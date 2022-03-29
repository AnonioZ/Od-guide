import React from 'react'
import {motion} from 'framer-motion'

export default function Header() {
    return (
      <header className = "Header">
      <div className="logoOd"><img src = "https://odessitua.com/uploads/posts/2018-07/1531802823_odessa_2.png" alt = "лого" className="logoOd"></img></div>
      <motion.div   animate={{scale: 1.5}} transition = {{ duration: 3 }} className="TitleHead" text-align= "center">Нам нужны твои оценки!</motion.div>
      </header>
    );
  }