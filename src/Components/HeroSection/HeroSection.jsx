import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import heroImage from '../../assets/images/Gmail - email.jpg'; 



const HeroSection = () => {
  const [rating, setRating] = useState(4); 
  const [hover, setHover] = useState(null); 
 

  return (
    <div className='bg-[#E9EFFE] h-[700px] w-screen'>
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8">
   
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-[48px] mb-4 font-[700] lead-[66px] text-left mr-40">Advanced email marketing software for your business</h1>
        <p className="mb-2 font-[400] lead-[28px] text-left mr-40">Simple email marketing is clean and user-friendly dashboard software that helps you achieve business goals together.
         Using software makes it easier to create.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
        Get our 14 days free trial
        </button>
        <div className="flex items-center justify-center md:justify-start">
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                  className="hidden"
                />
                <FaStar
                  size={24}
                  className="cursor-pointer transition-colors duration-200"
                  color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
          <span className="ml-2 text-gray-600">{rating} out of 5 4900+  5 Stars</span>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-2 -mr-[50px] ">
        <img src={heroImage} alt="Hero" className="rounded-lg shadow-lg h-[480px] w-[850px] " />
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
