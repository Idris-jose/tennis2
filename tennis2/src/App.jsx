import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from "./Header.jsx";
import Section1 from "./Section1.jsx";
import Section2 from "./section2.jsx";
import Section3 from "./section3.jsx";
import Section4 from "./section4.jsx";
import Section5 from "./section5.jsx";
import SignIn from "./getstarted.jsx";
import CreateTeam from "./Createteam.jsx";
import LiveScoring from "./LiveScoring.jsx";
import Leaderboards from "./LeaderBoard.jsx";
import SignUp from "./SignUp.jsx";

function Home() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <footer className="bg-gray-500 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Tennis Elite Fantasy Hub. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </footer>
    </>
  );
}

const pageVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.5, ease: 'easeIn' } },
};

function App() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/team/create" element={<CreateTeam />} />
        <Route path="/live-scoring" element={<LiveScoring />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </motion.div>
  );
}

export default App;