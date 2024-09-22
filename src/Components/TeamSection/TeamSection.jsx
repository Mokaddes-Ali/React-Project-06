// src/components/TeamSection.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image from '../../assets/images/2 (3).png';

const teamMembers = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Member ${i + 1}`,
  image: `https://via.placeholder.com/150?text=Member+${i + 1}`,
}));

const TeamSection = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 4, teamMembers.length));
  };

  const handleShowLess = () => {
    setVisibleCount(8);
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {teamMembers.slice(0, visibleCount).map((member) => (
            <motion.div
              key={member.id}
              className="text-center bg-white rounded-lg shadow-lg"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image}
                alt={member.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <div className="mt-8">
        {visibleCount < teamMembers.length && (
          <button
            onClick={handleShowMore}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold mr-4"
          >
        View all customer stories
          </button>
        )}
        {visibleCount > 8 && (
          <button
            onClick={handleShowLess}
            className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-semibold"
          >
            Close customer stories
          </button>
        )}
      </div>
    </div>
  );
};

export default TeamSection;
