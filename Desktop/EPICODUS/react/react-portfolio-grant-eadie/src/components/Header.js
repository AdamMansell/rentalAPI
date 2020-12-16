import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import 

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 2,
};

const pageVariants = {
  initial: {
    y: "-5vh",
    opacity: 0,
  },
  in: {
    y: "0",
    opacity: 1,
  },
  out: {
    y: "20vh",
    opacity: 0,
  },
};

function Header() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <NavLink to="/" className="navbar-brand">
          <h1 className="grant">g.e.</h1>
        </NavLink>
        <div className="navbar-collapse"></div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/work" exact className="nav-link">
              Work
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="about" className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/settings" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
}

export default Header;
