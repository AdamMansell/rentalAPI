import React from "react";
import { useState } from "react";
import hygge from "./hygge_.png";
import { motion } from "framer-motion";

function HyggeControl(props) {
  const { changeToDescription } = props;

  if (changeToDescription) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <p>
          <span>Hygge: Portland</span>
          <hr /> Uses the
          RealtyMole API to display rental information about selected regions of
          Portland OR. Updates every few seconds.{" "}
          <hr/>
          JavaScript || Node.js || jQuery
        </p>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <img src={hygge} alt="hygge" />
      </motion.div>
    );
  }
}

export default HyggeControl;
