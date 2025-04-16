import React from 'react';
import { Link } from 'react-router-dom';

const CreateTeam = () => {
return (
    <div className="min-h-screen bg-[#E8F0E8] flex flex-col relative overflow-hidden">
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
                <Link to="/login" className="text-[#F1C40F] hover:underline mr-4">
                    Sign In
                </Link>
                <Link to="/signup" className="text-[#F1C40F] hover:underline">
                    Sign Up
                </Link>
            </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1A3C34] mb-6">
                Create Your Dream Team
            </h1>
            <p className="text-[#666] mb-8 text-center max-w-2xl">
                Pick your favorite tennis stars from the ATP and WTA tours. Balance your budget and build a winning roster!
            </p>

            {/* Team Creation Interface */}
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Player Selection */}
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold text-[#1A3C34] mb-4">Available Players</h2>
                        <div className="space-y-4">
                            {/* Example Player Cards */}
                            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
                                <span className="text-[#1A3C34]">Novak Djokovic</span>
                                <button className="bg-[#F1C40F] text-white px-3 py-1 rounded-md hover:bg-[#D4AC0D]">
                                    Add
                                </button>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
                                <span className="text-[#1A3C34]">Iga Swiatek</span>
                                <button className="bg-[#F1C40F] text-white px-3 py-1 rounded-md hover:bg-[#D4AC0D]">
                                    Add
                                </button>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
                                <span className="text-[#1A3C34]">Carlos Alcaraz</span>
                                <button className="bg-[#F1C40F] text-white px-3 py-1 rounded-md hover:bg-[#D4AC0D]">
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Selected Team */}
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold text-[#1A3C34] mb-4">Your Team</h2>
                        <div className="space-y-4">
                            <p className="text-[#666] italic">No players selected yet.</p>
                            {/* Placeholder for selected players */}
                        </div>
                        <div className="mt-6">
                            <p className="text-[#1A3C34] font-semibold">Budget Remaining: $10,000</p>
                            <button className="w-full bg-[#F1C40F] text-white font-bold py-3 rounded-md hover:bg-[#D4AC0D] mt-4">
                                Save Team
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        {/* Footer */}
        <footer className="p-6 text-center text-sm text-[#999]">
            <p>
                Need help? <Link to="/faq" className="text-[#F1C40F] hover:underline">Visit our FAQ</Link>
            </p>
            <div className="mt-2">
                <Link to="/privacy" className="text-[#999] hover:text-[#F1C40F] mx-2">
                    Privacy Policy
                </Link>
                |
                <Link to="/terms" className="text-[#999] hover:text-[#F1C40F] mx-2">
                    Terms of Service
                </Link>
            </div>
        </footer>
    </div>
);
};

export default CreateTeam;