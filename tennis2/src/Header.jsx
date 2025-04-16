import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 0.9, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const linkVariants = {
    hover: { scale: 1.1, color: '#FFD700', transition: { duration: 0.3 } },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Calculate header height and handle resize
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    // Close mobile menu on desktop
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  // Handle keyboard navigation for accessibility
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.div
      className="flex justify-center bg-gray-500 sticky top-0 z-50"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      ref={headerRef}
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-screen-2xl text-white p-4">
        <div className="flex justify-between items-center w-full">
          <motion.h1
            className="font-bold text-lg md:text-2xl"
            whileHover={{ scale: 1.05 }}
          >
            Tennis Elite Fantasy Hub
          </motion.h1>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-white text-2xl hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Navbar Links */}
        <nav role="navigation">
          <motion.div
            className={`flex flex-col md:flex-row items-center gap-6 md:gap-0 absolute md:static left-0 w-full md:w-auto bg-gray-700 md:bg-transparent p-6 md:p-4 z-40 md:shadow-none ${
              isMenuOpen ? 'flex' : 'hidden md:flex'
            }`}
            style={{ top: `${headerHeight}px` }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onKeyDown={handleKeyDown}
          >
            <motion.div className="px-4 md:px-6 min-w-fit" variants={linkVariants} whileHover="hover">
              <Link to="/" className="hover:underline whitespace-nowrap" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </motion.div>
            <motion.div className="px-4 md:px-6 min-w-fit" variants={linkVariants} whileHover="hover">
              <Link to="/team/create" className="hover:underline whitespace-nowrap" onClick={() => setIsMenuOpen(false)}>
                Create Team
              </Link>
            </motion.div>
            <motion.div className="px-4 md:px-6 min-w-fit" variants={linkVariants} whileHover="hover">
              <Link to="/live-scoring" className="hover:underline whitespace-nowrap" onClick={() => setIsMenuOpen(false)}>
                Live Scoring
              </Link>
            </motion.div>
            <motion.div className="px-4 md:px-6 min-w-fit" variants={linkVariants} whileHover="hover">
              <Link to="/leaderboards" className="hover:underline whitespace-nowrap" onClick={() => setIsMenuOpen(false)}>
                Leaderboards
              </Link>
            </motion.div>
            <motion.div className="px-4 md:px-6 min-w-fit" variants={linkVariants} whileHover="hover">
              <span className="text-gray-400 cursor-not-allowed whitespace-nowrap">Community (Coming Soon)</span>
            </motion.div>

            {/* Login/Sign Up Button */}
            <motion.div className="px-4 md:px-6 min-w-fit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <button className="mt-4 md:mt-0 hover:bg-gray-600 transition-all duration-300 text-sm md:text-base px-4 py-2 rounded whitespace-nowrap">
                  Login/Sign Up
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </nav>
      </div>
    </motion.div>
  );
}