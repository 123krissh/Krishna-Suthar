import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import logo from "../assets/logo.jpg";

const Navbar = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Detect scroll for navbar style
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { x: "100%", transition: { duration: 0.4, ease: "easeIn" } },
  };

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/123krissh", label: "GitHub" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/krishana-suthar/", label: "LinkedIn" },
  ];

  const isActive = (path) => location.pathname === path;

  // Reusable NavLink with smooth underline animation
  const NavLink = ({ to, children }) => {
    const active = isActive(to);
    return (
      <Link
        to={to}
        className={`font-medium text-lg md:text-base no-underline relative px-1 py-1 group ${
          active ? "text-blue-400 dark:text-blue-400" : "text-gray-800 dark:text-gray-200"
        }`}
      >
        {children}
        {/* Underline */}
        <span
          className={`absolute left-0 bottom-0 h-0.5 bg-blue-400 dark:bg-blue-400 transition-all duration-300 ease-in-out 
            ${active ? "w-full" : "w-0 group-hover:w-full"}
          `}
        />
      </Link>
    );
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 ${
        scrolled
          ? "h-14 bg-white dark:bg-gray-800/90 shadow-md backdrop-blur-md"
          : "h-16 bg-white/70 dark:bg-gray-900/90 backdrop-blur-md"
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full shadow-md" />
          <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Krishna Suthar
          </span>
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-between w-7 h-5 cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 bg-gray-800 dark:bg-gray-200 rounded-full transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 bg-gray-800 dark:bg-gray-200 rounded-full transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 bg-gray-800 dark:bg-gray-200 rounded-full transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {["Home", "About", "Projects", "Achievements", "Contact"].map((item, index) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <motion.li
                key={index}
                className="list-none"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                whileHover="hover"
              >
                <NavLink to={path}>{item}</NavLink>
              </motion.li>
            );
          })}
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

        {/* Mobile Menu */}
        {/* <AnimatePresence> */}
        {/* Overlay for mobile menu */}
      {/* {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm md:hidden z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )} */}
          {isOpen && (
            <motion.ul
              className="flex flex-col absolute top-0 right-0 w-80 h-screen pt-20 bg-white dark:bg-gray-900 items-center gap-8"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              {["Home", "About", "Projects", "Achievements", "Contact"].map((item, index) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                return (
                  <motion.li
                    key={index}
                    className="list-none"
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <NavLink to={path}>{item}</NavLink>
                  </motion.li>
                );
              })}

              {/* Mobile Socials */}
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
            </motion.ul>
          )}
        {/* </AnimatePresence> */}
      </div>
    </motion.nav>
  );
};

export default Navbar;
