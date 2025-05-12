import React from 'react';
import { motion } from 'framer-motion';
import me from '../assets/Me.jpg';
import { DiPython, DiJavascript1 } from 'react-icons/di';
import { FaReact, FaHtml5, FaJava   } from 'react-icons/fa';
import { VscVscode } from "react-icons/vsc";
import {
  GraduationCap,
  Briefcase,
  Laptop,
  Server,
  Settings,
  Code,
  Database,
  GitBranch,
  Cloud,
  MonitorSmartphone,
  Globe,
  Figma,
  Brain,
  Bot,
  BarChart,
  TreeDeciduous, Github, Linkedin, Mail, ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = ({ theme }) => {
    const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/123krissh' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/krishana-suthar/' },
    { icon: <Mail size={20} />, url: 'mailto:krisshsuthar348@gmail.com' },
  ];
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <FaReact  className="w-4 h-4 mr-2" /> },
        { name: "Next.js", icon: <Globe className="w-4 h-4 mr-2" /> },
        { name: "Tailwind CSS", icon: <MonitorSmartphone className="w-4 h-4 mr-2" /> },
        { name: "JavaScript", icon: <DiJavascript1 className="w-4 h-4 mr-2" /> },
        { name: "HTML", icon: <FaHtml5  className="w-4 h-4 mr-2" /> },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <Server className="w-4 h-4 mr-2" /> },
        { name: "Express", icon: <Code className="w-4 h-4 mr-2" /> },
        { name: "Python", icon: <DiPython  className="w-4 h-4 mr-2" /> },
        { name: "MongoDB", icon: <Database className="w-4 h-4 mr-2" /> },
        { name: "PostgreSQL", icon: <Database className="w-4 h-4 mr-2" /> },
        { name: "Firebase", icon: <Cloud className="w-4 h-4 mr-2" /> },
      ],
    },
    {
      category: "Advance",
      items: [
        { name: "Machine Learning", icon: <Brain className="w-4 h-4 mr-2" /> },
        { name: "Deep Learning", icon: <Brain className="w-4 h-4 mr-2" /> },
        { name: "Artificial Intelligence", icon: <Bot className="w-4 h-4 mr-2" /> },
        { name: "Data Science", icon: <BarChart className="w-4 h-4 mr-2" /> },
        { name: "Data Structure", icon: <TreeDeciduous className="w-4 h-4 mr-2" /> },
        { name: "Java", icon: <FaJava className="w-4 h-4 mr-2" /> },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: <GitBranch className="w-4 h-4 mr-2" /> },
        { name: "AWS", icon: <Cloud className="w-4 h-4 mr-2" /> },
        { name: "Figma", icon: <Figma className="w-4 h-4 mr-2" /> },
        { name: "VS Code", icon: <VscVscode className="w-4 h-4 mr-2" /> },
      ],
    },
  ];

  const education = [
    {
      degree: "B.Tech in Artificial Intelligence and Data Science",
      institution: "Vivekananda Institute of Professional Studies | GGSIPU",
      period: "2022 - 2026",
      GPA: "8.43/10",
    },
  ];

  const experience = [
    {
      position: "React-JS Developer Intern",
      company: "AdsEra IT Services Pvt. Ltd.",
      period: "07/2024 - 08/2024",
      description: "Developed a responsive frontend using scalable React.js components, optimizing UI performance and user experience. Gained valuable experience in web development and internal efficiency optimization.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const categoryIcons = {
    Frontend: <Laptop className="w-6 h-6 mr-2 text-blue-400" />,
    Backend: <Server className="w-5 h-5 mr-2 text-green-400" />,
    Advance: <Brain className="w-5 h-5 mr-2 text-red-500" />,
    Tools: <Settings className="w-5 h-5 mr-2 text-purple-400" />,
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 pt-10 pb-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-10 mb-16 items-center">

        <div className="relative w-74 h-74 flex items-center justify-center">
  {/* Gradient Shadow */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-xl opacity-100 z-0" />

  {/* Animated Image */}
  <motion.img
    src={me}
    alt="Krishna Suthar"
    className="relative z-10 rounded-full object-cover w-74 h-74 shadow-xl"
    initial={{ y: 0 }}
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ scale: 1.05 }}
  />
</div>


        <motion.div className="md:w-2/3" variants={itemVariants}>
          <p className="text-4xl md:text-5xl lg:text-5xl mb-4 dark:text-white">
            Hello I'm <span className='font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>Krishna Suthar</span>
          </p>
          <p className="text-lg dark:text-gray-400">
            A passionate MERN Stack Developer with a keen interest in AI & Data Science. I love building dynamic web applications and integrating machine learning models into real-world projects.
          </p>
          <motion.div 
                      className="flex items-center space-x-4 mt-2"
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
        </motion.div>
      </div>

      {/* Skills */}
      <motion.div className="mb-20" variants={itemVariants}>
        <h2 className="text-3xl font-semibold mb-8 text-blue-500 flex items-center">
          <Laptop className="w-10 h-10 mr-2" />Technical Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={i}
              className="rounded-lg p-5 shadow-blue-400 shadow-sm backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <h3 className="font-semibold text-lg mb-3 dark:text-white flex items-center">
                {categoryIcons[group.category]} {group.category}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-center">
                    {item.icon}
                    {item.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience */}
      <motion.div className="mb-20" variants={itemVariants}>
        <h2 className="text-3xl font-semibold mb-8 text-blue-500 flex items-center">
          <Briefcase className="w-10 h-10 mr-2" /> Experience
        </h2>
        <div className="space-y-8 rounded-lg p-3 backdrop-blur-sm">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              className="relative pl-6 border-l-4 border-blue-500 dark:border-blue-500"
              variants={itemVariants}
            >
              <span className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-primary dark:bg-primary-dark" />
              <h3 className="text-xl font-semibold dark:text-white">{job.position}</h3>
              <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                {job.company} &mdash; {job.period}
              </div>
              <p className="text-base dark:text-gray-300">{job.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-semibold mb-8 text-blue-500 flex items-center">
          <GraduationCap className="w-10 h-10 mr-2" /> Education
        </h2>
        <div className="space-y-8 rounded-lg p-3 backdrop-blur-sm">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="relative pl-6 border-l-4 border-blue-500 dark:border-blue-500"
              variants={itemVariants}
            >
              <span className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-accent dark:bg-accent-dark" />
              <h3 className="text-xl font-semibold dark:text-white">{edu.degree}</h3>
              <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                {edu.institution} &mdash; {edu.period}
              </div>
              <p className="text-base dark:text-gray-300">GPA : {edu.GPA}</p>
              <Link className='text-blue-400 underline' to="https://www.ipuranklist.com/student/10317711922">View My Complete Score Card</Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div className="mt-20 mb-[-3rem] max-w-3xl mx-auto text-center" variants={itemVariants}>
  <motion.h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
    Let's Connect
  </motion.h1>
  <motion.p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
    I'm always open to discussing new projects, creative ideas & opportunities to be part of your vision.
  </motion.p>
  <button 
    className="px-4 py-2 flex justify-center items-center mx-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium transition-all duration-150 hover:text-gray-800 hover:shadow-lg">
    <Link to="/contact" className="flex items-center">
      Connect Me
      <ArrowRight size={16} className="ml-2" />
    </Link>
  </button>
</motion.div>
    </motion.div>
  );
};

export default About;
