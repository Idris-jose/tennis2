import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    console.log("Sign Up:", { username, email, password });
    // Add your registration logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col relative overflow-hidden">
      {/* Grainy Background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.1 }}>
        <filter id="grainy">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grainy)" />
      </svg>

      {/* Header */}
      <header className="p-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#1A3C34]">
          Tennis Elite Fantasy Hub
        </Link>
        <nav>
          <Link to="/login" className="text-yellow-300 hover:underline">
            Sign In
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A3C34] mb-2">
          Join the Tennis Elite
        </h1>
        <p className="text-[#666] mb-8">
          Sign up to start building your dream tennis team and compete globally!
        </p>

        {/* Sign-Up Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Choose a username"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#2ECC71]"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#2ECC71]"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Create a password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#2ECC71]"
                required
              />
            </div>
            <div className="mb-6 text-sm text-left">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" required />
                I agree to the{' '}
                <Link to="/terms" className="text-yellow-300 hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-yellow-300 hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white font-bold py-3 rounded-md hover:bg-white hover:border-black hover:border-2 hover:text-black transition"
            >
              Sign Up
            </button>
          </form>

          {/* Alternative Sign-Up */}
          <div className="mt-6">
            <div className="relative mb-4">
              <span className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300"></span>
              </span>
              <span className="relative bg-white px-2 text-gray-500">
                Or sign up with
              </span>
            </div>
            <div className="flex gap-4">
              <button className="flex-1 border border-gray-300 text-[#333] py-2 rounded-md hover:bg-gray-100">
                Google
              </button>
              <button className="flex-1 border border-gray-300 text-[#333] py-2 rounded-md hover:bg-gray-100">
                X
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-sm text-[#999]">
        <p>
          Already have an account?{' '}
          <Link to="/login" className="text-yellow-300 hover:underline">
            Sign in here
          </Link>
        </p>
        <div className="mt-2">
          <Link to="/privacy" className="text-[#999] hover:text-yellow-300 mx-2">
            Privacy Policy
          </Link>
          |
          <Link to="/terms" className="text-[#999] hover:text-yellow-300 mx-2">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default SignUp;