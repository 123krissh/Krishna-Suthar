import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import emailjs from 'emailjs-com';
import EarthCanvas from './canvas/Earth';

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    setSubmitSuccess(false);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      })
      .catch(() => {
        setIsSubmitting(false);
        setSubmitError(true);
      });
  };

//   const contactInfo = [
//     {
//       icon: <MapPin size={24} />,
//       title: "Location",
//       info: "New Delhi",
//       link: "https://maps.google.com"
//     },
//     {
//       icon: <Phone size={24} />,
//       title: "Phone",
//       info: "+91 7976617473",
//       link: "tel:+917976617473"
//     },
//     {
//       icon: <Mail size={24} />,
//       title: "Email",
//       info: "krisshsuthar348@gmail.com",
//       link: "mailto:krisshsuthar348@gmail.com"
//     }
//   ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      className="pt-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center max-w-3xl mx-auto mb-5">
        <motion.h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Contact Me
        </motion.h1>
        <motion.p className="text-lg text-gray-700 dark:text-gray-300">
          Have a project in mind or want to work together? Feel free to reach out!
        </motion.p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {/* {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex flex-col items-center text-center p-6"
                whileHover={{ y: -5 }}
                variants={itemVariants}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary-dark/10 flex items-center justify-center text-gray-600 dark:text-gray-200 mb-1">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.info}</p>
              </motion.a>
            ))} */}
          </div>

          <motion.div
                variants={itemVariants}
                className='mt-[-3rem] mb-[-5rem]'>
                <EarthCanvas />
           </motion.div>

        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Talk
            </h2>

            

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block font-medium mb-1 dark:text-gray-200">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border-2 border-blue-500 dark:border-blue-400 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-medium mb-1 dark:text-gray-200">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border-2 border-blue-500 dark:border-blue-400 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block font-medium mb-1 dark:text-gray-200">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-blue-500 dark:border-blue-400 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block font-medium mb-1 dark:text-gray-200">Your Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-blue-500 dark:border-blue-400 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="px-6 py-3 text-white font-bold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </span>
                )}
              </motion.button>
            </form>

            {submitSuccess && (
              <motion.div
                className="mt-4 p-4 bg-green-100 dark:bg-green-800/30 text-green-700 dark:text-green-300 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Your message has been sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {submitError && (
              <motion.div
                className="mb-6 p-4 bg-red-100 dark:bg-red-800/30 text-red-700 dark:text-red-300 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                There was an error sending your message. Please try again.
              </motion.div>
            )}

          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
