// src/components/CTASection.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="text-center p-8 bg-white rounded-lg shadow-lg"
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl font-bold mb-4"
          variants={animationVariants}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          Join Us Today!
        </motion.h1>
        <motion.p
          className="mb-8 text-gray-600"
          variants={animationVariants}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          Be part of our amazing community and start enjoying our services.
        </motion.p>
        <motion.button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default CTASection;
