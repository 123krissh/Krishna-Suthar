import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, Database, Brain, BarChart, FolderGit2, Cloud, Palette, Briefcase, Lightbulb, Users, BookOpen, BotIcon, ArrowRight,
  GithubIcon,
  LinkedinIcon
} from 'lucide-react';
import { FaReact, FaHtml5, FaJava, FaCss3Alt } from "react-icons/fa";
import { DiPython, DiJavascript1 } from 'react-icons/di';
import { FaNode } from "react-icons/fa6";
import { SiLeetcode, SiMysql } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import me from '../assets/Me.jpg';
import resume from '../assets/KRISHNA SUTHAR RESUME.pdf';
import ComputersCanvas from './canvas/Computers';

// Skills Carousel Component
const SkillsCarousel = ({ skills }) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition(prev => (prev + 1) % skills.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [skills.length]);
  
  const visibleSkills = [];
  const numVisible = Math.min(skills.length, 6); // Show 6 skills at a time
  
  for (let i = 0; i < numVisible; i++) {
    const index = (currentPosition + i) % skills.length;
    visibleSkills.push(skills[index]);
  }
  
  return (
    <div className="py-8">
      <div className="flex justify-center items-center gap-8 flex-wrap">
        {visibleSkills.map((skill, index) => (
          <motion.div
            key={`${skill.name}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full backdrop-blur-sm shadow-lg flex items-center justify-center mb-3 border-2 border-blue-100 dark:border-blue-900">
              {React.cloneElement(skill.icon, { size: 36, className: skill.color })}
            </div>
            <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  // Social Links
  const socialLinks = [
    { icon: <GithubIcon size={20} />, url: 'https://github.com/123krissh' },
    { icon: <LinkedinIcon size={20} />, url: 'https://www.linkedin.com/in/krishana-suthar/' },
    { icon: <SiLeetcode size={20} />, url: 'https://leetcode.com/u/Krishna348/' },
  ];

  // Skill data
  const skills = [
    { name: "React.js", icon: <FaReact />, color: "text-blue-500" },
    { name: "Node.js", icon: <FaNode />, color: "text-green-600" },
    { name: "Python", icon: <DiPython />, color: "text-blue-700" },
    { name: "Java", icon: <FaJava />, color: "text-blue-400" },
    { name: "JavaScript", icon: <DiJavascript1 />, color: "text-yellow-500" },
    { name: "Three.js", icon: <TbBrandThreejs />, color: "text-white" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-600" },
    { name: "HTML5", icon: <FaHtml5 />, color: "text-red-500" },
    { name: "Git", icon: <FolderGit2 />, color: "text-orange-500" },
    { name: "MongoDB", icon: <Database />, color: "text-green-600" },
    { name: "SQL", icon: <SiMysql />, color: "text-yellow-600" },
    { name: "ML", icon: <Brain />, color: "text-purple-500" },
    { name: "Data Science", icon: <BarChart />, color: "text-indigo-500" },
    { name: "AI", icon: <BotIcon />, color: "text-yellow-600" },
  ];

  // Research work data
  const researchProjects = [
    {
      title: "Cyberbullying Behavior Analysis",
      description: "Analysing Cyberbullying Behavior in Social Media Using Supervised ML Algorithms and NLP",
      year: "Research Paper — 2024",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Cf_C804AAAAJ&citation_for_view=Cf_C804AAAAJ:u-x6o8ySG0sC"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        className="min-h-[calc(100vh-170px)] flex flex-col md:flex-row items-center justify-center gap-8 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      > 
        <motion.div className="flex-1" variants={itemVariants}>
          <span className="inline-block text-sm font-semibold text-blue-400 mb-2 px-3 py-1 rounded-full bg-blue-900/30 backdrop-blur-sm">Welcome to my portfolio</span>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 text-gray-700 dark:text-gray-300">
            Hello, I'm{" "}
            <motion.span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: "200% 200%" }}>
              Krishna Suthar</motion.span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-4 text-gray-600 dark:text-purple-300"
            variants={itemVariants}
          >
            Software Developer & Data Scientist
          </motion.p>
          
          <motion.p 
            className="mb-8 max-w-lg text-gray-700 dark:text-gray-100"
            variants={itemVariants}
          >
            I transform complex ideas into elegant, user-friendly applications. Specializing in <span className="text-blue-400">full-stack development</span> with a focus on <span className='text-purple-400'>AI integration</span> and <span className='text-cyan-400'>data visualization</span>.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <Link to="/projects" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white dark:text-white rounded-lg font-semibold transition-all duration-150 hover:text-gray-800 hover:shadow-blue-500 shadow-lg">
              View My Work
            </Link>
            <a href={resume} download className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white dark:text-white rounded-lg font-semibold transition-all duration-150 hover:text-gray-800 hover:shadow-blue-500 shadow-lg">
              My Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex flex-wrap lg:justify-start gap-4 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-xl p-2 rounded-lg hover:bg-blue-400/5 border border-transparent hover:border-blue-400/20"
                aria-label={`Follow on ${social.name || "social"}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

        </motion.div>
        
       {/* 3D Canvas */}
       <motion.div 
            className="mt-[-30px] w-full md:w-1/2 h-[350px] sm:h-[400px] md:h-[500px] flex justify-center items-center"
            variants={itemVariants}
           // whileHover={{ scale: 1.05 }}
        >
            <ComputersCanvas />
      </motion.div>

      </motion.div>

    <motion.div className="w-full flex justify-center" 
    initial={{ y: 0 }}
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ scale: 1.05 }}>
  <div className="inline-block mb-30 px-3 py-4 mt-[-10rem] lg:mt-[-2rem] rounded-full bg-blue-900/50 backdrop-blur-sm shadow-lg">
    <button
      onClick={() => scrollToSection('about')}
      className="flex justify-center items-center cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-blue-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </button>
  </div>
</motion.div>
     
      {/* About Me Section */}
      <motion.section 
        id="about"
        // ref={sectionRefs.about}
        className="py-16 rounded-2xl backdrop-blur-sm border border-blue-900 shadow-lg"
        variants={sectionVariants}
        // initial="hidden"
        // animate={visibleSection === "about" ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <span className="inline-block text-sm font-semibold text-blue-400 mb-2 px-3 py-2 rounded-full bg-blue-900/30 backdrop-blur-sm">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-700 dark:text-gray-300">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div 
              className="md:w-1/3"
              variants={itemVariants}
            >
              <div className="rounded-full overflow-hidden shadow-xl mt-[-2rem]">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                  <div className="">
                    <img 
                      src={me} 
                      alt="Krishna Suthar"
                      className="relative z-10 rounded-full object-cover w-100 h-100 shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="md:w-2/3"
              variants={itemVariants}
            >
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a Full Stack web developer and AI enthusiast, passionate about building modern, intelligent, and visually compelling web applications. My journey started with a love for creating clean, responsive, and interactive user interfaces, which gradually expanded into the realms of AI, machine learning, and smart systems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                With experience in  Machine learning, Deep learning, React, Tailwind CSS, and MERN stack development, I specialize in crafting seamless, intuitive, and accessible digital experiences. Beyond UI/UX, I have a deep interest in integrating AI-driven solutions into applications—whether it's computer vision, predictive analytics, or automation.
              </p>
              <div className="flex flex-wrap gap-4">
                {/* <div className="flex items-center gap-2">
                  <span className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500">
                    <Briefcase size={24} />
                  </span>
                  <div>
                    <h3 className="font-semibold dark:text-gray-200">7+ Years</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                  </div>
                </div> */}
                <div className="flex items-center gap-2">
                  <span className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-500">
                    <Code size={24} />
                  </span>
                  <div>
                    <h3 className="font-semibold dark:text-gray-200">10+</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Projects</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-500">
                    <BookOpen size={24} />
                  </span>
                  <div>
                    <h3 className="font-semibold dark:text-gray-200">1</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Publications</p>
                  </div>
                </div>
              </div>
              
              <motion.div className="mt-8" variants={itemVariants}>
        <Link 
          to="/about"
          className="px-2 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold transition-all duration-150 hover:text-gray-800 hover:shadow-md inline-flex items-center"
        >
          Learn more about my journey
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </motion.div>

      <motion.div className="mt-4" variants={itemVariants}>
        <Link 
          to="/projects"
          className="px-2 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold transition-all duration-150 hover:text-gray-800 hover:shadow-md inline-flex items-center"
        >
          View My Projects
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills"
        // ref={sectionRefs.skills}
        className="py-20"
        variants={sectionVariants}
        // initial="hidden"
        // animate={visibleSection === "skills" ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-6 py-5">
          <motion.div className="text-center mb-4" variants={itemVariants}>
            <span className="inline-block text-sm font-semibold text-blue-400 mb-2 px-3 py-1 rounded-full bg-blue-900/30 backdrop-blur-sm">
              My Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-700 dark:text-gray-300">
              Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          </motion.div>

          <div className="mb-10">
            <SkillsCarousel skills={skills} />
          </div>

          <motion.div variants={itemVariants} className="backdrop-blur-sm border border-blue-900 p-4 rounded-2xl shadow-lg">
            <h3 className="text-xl text-center font-bold mb-6 text-gray-800 dark:text-gray-200">Professional Development</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500">
                  <Code size={20} />
                </span>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">Continuous Learning</h4>
                  {/* <p className="text-gray-600 dark:text-gray-400">Committed to staying updated with the latest technologies and methodologies.</p> */}
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-500">
                  <Lightbulb size={20} />
                </span>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">Problem Solving</h4>
                  {/* <p className="text-gray-600 dark:text-gray-400">Analytical approach to complex challenges with innovative solutions.</p> */}
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-500">
                  <Users size={20} />
                </span>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">Team Collaboration</h4>
                  {/* <p className="text-gray-600 dark:text-gray-400">Experienced in agile environments, focusing on communication and teamwork.</p> */}
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-red-500">
                  <Palette size={20} />
                </span>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">User-Interactive Design</h4>
                  {/* <p className="text-gray-600 dark:text-gray-400">Creating intuitive interfaces with focus on accessibility and user experience.</p> */}
                </div>
              </div>
            </div> 
          </motion.div>
        </div>
      </motion.section>

      {/* Research Work Section */}
      <motion.section 
        id="research"
        // ref={sectionRefs.research}
        className="py-10"
        variants={sectionVariants}
        // initial="hidden"
        // animate={visibleSection === "research" ? "visible" : "hidden"}
      >
<div className="w-full flex justify-center">
  <div className="w-full max-w-7xl px-6">
    <motion.div className="text-center mb-16" variants={itemVariants}>
      <span className="inline-block text-sm font-semibold text-blue-400 mb-3 px-4 py-1 rounded-full bg-blue-900/30 backdrop-blur-sm shadow-sm">
        Research Work
      </span>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-700 dark:text-gray-300">
        Academic <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Research</span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded"></div>
    </motion.div>

    {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
      {researchProjects.map((project, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="h-full"
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-transparent hover:border-blue-400/50 transition-all duration-300 h-full flex flex-col max-w-sm">
            <span className="text-xs font-medium text-blue-400 mb-1">{project.year}</span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 leading-snug">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow mb-4">
              {project.description}
            </p>
            <Link
              to={project.link}
              className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 text-sm font-medium inline-flex items-center mt-auto transition-colors"
            >
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      ))}
    </div> */}

    <div className="">
  {researchProjects.map((project, index) => (
    <motion.div
      key={index}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={itemVariants}
      className="h-full"
    >
      <div className="relative backdrop-blur-sm border-l-4 border-blue-500 p-6 rounded-xl shadow-md w-full">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
          {project.title}
        </h3>
        <span className="text-sm text-gray-500 dark:text-gray-300 mb-4 block">{project.year}</span>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {project.description}
        </p>
        <Link
              to={project.link}
              className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 text-sm font-medium inline-flex items-center mt-auto transition-colors"
            >
              Google Scholar
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
      </div>
    </motion.div>
  ))}
</div>

</div>
</div>

<motion.div className="mt-15 mb-[-2rem] max-w-3xl mx-auto text-center" variants={itemVariants}>
  <motion.h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
    Let's Connect
  </motion.h1>
  <motion.p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
    I'm always open to discussing new projects, creative ideas & opportunities to be part of your vision.
  </motion.p>
  
    <Link to="/contact" className="px-1 w-40 py-2 flex justify-center items-center mx-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold transition-all duration-150 hover:text-gray-800 hover:shadow-lg">
      Connect Me
      <ArrowRight size={16} className="ml-2" />
    </Link>
    </motion.div>
    </motion.section>
    </div>
  );
};

export default Home;