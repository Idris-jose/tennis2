import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import image3 from './assets/pexels-shkrabaanthony-6827094.jpg';

export default function Section5() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, ease: 'easeOut' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, rotate: -3 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hover: { scale: 1.02, rotate: 1, transition: { duration: 0.2 } },
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-100 py-12">
      <motion.div
        className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-600 mb-4"
            variants={itemVariants}
          >
            Ready to <br /> Serve Up <br /> Victory?
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-700 mt-4"
            variants={itemVariants}
          >
            Sign up now and start building your fantasy tennis legacy.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-6"
            variants={itemVariants}
          >
            <Link to="/signup">
              <motion.button
                className="bg-yellow-500 text-white px-8 py-3 rounded-full shadow-md hover:bg-yellow-400 text-base md:text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Sign Up to Start
              </motion.button>
            </Link>
            <Link to="/login">
              <motion.button
                className="border-2 border-yellow-500 text-yellow-500 px-8 py-3 rounded-full shadow-md hover:bg-yellow-500 hover:text-white text-base md:text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Log In
              </motion.button>
            </Link>
          </motion.div>
        </div>
        <motion.img
          src={image3}
          alt="Tennis Action"
          className="w-full lg:w-[40rem] h-64 md:h-80 lg:h-[36rem] object-cover rounded-2xl shadow-2xl filter grayscale"
          variants={imageVariants}
          whileHover="hover"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}