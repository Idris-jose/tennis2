import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import background from './assets/pexels-cottonbro-5730299.jpg'; // Ensure this exists

export default function Section1() {
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <motion.img
        src={background}
        alt="Background"
        className="w-full h-full object-cover"
        style={{ filter: 'grayscale(1)', mixBlendMode: 'normal' }}
      />
      <div
        className="absolute inset-0 flex items-center justify-center z-10"
        style={{ background: 'rgba(0, 0, 0, 0.2)', backdropFilter: 'contrast(1.2)' }}
      >
        <motion.div
          className="text-center text-white p-4"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          <motion.h1
            className="text-5xl lg:text-8xl font-bold mb-4"
            whileHover={{ scale: 1.05, color: '#FFD700', transition: { duration: 0.3 } }}
          >
            Unleash Your Tennis Strategy
          </motion.h1>
          <motion.p className="md:text-3xl text-2xl mb-8" variantsdp={contentVariants}>
            Pick your dream team of real-world tennis stars,
            <br />
            track their performance, and dominate the leaderboard.
          </motion.p>
          <Link to="/login">
            <motion.button
              className="bg-yellow-500 shadow-amber-300 shadow-lg text-white px-6 py-3 rounded-full"
              whileHover={{ scale: 1.1, backgroundColor: '#facc15' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}