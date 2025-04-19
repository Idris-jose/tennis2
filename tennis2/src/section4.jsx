import { motion } from 'framer-motion';
import img1 from './assets/pexels-cottonbro-5740529.jpg';

export default function Section4() {
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
    hover: { scale: 1.03, rotate: 1, transition: { duration: 0.2 } },
  };

  return (
    <section className="relative bg-gradient-to-b from-black to-gray-900 py-12">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-8xl text-white font-bold text-center mb-8"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
        >
          Master the Game with Data
        </motion.h1>
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Top Aces This Week */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-between w-full sm:w-80"
            variants={itemVariants}
            whileHover="hover"
          >
            <h2 className="text-black text-2xl md:text-3xl font-semibold text-center mb-4">
              Top Aces This Week
            </h2>
            <img
              src={img1}
              alt="Top Aces"
              className="object-cover h-40 w-full rounded-lg mb-4"
              loading="lazy"
              onError={() => console.error('Failed to load Top Aces image')}
            />
            <p className="text-black text-lg md:text-xl text-center">Carlos Alcaraz</p>
            <p className="text-gray-600 text-sm md:text-base">15 aces</p>
          </motion.div>

          {/* Fastest Serves */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-between w-full sm:w-80"
            variants={itemVariants}
            whileHover="hover"
          >
            <h2 className="text-black text-2xl md:text-3xl font-semibold text-center mb-4">
              Fastest Serves
            </h2>
            <img
              src={img1}
              alt="Fastest Serves"
              className="object-cover h-40 w-full rounded-lg mb-4"
              loading="lazy"
              onError={() => console.error('Failed to load Fastest Serves image')}
            />
            <p className="text-black text-lg md:text-xl text-center">Nick Kyrgios: 135 mph</p>
          </motion.div>

          {/* Upset Picks */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-between w-full sm:w-80 relative overflow-hidden"
            variants={itemVariants}
            whileHover="hover"
          >
            <h2 className="text-black text-2xl md:text-3xl font-semibold text-center mb-4">
              Upset Picks
            </h2>
            <img
              src={img1}
              alt="Upset Picks"
              className="object-cover h-40 w-full rounded-lg mb-4"
              loading="lazy"
              onError={() => console.error('Failed to load Upset Picks image')}
            />
            <motion.p
              className="text-gray-600 text-sm md:text-base text-center absolute bottom-6 opacity-0"
              whileHover={{ opacity: 1, y: -10, transition: { duration: 0.2 } }}
            >
              Select from top ATP & WTA players. Optimize your roster.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}