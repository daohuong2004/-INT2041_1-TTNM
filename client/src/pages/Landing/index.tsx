import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Accessibility, Gamepad, Book, Video, Award, Globe, ArrowRight, HandMetal, Braces } from "lucide-react";



{/* Counter Component */ }
const CounterComponent = ({ from, to, duration }: { from: number; to: number; duration: number }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * (to - from) + from));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration]);

  return <>{count.toLocaleString()}</>;
};

interface IProps {
  className?: string;
}

function Landing(props: IProps) {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push("/login");
  };

  const handleSignUpClick = () => {
    history.push("/signup");
  };

  // Navbar với thiết kế mới
  const CustomNavbar: React.FC = () => (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="w-full bg-gradient-to-r from-indigo-800 to-indigo-600 p-3 shadow-lg fixed top-0 ml-0 z-10"
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-white text-3xl font-bold flex items-center gap-2">
          <img className="w-10 h-10 object-cover" src={'/assets/alternate_logo.png'} alt="Sign Language" />
          <span className="text-yellow-300 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
            SignPal
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-yellow-300 flex items-center gap-1 transition duration-300">
            <Globe size={18} />
            <span>Home</span>
          </Link>
          <Link to="/about" className="text-white hover:text-yellow-300 flex items-center gap-1 transition duration-300">
            <span>About</span>
          </Link>
          <Link to="/features" className="text-white hover:text-yellow-300 flex items-center gap-1 transition duration-300">
            <span>Features</span>
          </Link>
          <Link to="/contact" className="text-white hover:text-yellow-300 flex items-center gap-1 transition duration-300">
            <span>Contact</span>
          </Link>
        </div>

        <div className="flex space-x-3">
          <Link
            to="/login"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-indigo-900 px-5 py-2 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition duration-300 font-medium shadow-md"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="bg-white text-indigo-800 px-5 py-2 rounded-lg hover:bg-gray-100 transition duration-300 font-medium shadow-md"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </motion.nav>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      <CustomNavbar />

      {/* Hero Section */}
      {/* Điều chỉnh vị trí các nút trong Hero Section */}
      <div className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 lg:pr-16 mb-12 lg:mb-0"
            >
              <div className="flex items-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <HandMetal size={24} className="text-white" />
                </motion.div>
                <div className="ml-4 bg-blue-100 text-blue-800 text-sm font-semibold py-1 px-3 rounded-full">
                  Innovative Sign Language Platform
                </div>
              </div>

              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-indigo-800 via-indigo-600 to-indigo-800 bg-clip-text text-transparent"
              >
                Learn & Translate Sign Language For Everyone
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-gray-600 text-lg mb-10 leading-relaxed"
              >
                Accessible language learning and translation tools designed for people with disabilities. Empowering individuals to connect, communicate, and explore sign language with ease.
              </motion.p>

              {/* Thêm margin-top để dịch xuống */}
              <div className="flex flex-wrap gap-4 mb-12 mt-16">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  onClick={handleSignUpClick}
                  className="flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-xl font-medium shadow-md"
                >
                  Get Started
                  <ArrowRight className="ml-2" size={20} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="flex items-center px-8 py-4 bg-white text-indigo-800 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 shadow-sm"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>

            {/* Right side hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full lg:w-1/2 relative"
            >


            </motion.div>
          </div>
        </div>
      </div>


      {/* Stats Section - Horizontal Icons Layout */}
      <div className="py-12 bg-white relative overflow-hidden border-t border-gray-100 z-0">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full opacity-40 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-50 rounded-full opacity-40 -ml-32 -mb-32"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Growing Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join thousands of users who are already breaking communication barriers with SignPal
            </p>
          </motion.div>

          {/* Stats Row - Horizontal Icons */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-16 lg:gap-20">
            {/* Active Users */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-row items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <div className="relative">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute -top-3 -right-3 bg-yellow-400 text-xs font-bold text-indigo-900 py-1 px-2 rounded-full"
                  >
                    Growing
                  </motion.span>
                  <motion.p
                    initial={{ scale: 0.7 }}
                    whileInView={{ scale: [0.7, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-800"
                  >
                    10K+
                  </motion.p>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Active Users</h3>
                <p className="text-sm text-gray-600">People learning sign language</p>
              </div>
            </motion.div>

            {/* Sign Words */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-row items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <div>
                <div className="relative">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute -top-3 -right-3 bg-indigo-500 text-xs font-bold text-white py-1 px-2 rounded-full"
                  >
                    Expanding
                  </motion.span>
                  <motion.p
                    initial={{ scale: 0.7 }}
                    whileInView={{ scale: [0.7, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-700"
                  >
                    500+
                  </motion.p>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Sign Words</h3>
                <p className="text-sm text-gray-600">Comprehensive dictionary</p>
              </div>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-row items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <div className="relative">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="absolute -top-3 -right-3 bg-green-400 text-xs font-bold text-green-900 py-1 px-2 rounded-full"
                  >
                    Always On
                  </motion.span>
                  <motion.p
                    initial={{ scale: 0.7 }}
                    whileInView={{ scale: [0.7, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800"
                  >
                    24/7
                  </motion.p>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Support</h3>
                <p className="text-sm text-gray-600">Continuous assistance</p>
              </div>
            </motion.div>

            {/* New users counter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-row items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <div className="relative">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="absolute -top-3 -right-3 bg-pink-400 text-xs font-bold text-pink-900 py-1 px-2 rounded-full"
                  >
                    This Week
                  </motion.span>
                  <motion.p
                    initial={{ scale: 0.7 }}
                    whileInView={{ scale: [0.7, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800"
                  >
                    <CounterComponent from={0} to={847} duration={3} />
                  </motion.p>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">New Users</h3>
                <p className="text-sm text-gray-600">Joining our community</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              Empowering Features for Everyone
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600"
            >
              Our platform offers comprehensive tools designed to make sign language accessible to all.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Disability Support Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
            >
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 h-2 w-full"></div>
              <div className="p-8">
                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-200 transition-all">
                  <Accessibility size={32} className="text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-indigo-800 mb-4 text-center">Disability Support</h2>
                <p className="text-gray-600 mb-6 text-center">
                  Video learning tools, sign language integration, and captions to make learning accessible and engaging.
                </p>
                <ul className="text-left text-gray-600 mb-8 space-y-3">
                  <li className="flex items-center">
                    <span className="bg-green-100 p-1 rounded-full mr-2">
                      <Video size={14} className="text-green-600" />
                    </span>
                    Sign language video lessons
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-100 p-1 rounded-full mr-2">
                      <HandMetal size={14} className="text-green-600" />
                    </span>
                    Sign language integration
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-100 p-1 rounded-full mr-2">
                      <Gamepad size={14} className="text-green-600" />
                    </span>
                    Sign language games
                  </li>
                </ul>

                <Link
                  to="/features"
                  className="block w-full bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-3 px-6 rounded-lg font-medium hover:from-indigo-700 hover:to-indigo-900 transition duration-300 text-center group-hover:shadow-md"
                >
                  <span className="flex items-center justify-center">
                    Explore Now
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Learning Tools Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
            >
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 w-full"></div>
              <div className="p-8">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-all">
                  <Book size={32} className="text-yellow-600" />
                </div>
                <h2 className="text-2xl font-bold text-yellow-600 mb-4 text-center">Learning Tools</h2>
                <p className="text-gray-600 mb-6 text-center">
                  Interactive lessons, practice exercises, and comprehensive dictionary to master sign language.
                </p>
                <ul className="text-left text-gray-600 mb-8 space-y-3">
                  <li className="flex items-center">
                    <span className="bg-green-100 p-1 rounded-full mr-2">
                      <Book size={14} className="text-green-600" />
                    </span>
                    Comprehensive dictionary
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-100 p-1 rounded-full mr-2">
                      <Video size={14} className="text-green-600" />
                    </span>
                    Interactive video tutorials
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-100 p-1 rounded-full mr-2">
                      <Award size={14} className="text-green-600" />
                    </span>
                    Progress tracking system
                  </li>
                </ul>

                <Link
                  to="/learning"
                  className="block w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 px-6 rounded-lg font-medium hover:from-yellow-600 hover:to-yellow-700 transition duration-300 text-center group-hover:shadow-md"
                >
                  <span className="flex items-center justify-center">
                    Start Learning
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Translation Tools Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
            >
              <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 w-full"></div>
              <div className="p-8">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-all">
                  <Braces size={32} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">Translation Tools</h2>
                <p className="text-gray-600 mb-6 text-center">
                  Real-time translation between text and sign language to bridge communication gaps.
                </p>
                <ul className="text-left text-gray-600 mb-8 space-y-3">
                  <li className="flex items-center">
                    <span className="bg-green-100 p-1 rounded-full mr-2">
                      <HandMetal size={14} className="text-green-600" />
                    </span>
                    Text to sign language
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-100 p-1 rounded-full mr-2">
                      <Award size={14} className="text-green-600" />
                    </span>
                    Sign language to text
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-100 p-1 rounded-full mr-2">
                      <Gamepad size={14} className="text-green-600" />
                    </span>
                    Real-time translation
                  </li>
                </ul>

                <Link
                  to="/translator"
                  className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition duration-300 text-center group-hover:shadow-md"
                >
                  <span className="flex items-center justify-center">
                    Try Translator
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>


      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-10 shadow-lg"
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 md:pr-10 mb-10 md:mb-0">
                <div className="bg-indigo-100 text-indigo-800 inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Personalized Learning
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Find Your Perfect Mentor</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Connect with expert mentors who specialize in sign language education. Get personalized guidance and support on your learning journey.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white rounded-full p-2 mr-4 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Expert Guidance</h3>
                      <p className="text-gray-600">Get personalized assistance from certified sign language instructors.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white rounded-full p-2 mr-4 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Flexible Scheduling</h3>
                      <p className="text-gray-600">Book sessions at your convenience, with 24/7 availability.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-3 px-8 rounded-lg font-medium hover:from-indigo-700 hover:to-indigo-900 transition shadow-md"
                  >
                    Find a Mentor
                  </motion.button>
                </div>
              </div>


            </div>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              What Our Users Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Discover how SignPal is transforming lives and making sign language accessible to everyone.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-6">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 mb-6 italic">
                  {index === 0 && "SignPal has been a game-changer for my deaf cousin. The translation tools make communication so much easier, and the learning resources are incredibly helpful."}
                  {index === 1 && "As a sign language teacher, I recommend SignPal to all my students. The interactive lessons and practice tools help them progress much faster than traditional methods."}
                  {index === 2 && "The mentor connection feature helped me find the perfect teacher for my learning style. I've made more progress in two months than I did in a year of self-study."}
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'women' : 'men'}/${(index + 1) * 12}.jpg`}
                      className="w-full h-full object-cover"
                      alt="User"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      {index === 0 ? "Michael Rodriguez" : index === 1 ? "Emma Thompson" : "David Liu"}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {index === 0 ? "Student • 8 months user" : index === 1 ? "Sign Language Teacher • 2 years user" : "Professional • 1 year user"}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-indigo-600 to-indigo-900 rounded-2xl p-12 text-center text-white shadow-xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your Sign Language Journey?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
              Join thousands of users who are breaking communication barriers and learning sign language with SignPal.
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSignUpClick}
                className="bg-white text-indigo-800 py-4 px-8 rounded-lg font-bold shadow-md hover:bg-gray-100 transition"
              >
                Sign Up for Free
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white py-4 px-8 rounded-lg font-bold hover:bg-white hover:text-indigo-800 transition"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer - New */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="mb-8 md:mb-0">
              <Link to="/" className="text-2xl font-bold flex items-center gap-2 mb-6">
                <img className="w-8 h-8 object-cover" src={'/assets/alternate_logo.png'} alt="Sign Language" />
                <span className="text-yellow-300">SignPal</span>
              </Link>
              <p className="text-gray-400 mb-6">
                Making sign language accessible to everyone through innovative technology and personalized learning.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
              </div>
            </div>


          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 SignPal. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;