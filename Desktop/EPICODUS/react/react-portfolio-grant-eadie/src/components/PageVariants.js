export const pageVariants = {
  initial: {
    x: "-60vw",
    opacity: 0,
  },
  in: {
    opacity: 1,
    x: 0,
  }, 
  out: {
    x: "60vw",
    opacity: 0,
  }
}

export const pageTransitions = {
  type: "tween",
  ease: "anticipate",
  duration: 1
}