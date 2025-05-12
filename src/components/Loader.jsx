import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const circleVariants = {
    initial: { y: 0 },
    animate: { 
      y: [0, -15, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
      <motion.div 
        className="flex space-x-2"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-50">
      <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">Loading...</p>
    </div>
        <motion.div 
          className="w-4 h-4 rounded-full bg-primary dark:bg-primary-dark" 
          variants={circleVariants}
        />
        <motion.div 
          className="w-4 h-4 rounded-full bg-primary dark:bg-primary-dark" 
          variants={circleVariants}
        />
        <motion.div 
          className="w-4 h-4 rounded-full bg-primary dark:bg-primary-dark" 
          variants={circleVariants}
        />
      </motion.div>
    </div>
  );
};

export default Loader;