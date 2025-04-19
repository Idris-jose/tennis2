import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Section1() {
  const contentVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
        <motion.div
          className="text-center text-white p-4 max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-600"
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.2 },
            }}
          >
            Unleash Your Tennis Strategy
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200"
            variants={contentVariants}
          >
            Pick your dream team of real-world tennis stars,
            <br />
            track their performance, and dominate the leaderboard.
          </motion.p>
          <Link to="/login">
            <motion.button
              className="bg-yellow-500 text-white px-8 py-4 rounded-full shadow-lg text-lg md:text-xl font-semibold"
              whileHover={{
                scale: 1.05,
                backgroundColor: '#facc15',
                rotate: 2,
                transition: { duration: 0.2 },
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