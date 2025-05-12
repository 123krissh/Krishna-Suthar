import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed right-6 top-24 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md text-primary dark:text-primary-dark"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? (
        <Sun size={20} className="text-primary-dark" />
      ) : (
        <Moon size={20} className="text-primary" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;