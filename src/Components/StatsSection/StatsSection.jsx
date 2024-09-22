// src/components/StatsSection.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  { id: 1, value: 1200, label: 'Users' },
  { id: 2, value: 150, label: 'Projects' },
  { id: 3, value: 300, label: 'Reviews' },
];

const StatsSection = () => {
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(true);
  };

  return (
    <div className='flex items-center justify-center bg-[#ffffff]'>
    <div
      className="flex items-center justify-center -mt-20 h-40 bg-gray-900 text-white"
     
     
    >
      <div className="grid grid-cols-3 gap-8">
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            className="text-center p-6 bg-gray-800 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <h2 className="text-4xl font-bold">
                {isHovered ? <CountUp end={stat.value} duration={2} /> : 0}
              </h2>
              <p className="mt-2 text-lg">{stat.label}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default StatsSection;
