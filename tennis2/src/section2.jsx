import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import background from './assets/pexels-cottonbro-5730299.jpg';
import pic2 from './assets/pexels-shkrabaanthony-6827094.jpg';
import pic3 from './assets/pexels-cottonbro-5741058.jpg';

export default function Section2() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
  };

  return (
    <section className="relative bg-black py-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Build Your Team */}
          <motion.div
            className="bg-white rounded-lg shadow-md flex flex-col items-center justify-between p-6"
            variants={itemVariants}
            whileHover="hover"
          >
            <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-4">
              Build Your Team
            </h1>
            <img
              src={background}
              alt="Build Your Team"
              className="h-48 sm:h-56 lg:h-64 w-full object-cover rounded-xl mb-4"
              loading="lazy"
            />
            <p className="text-center text-gray-600 mb-6">
              Select from top ATP & WTA players. Optimize your roster.
            </p>
            <Link to="/team/create">
              <motion.button
                className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-yellow-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Create Team
              </motion.button>
            </Link>
          </motion.div>

          {/* Live Performance Tracking */}
          <motion.div
            className="bg-white rounded-lg shadow-md flex flex-col items-center justify-between p-6"
            variants={itemVariants}
            whileHover="hover"
          >
            <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-4">
              Live Performance Tracking
            </h1>
            <img
              src={pic2}
              alt="Live Performance Tracking"
              className="h-48 sm:h-56 lg:h-64 w-full object-cover rounded-xl mb-4"
              loading="lazy"
            />
            <p className="text-center text-gray-600 mb-6">
              Real-time stats from matches worldwide.
            </p>
            <Link to="/live-scoring">
              <motion.button
                className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-yellow-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                View Live Scores
              </motion.button>
            </Link>
          </motion.div>

          {/* Compete Globally */}
          <motion.div
            className="bg-white rounded-lg shadow-md flex flex-col items-center justify-between p-6"
            variants={itemVariants}
            whileHover="hover"
          >
            <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-4">
              Compete Globally
            </h1>
            <img
              src={pic3}
              alt="Compete Globally"
              className="h-48 sm:h-56 lg:h-64 w-full object-cover rounded-xl mb-4"
              loading="lazy"
            />
            <p className="text-center text-gray-600 mb-6">
              Climb the ranks and win exclusive rewards.
            </p>
            <Link to="/leaderboards">
              <motion.button
                className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-yellow-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                See Leaderboards
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}