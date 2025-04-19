import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Dash from './assets/image_fx_ (12).jpg';

export default function Section3() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, rotate: -5 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      rotate: -5,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
    hover: { scale: 1.02, rotate: 2, transition: { duration: 0.2 } },
  };

  return (
    <section className="relative bg-gradient-to-b from-black to-gray-900 py-12">
      <motion.div
        className="flex flex-col items-center justify-center px-4 sm:px-8 text-center"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={containerVariants}
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h1
          className="text-4xl sm:text-6xl lg:text-8xl text-white font-bold mt-5 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-600"
          variants={itemVariants}
        >
          Your Command Center
        </motion.h1>
        <motion.p
          className="text-white text-lg sm:text-xl lg:text-2xl mt-4 opacity-80"
          variants={itemVariants}
        >
          Take control of your tennis fantasy with a sleek, real-time dashboard.
        </motion.p>
        <motion.img
          src={Dash}
          alt="Dashboard Preview"
          className="w-full max-w-4xl object-fill rounded-2xl mt-8 shadow-2xl"
          variants={imageVariants}
          whileHover="hover"
          loading="lazy"
        />
        <motion.div variants={itemVariants} className="mt-8">
          <Link to="/signup">
            <motion.button
              className="bg-yellow-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 text-base sm:text-lg lg:text-xl font-semibold"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Sign Up to Start
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}