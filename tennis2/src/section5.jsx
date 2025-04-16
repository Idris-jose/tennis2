import image3 from './assets/pexels-shkrabaanthony-6827094.jpg';
import { Link } from 'react-router-dom';

export default function Section5() {
  return (
    <section className="relative bg-white mt-8">
      <div className="flex flex-col lg:flex-row p-4 items-center lg:items-start">
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <h1 className="text-yellow-400 text-6xl lg:text-9xl">
            Ready to <br />Serve Up <br />Victory?
          </h1>
          <p className="text-xl lg:text-3xl mt-4">
            Sign up now and start building your fantasy tennis legacy.
          </p>
          <div className="flex flex-col lg:flex-row gap-2 justify-center lg:justify-start mt-6">
            <Link to="/signup">
              <button className="bg-yellow-500 shadow-amber-300 shadow-lg text-white px-6 py-3 rounded-full hover:bg-yellow-400 transition duration-300">
                Sign Up to Start
              </button>
            </Link>
            <Link to="/login">
              <button className="border-yellow-500 border-2 shadow-amber-300 shadow-lg text-black px-6 py-3 rounded-full  lg:w-auto hover:bg-yellow-500 transition duration-300 hover:text-amber-50">
                Log in
              </button>
            </Link>
          </div>
        </div>
        <img
          src={image3}
          className="w-full lg:w-[60rem] h-[20rem] lg:h-[40rem] object-cover rounded-2xl"
          style={{ filter: 'grayscale(1)', mixBlendMode: 'normal' }}
        />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%25%27 height=%27100%25%27%3E%3Cfilter id=%27grain%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%271%27 stitchTiles=%27stitch%27/%3E%3CfeColorMatrix type=%27saturate%27 values=%270%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23grain)%27/%3E%3C/svg%3E")',
          opacity: 0.4,
        }}
      ></div>
    </section>
  );
}