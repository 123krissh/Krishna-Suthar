import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Navbar = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      color: theme === 'dark' ? '#0d6efd' : '#64ffda',
      transition: { duration: 0.2 }
    }
  };

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/123krissh', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/krishana-suthar/', label: 'LinkedIn' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 ${
        scrolled
          ? 'h-14 bg-white dark:bg-gray-800/90 shadow-md backdrop-blur-sm'
          : 'h-16 bg-white/70 dark:bg-gray-900/90 backdrop-blur-sm'
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
       <img
         src={logo}
         alt="Logo"
         className="w-10 h-10 rounded-full shadow-md"
       />
       <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent dark:bg-gradient-to-r from-blue-400 to-purple-500">
         Krishna Suthar
       </span>
     </Link>


        {/* Hamburger */}
        <div
          className="md:hidden flex flex-col justify-between w-7 h-5 cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`h-0.5 bg-gray-800 dark:bg-gray-200 rounded-full transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`} />
          <div className={`h-0.5 bg-gray-800 dark:bg-gray-200 rounded-full transition-all duration-300 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`} />
          <div className={`h-0.5 bg-gray-800 dark:bg-gray-200 rounded-full transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`} />
        </div>

        {/* Nav Links */}
        <ul className={`md:flex items-center gap-8 ${
          isOpen
            ? 'flex flex-col absolute top-0 left-0 w-full h-screen pt-20 bg-white dark:bg-gray-900 items-center'
            : 'hidden md:flex'
        }`}>
          {['Home', 'About', 'Projects', 'Achievements', 'Contact'].map((item, index) => (
            <motion.li key={index} className="list-none" whileHover="hover">
              <motion.div variants={linkVariants}>
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`font-medium text-lg md:text-base no-underline relative px-1 py-1 ${
                    location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                      ? 'text-blue-400 dark:text-accent-dark'
                      : 'text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {item}
                  <span className={`absolute left-0 bottom-0 h-0.5 bg-accent dark:bg-accent-dark transition-all duration-300 ${
                    location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'w-full' : 'w-0'
                  }`} />
                </Link>
              </motion.div>
            </motion.li>
          ))}

          {/* Mobile Socials */}
          {isOpen && (
            <div className="flex gap-4 mt-8">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          )}
        </ul>

        {/* Desktop Socials */}
        <div className="hidden md:flex gap-4">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
