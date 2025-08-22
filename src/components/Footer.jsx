import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ theme }) => {
  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/123krissh' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/krishana-suthar/' },
    { icon: <Mail size={20} />, url: 'mailto:krisshsuthar348@gmail.com' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.footer 
      className="py-8 bg-gray-100 dark:bg-gray-800 mt-auto"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    > 
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center">
          <motion.div 
            className="flex items-center space-x-6 mb-6"
            variants={itemVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 dark:bg-gray-700 text-gray-200 dark:text-primary-dark hover:bg-blue-400 hover:text-gray-900 dark:hover:bg-primary-dark dark:hover:text-gray-900 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
          
          <motion.p 
            className="text-sm text-gray-800 dark:text-gray-200 text-center"
            variants={itemVariants}
          >
            © {new Date().getFullYear()} <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Krishna Suthar</span>. All rights reserved.
          </motion.p>
          
          <motion.p 
            className="text-xs text-gray-700 dark:text-gray-300 mt-2 text-center"
            variants={itemVariants}
          >
            Built with ❤️ & React...
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;