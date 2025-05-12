import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import ThemeToggle from './components/ThemeToggle';
import Loader from './components/Loader';
import ParticlesBackground from './components/ParticlesBackground';
import './index.css';

const App = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    // document.title = `Krishna Suthar - ${theme === 'dark' ? 'Dark' : 'Light'} Mode`; // Dynamic title based on theme
  }, [theme]);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col relative bg-white dark:bg-gray-900 transition-colors duration-300">
        <ParticlesBackground theme={theme} />
        <Navbar theme={theme} />
        {/* <ThemeToggle theme={theme} toggleTheme={toggleTheme} /> */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-24 z-10 relative">
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/about" element={<About theme={theme} />} />
            <Route path="/projects" element={<Projects theme={theme} />} />
            <Route path="/achievements" element={<Achievements theme={theme} />} />
            <Route path="/contact" element={<Contact theme={theme} />} />
          </Routes>
        </main>
        <Footer theme={theme} />
      </div>
    </Router>
  );
};

export default App;
