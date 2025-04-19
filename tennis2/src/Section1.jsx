import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import background from './assets/pexels-cottonbro-5730299.jpg'; // Ensure this exists

export default function Section1() {
  const contentVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.5, 
        ease: 'easeOut' 
      }
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src={background}
        alt="Background"
        className="w-full h-full object-cover filter grayscale"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 backdrop-contrast-125">
        <motion.div
          className="text-center text-white p-4"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          <motion.h1
            className="text-5xl lg:text-8xl font-bold mb-4"
            whileHover={{ 
              scale: 1.03, 
              color: '#FFD700', 
              transition: { duration: 0.2 } 
            }}
          >
            Unleash Your Tennis Strategy
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl mb-8"
            variants={contentVariants}
          >
            Pick your dream team of real-world tennis stars,
            <br />
            track their performance, and dominate the leaderboard.
          </motion.p>
          <Link to="/login">
            <motion.button
              className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-lg"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: '#facc15',
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}