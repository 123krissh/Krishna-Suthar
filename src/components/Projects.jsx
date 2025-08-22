import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Link as LinkIcon } from 'lucide-react';
import EC from '../assets/EC.jpg';
import app from '../assets/app1.png';
import powerBi from '../assets/powerBi.png';
import ca from '../assets/ca.jpg';
import bt from '../assets/bt.jpeg';
import cr from '../assets/cr.jpg';
import sd from '../assets/sd.webp';
import ai from '../assets/ai.webp';
import portfolio from '../assets/portfolio.png';
import rag from '../assets/RAG.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectCategories = [
    { value: 'all', label: 'All' },
    { value: 'web', label: 'Web' },
    { value: 'app', label: 'Mobile App' },
    { value: 'ml', label: 'Machine Learning' },
    { value: 'dl', label: 'Deep Learning' },
    { value: 'ai', label: 'AI' },
  ];

  const projects = [
    {
      title: "RAG Chatbot App",
      description: "This is a Streamlit-based RAG (Retrieval-Augmented Generation) application that allows users to upload documents (.pdf, .docx, .txt) and interact with them through a chatbot",
      image: rag,
      technologies: ["AI", "Python", "Gemini", "RAG", "LLm", "LangChain", "Qdrant"],
      category: "ai",
      demoLink: "https://123krissh-csi-assignments-assignmentweek8app-8yehmx.streamlit.app/",
      githubLink: "https://github.com/123krissh/CSI-Assignments/tree/main/AssignmentWeek8"
    },
    {
      title: "GiftHub E-commerce Platform",
      description: "Full-stack E-Commerce MERN app with JWT auth, Redux, Razorpay, and Admin Dashboard with inventory tracking and user analytics.",
      image: EC,
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay"],
      category: "web",
      demoLink: "https://archana-gift-hub-gc2z.vercel.app/",
      githubLink: "https://github.com/123krissh/Archana-GiftHub"
    },
    {
      title: "Deep Research AI Agentic System",
      description: "Dual-agent system using Tavily and LangGraph for intelligent information gathering and answer generation.",
      image: ai,
      technologies: ["AI", "Python", "Gemini", "Tavily", "LangChain", "LangGraph"],
      category: "ai",
      githubLink: "https://github.com/123krissh/Deep-Research-AI-Agentic-System"
    },
    {
      title: "Student Record Tracking App",
      description: "Flutter-Django app for student management with internships, projects, and admin dashboard.",
      image: app,
      technologies: ["Flutter", "Django"],
      category: "app",
      githubLink: "https://github.com/123krissh/student-info-management"
    },
    {
      title: "HR Analytics Dashboard",
      description: "Interactive dashboard built using Power BI with advanced filtering and drill-down charts.",
      image: powerBi,
      technologies: ["Power BI", "Data Analytics", "Data visualization"],
      category: "ml",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio with 3D animations, framer-motion transitions, and dark/light mode toggle.",
      image: portfolio,
      technologies: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
      category: "web",
      demoLink: "https://krishna-suthar.vercel.app/",
      githubLink: "https://github.com/123krissh/Krishna-Suthar"
    },
    {
      title: "Cyberbullying Analysis",
      description: "NLP + ML-based analysis of cyberbullying behavior using social media datasets and supervised algorithms.",
      image: ca,
      technologies: ["Machine Learning", "NLP", "Python", "Pandas"],
      category: "ml",
      githubLink: "https://github.com/123krissh/Cyberbullying_Analysis"
    },
    {
      title: "Brain Tumor Detection",
      description: "Conducted a comparative analysis of YOLOv3, YOLOv5, YOLOv8, YOLOv9, YOLOv10, YOLOv11, and CNN object detection models on brain MRI datasets for tumor detection.",
      image: bt,
      technologies: ["YOLO", "CNN", "Python", "TensorFlow", "PyTorch"],
      category: "dl",
      githubLink: "https://github.com/123krissh/Brain-Tumor-Detection"
    },
    {
      title: "Surveillance Detection System",
      description: "Real-time suspicious activity detection using YOLOv8, with interactive user interface using Flask & web dashboard.",
      image: sd,
      technologies: ["YOLOv8", "Flask", "TensorFlow", "PyTorch", "OpenCV"],
      category: "dl",
      githubLink: "https://github.com/123krissh/Surveillance-Detection-System"
    },
    {
      title: "Crop Rcommendation System",
      description: "Crop Recommendation System using machine learning algorithms, with interactive user interface using Flask & web",
      image: cr,
      technologies: ["Machine Learning", "Logistic Regression", "Random Forest", "Dicision Tree", "Python, Flask", "HTML", "CSS"],
      category: "ml",
      githubLink: "https://github.com/123krissh/Crop_Recommendation_System"
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeFilter);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <div className="pt-6">
      <div className="text-center max-w-3xl mx-auto mb-10">
  <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
    My Projects
  </h1>
  <p className="text-lg text-gray-700 dark:text-gray-300">
    Explore my recent work across various domains including web development, mobile applications, AI solutions, and design projects.
  </p>
</div>

      <div className="flex flex-wrap gap-2 mb-8">
        {projectCategories.map(({ value, label }) => (
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
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="shadow-blue-400 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-55"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold dark:text-white">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-800 dark:text-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4">
                  {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 text-sm"
                  >
                    <LinkIcon size={14} className="mr-1" />
                    View
                  </a>
                  )}
                   {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 text-sm"
                  >
                    <Github size={14} className="mr-1" />
                    GitHub
                  </a>
                   )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProjects.length === 0 && (
        <div className="text-center py-10">
          <p className="text-xl text-gray-500 dark:text-gray-300">No projects found in this category.</p>
        </div>
      )}

      <div className="text-center mt-10">
        <a
          href="https://github.com/123krissh?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="w-80 px-4 py-2 flex justify-center items-center mx-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold transition-all duration-150 hover:text-gray-800 hover:shadow-lg"
          // className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
        >
          View more Projects on GitHub
          <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
