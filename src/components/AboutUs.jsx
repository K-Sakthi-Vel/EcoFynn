import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import topLeft from '../assets/top-left.png';
import bottomRight from '../assets/bottom-right.png';

export default function AboutUs() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const textContent =
    "Future Green creates everyday products that reduce waste without sacrificing quality. We use recycled and responsibly sourced materials to keep sustainability practical and affordable. Our goal is simple: help individuals and businesses make greener choices with ease.";
  const words = textContent.split(" ");

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const wordInitialColor = "#d1d5db";
  const wordFinalColor = "#4b5563"; 
  const wordDuration = 0.12; 
  const staggerDelay = wordDuration; 

  // Parent will stagger children so animation follows DOM order (left->right, top->bottom)
  const parentVariants = {
    hidden: {
      opacity: 1,
      color: wordInitialColor,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: staggerDelay,
      },
    },
  };

  // Each word: only color transition (no clipping). Keeps final color after switching.
  const wordVariants = {
    hidden: { color: wordInitialColor },
    visible: {
      color: wordFinalColor,
      transition: { duration: wordDuration, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 bg-[#eef5e9] overflow-hidden"
      aria-label="About Future Green"
    >

      <div className="absolute bottom-5 rotate-[180deg] left-0">
        <img
          src={topLeft}
          alt="leaf decoration"
          className="w-100 h-70 opacity-100"
        />
      </div>

      <div className="absolute bottom-10 right-0 rotate-[180deg]">
        {/* local screenshot / image you uploaded — used here as a decorative asset */}
        <img
          src={bottomRight}
          alt="decorative"
          className="w-100 h-70 opacity-100 object-contain"
        />
      </div>

      <div className="relative z-10 max-w-[80vw] mx-auto text-center text-3xl md:text-4xl leading-relaxed font-medium px-4">
        <motion.p
          initial="hidden"
          animate={controls}
          variants={parentVariants}
          style={{ fontFamily: "Poppins" }}
          className="inline-block"
        >
          {words.map((word, idx) => (
            <motion.span
              key={idx}
              variants={wordVariants}
              className="inline-block mr-2 whitespace-nowrap"
              style={{ display: "inline-block" }}
            >
              {word}
              {idx < words.length - 1 ? " " : ""}
            </motion.span>
          ))}
        </motion.p>
      </div>

      {/* Local inline styles to ensure initial grey+final color behavior (keeps final color) */}
      <style>{`
        /* ensure default color matches our variant initial color in case JS not ready yet */
        section { --word-initial: ${wordInitialColor}; --word-final: ${wordFinalColor}; }
        section .inline-block { color: var(--word-initial); transition: color ${wordDuration}s ease-out; }
      `}</style>
    </section>
  );
}
