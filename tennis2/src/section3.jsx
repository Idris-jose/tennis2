import Dash from './assets/image_fx_ (12).jpg';
import { Link } from 'react-router-dom';

export default function Section3() {
  return (
    <section className="relative bg-black">
      <div className="flex flex-col h-full w-full items-center justify-center px-4 sm:px-8">
        <h1 className="text-white text-4xl sm:text-6xl lg:text-8xl mt-5 text-center">
          Your Command Center
        </h1>
        <img src={Dash} className="w-full max-w-4xl object-fill rounded-2xl mt-4" />
        <Link to="/signup">
          <button className="bg-yellow-500 shadow-amber-300 shadow-lg text-white px-6 py-3 rounded-full hover:bg-yellow-400 transition duration-300 mt-6 text-sm sm:text-base lg:text-lg">
            Sign Up to Start
          </button>
        </Link>
      </div>
    </section>
  );
}