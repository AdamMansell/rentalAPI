import react from "react";
import { motion } from "framer-motion";
import { useState } from 'react'
import HyggeControl from './HyggeControl'

function WorkPage() {

  const [workDesc, handleWorkDescView] = useState(false)

  return (
    <>
      <motion.div className="grid-container">
        <motion.div whileHover={{scale: 1.05, transition: {duration: .1}}} onMouseEnter={() => handleWorkDescView(!workDesc)} onMouseLeave={() => handleWorkDescView(!workDesc)} className="squareWork">
          <HyggeControl changeToDescription={workDesc}/>
        </motion.div>
        <motion.div whileHover={{scale: 1.05, transition: {duration: .1}}} className="squareWork"></motion.div>
        <motion.div whileHover={{scale: 1.05, transition: {duration: .1}}} className="squareWork"></motion.div>
        <motion.div whileHover={{scale: 1.05, transition: {duration: .1}}} className="squareWork"></motion.div>
        <motion.div whileHover={{scale: 1.05, transition: {duration: .1}}} className="squareWork"></motion.div>
        <motion.div whileHover={{scale: 1.05, transition: {duration: .1}}} className="squareWork"></motion.div>
      </motion.div>
    </>
  );
}

export default WorkPage;
