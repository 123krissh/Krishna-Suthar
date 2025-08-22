import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, ArrowRight, Medal, FileBadge  } from 'lucide-react';

// You'll need to import your certificate images here
// Example:
import ICDAM from '../assets/ICDAM-2024.png';
import ICAMSI from '../assets/IC-AMSI 2024.jpg';
import c4c from '../assets/c4c.png';
import ck from '../assets/Code_Kshetra 2.0.jpg';
import enigma from '../assets/ENIGMA@VIPS.jpg';
import isro from '../assets/ISRO quiz.jpg';
import iitk from '../assets/IIT KANPUR.png';
import udemy from '../assets/UDEMY.png';
import fk from '../assets/Flipkart grid 5.0.png';
import da from '../assets/DUCAT.jpg';
import CDAC from '../assets/CDAC.png';

const Achievements = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const achievementCategories = [
    { value: 'all', label: 'All' },
    { value: 'hack', label: 'Hackathons' },
    { value: 'course', label: 'Courses' },
    { value: 'paper', label: 'Persentations' },
    { value: 'academic', label: 'Academic' },
  ];

  const achievements = [
    {
      title: "Bootcamp on Big Data & Data Science",
      issuer: "C-DAC, noida",
      // description: "Professional certification validating skills in building and training neural networks using TensorFlow.",
      date: "April 2025",
      image: CDAC,
      technologies: ["Big Data", "Apache hadoop", "MapReduce", "Data Science", "ML"],
      category: "course",
      credentialLink: "",
    },
    {
      title: "ICDAM: Research Paper Cyberbullying Analysis",
      issuer: "ICDAM 2024",
      // description: "Fundamental understanding of AWS Cloud services, security, architecture, and pricing models.",
      date: "June 2024",
      image: ICDAM,
      technologies: ["Machine Learning", "Data Science", "NLP"],
      category: "paper",
      credentialLink: "",
    },
    {
      title: "IC-AMSI: Presentation of Research paper on YOLOv8 Powered Security System",
      issuer: "IC-AMSI 2024",
      // description: "Comprehensive specialization covering supervised learning, recommender systems, and reinforcement learning algorithms.",
      date: "August 2024",
      image: ICAMSI,
      technologies: ["Python", "YOLOv8", "Deep Learning", "Object Detection"],
      category: "paper",
      credentialLink: "",
    },
    {
      title: "IITK: Student Development Program",
      issuer: "IIT KANPUR",
      // description: "Professional certification validating skills in building and training neural networks using TensorFlow.",
      date: "October 2023",
      image: iitk,
      technologies: ["WordPress", "Digital Marketing"],
      category: "course",
      credentialLink: "",
    },
    {
      title: "CodeKshetra2.0 hackathon",
      issuer: "JIMS, Delhi",
      // description: "Professional nanodegree program focusing on building mobile applications using React Native framework.",
      date: "February 2025",
      image: ck,
      technologies: ["Web Development", "AI & ML"],
      category: "hack",
      credentialLink: "",
    },
    {
      title: "Code4Cause 2.0 hackathon",
      issuer: "hack With India & NSUT",
      // description: "Research paper on novel approaches to cyberbullying detection using advanced NLP techniques received best paper award.",
      date: "September 2024",
      image: c4c,
      technologies: ["Web development", "Deep Learning"],
      category: "hack",
      credentialLink: "",
    },
    {
      title: "Flipkart Grid 5.0 Tack Quiz",
      issuer: "Flipkar",
      // description: "Five-course specialization covering neural networks, improving deep neural networks, structuring ML projects, CNNs, and sequence models.",
      date: "August 2023",
      image: fk,
      technologies: [],
      category: "academic",
      credentialLink: "",
    },
     {
      title: "Data Analytics Course",
      issuer: "DUCAT",
      // description: "Course covering the working principles of generative AI and large language models, fine-tuning, and RLHF.",
      date: "October 2023",
      image: da,
      technologies: ["Python", "Data Analytics", "Data Visualization"],
      category: "course",
      credentialLink: "",
    },
    {
      title: "Web Development Course",
      issuer: "Udemy",
      // description: "Comprehensive course covering modern full-stack development with MERN stack technologies.",
      date: "April 2023",
      image: udemy,
      technologies: ["HTML", "CSS"],
      category: "course",
      credentialLink: "",
    },
    {
      title: "ISRO Chandrayaan-3 Mahaquiz",
      issuer: "ISRO & MYGOV",
      // description: "Professional nanodegree focusing on image processing, feature extraction, object detection, and image classification techniques.",
      date: "July 2023",
      image: isro,
      technologies: [],
      category: "academic",
      // credentialLink: "https://graduation.udacity.com/example",
    },
    {
      title: "ENIGMA@VIPS: Idea Pitch Competition",
      issuer: "VSE&T, VIPS-TS",
      // description: "Professional nanodegree focusing on image processing, feature extraction, object detection, and image classification techniques.",
      date: "MAY 2024",
      image: enigma,
      technologies: [],
      category: "academic",
      // credentialLink: "https://graduation.udacity.com/example",
    }
  ];

  const filteredAchievements = activeFilter === 'all'
    ? achievements
    : achievements.filter(a => a.category.toLowerCase() === activeFilter);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <div className="pt-6">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          My Achievements
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Certifications, awards, and recognitions that highlight my expertise across various technical domains.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {achievementCategories.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setActiveFilter(value)}
            className={`px-4 py-2 rounded-full transition-all duration-200 text-sm font-semibold ${
              activeFilter === value
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {filteredAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="shadow-blue-400 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              <div className="relative h-75 w-full rounded-t-lg overflow-hidden">
  {achievement.image ? (
    <img
      src={achievement.image}
      alt={`${achievement.title} certificate`}
      className="absolute inset-0 w-full h-full"
    />
  ) : (
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <Award size={64} className="text-white opacity-90" />
    </div>
  )}
  {/* Optional overlay for visual effect */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
</div>

              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold dark:text-white">{achievement.title}</h3>
                  <span className=" text-center text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-1 w-30 rounded-full">
                    {achievement.date}
                  </span>
                </div>
                
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 font-medium">
                  <span className="italic"> Issued by: </span>{achievement.issuer}
                </p>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 flex-grow">
                  {achievement.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {achievement.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-800 dark:text-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* <div className="mt-4">
                  <a
                    href={achievement.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
                  >
                    <FileBadge  size={14} className="mr-1" />
                    Verify Certificate
                  </a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredAchievements.length === 0 && (
        <div className="text-center py-10">
          <p className="text-xl text-gray-500 dark:text-gray-300">No achievements found in this category.</p>
        </div>
      )}

      <div className="text-center mt-10">
        <a
          href="https://www.linkedin.com/in/krishana-suthar"
          target="_blank"
          rel="noopener noreferrer"
          className="w-75 px-4 py-2 flex justify-center items-center mx-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold transition-all duration-150 hover:text-gray-800 hover:shadow-lg"
        >
          View more Achievements on LinkedIn
          <ArrowRight size={26} className="ml-2 font-bold" />
        </a>
      </div>
    </div>
  );
};

export default Achievements;
