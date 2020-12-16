import React from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Frame } from "framer"

const pageVariants = {

  initial: {
    y: 0,
    opacity: 0,
    scale: 0.9,
    transition: { duration: 3 }
  },
  in: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 3 }
  }, 
  out: {
    y: "10vh",
    opacity: 0,
    scale: .8,
    transition: { duration: 1 }
  }
}

const pageTransitions = {
  type: "tween",
  ease: "anticipate",
  duration: 3
}

function Splash() {
  
  return (
    <motion.div
    style={{zIndex:1, width: "100vh"}}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="splash ">
      
      <h1>Hi, I'm <NavLink to="/about"><motion.div className="grant">Grant</motion.div></NavLink>.</h1>
      <p>I write code, design stuff, and make music.</p>
      
    </motion.div>
  );
}



export default Splash;
