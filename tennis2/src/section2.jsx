import background from './assets/pexels-cottonbro-5730299.jpg';
import pic2 from './assets/pexels-shkrabaanthony-6827094.jpg';
import pic3 from './assets/pexels-cottonbro-5741058.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Section2() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { scale:1.05 ,  transition: { duration: 0.3 } },
  };

  return (
    <section className="relative">
      <div className="flex h-full w-full items-center justify-center">
        <motion.div
          className="grid h-auto w-full gap-4 mt-4 bg-black p-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto rounded-lg shadow-md"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Build Your Team */}
          <motion.div
            className="col-span-1 bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-4"
            variants={itemVariants}
            whileHover="hover"
          >
            <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-semibold text-center">
              Build Your Team
            </h1>
            <img
              src={background}
              
              className="h-[15rem] sm:h-[18rem] lg:h-[20rem] w-full object-cover rounded-2xl p-3"
              
            />
            <p className="text-center">Select from top ATP & WTA players. Optimize your roster.</p>
            <Link to="/team/create">
              <motion.button
                className="bg-yellow-500 shadow-amber-300 shadow-lg text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Create Team
              </motion.button>
            </Link>
          </motion.div>

          {/* Live Performance Tracking */}
          <motion.div
          whileHover="hover"
            className="col-span-1 bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-4"
            variants={itemVariants}
          >
            <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-semibold text-center">
              Live Performance Tracking
            </h1>
            <img
              src={pic2}
              className="rounded-2xl h-[15rem] sm:h-[18rem] lg:h-[20rem] w-full object-cover p-3"
              
            />
            <p className="text-center">Real-time stats from matches worldwide.</p>
            <Link to="/live-scoring">
              <motion.button
                className="bg-yellow-500 shadow-amber-300 shadow-lg text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                View Live Scores
              </motion.button>
            </Link>
          </motion.div>

          {/* Compete Globally */}
          <motion.div
          whileHover="hover"
            className="col-span-1 bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-4"
            variants={itemVariants}
          >
            <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-semibold text-center">
              Compete Globally
            </h1>
            <img
              src={pic3}
              className="h-[15rem] sm:h-[18rem] lg:h-[20rem] w-full object-cover rounded-2xl p-3"
              
            />
            <p className="text-center">Climb the ranks and win exclusive rewards.</p>
            <Link to="/leaderboards">
              <motion.button
                className="bg-yellow-500 shadow-amber-300 shadow-lg text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
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