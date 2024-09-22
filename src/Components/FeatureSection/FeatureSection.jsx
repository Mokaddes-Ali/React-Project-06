
import React from 'react';
import { motion } from 'framer-motion';
import icon1 from '../../assets/images/Logo.png';

const features = [
  {
    title: "Made for Developers",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    icon: <img src = {icon1} />,
  },
  {
    title: "Feature 2",
    description: "Description for feature 2.",
    icon: "⚡",
  },
  {
    title: "Feature 3",
    description: "Description for feature 3.",
    icon: "💡",
  },
  {
    title: "Feature 4",
    description: "Description for feature 4.",
    icon: "🚀",
  },
];

const animations = {
  initial: { opacity: 0, scale: 0.5},
  animate: {
    opacity: [1, 0.5, 1],
    scale: [1, 1.2, 1],
    rotate: [0, 2, 0, 0],
    transition: { duration: 2, repeat: Infinity, repeatType: "loop" },
  },
};

const FeatureSection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-28 p-8 max-w-4xl"
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.5 }}
      >
        {features.map((feature, index) => (
         
         <motion.div
            key={index}
            className="bg-white p-6 h-44 w-64 rounded-lg shadow-lg flex flex-row items-center"
            variants={animations}
          >

            <motion.div
              className="text-4xl mb-4"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {feature.icon}
            </motion.div>
            <motion.h2
              className="text-xl font-semibold mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {feature.title}
            </motion.h2>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut", delay: 1.2 }}
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeatureSection;
