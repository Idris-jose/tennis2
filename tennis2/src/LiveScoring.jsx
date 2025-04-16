import React from 'react';
import { Link } from 'react-router-dom';

const LiveScoring = () => {
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
            <Link to="/" className="text-2xl font-bold text-[#D4AC0D]">
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
            <h1 className="text-3xl md:text-4xl font-bold text-[#D4AC0D] mb-6">
                Live Scoring
            </h1>
            <p className="text-[#666] mb-8 text-center max-w-2xl">
                Track real-time performance of your selected players across the globe.
            </p>

            {/* Live Scoring Interface */}
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
                <div className="space-y-6">
                    {/* Match 1 */}
                    <div className="border-b border-gray-200 pb-6">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-xl font-semibold text-[#D4AC0D]">
                                Novak Djokovic vs. Rafael Nadal
                            </h2>
                            <span className="text-sm text-[#F1C40F] font-bold">Live</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-[#666]">Score: 6-4, 3-2</p>
                                <p className="text-[#666]">Aces: 5</p>
                                <p className="text-[#666]">Winners: 12</p>
                            </div>
                            <div>
                                <p className="text-[#666]">Fantasy Points: 45</p>
                                <p className="text-[#666]">Serve Speed: 128 mph</p>
                                <p className="text-[#666]">Unforced Errors: 3</p>
                            </div>
                        </div>
                    </div>

                    {/* Match 2 */}
                    <div className="border-b border-gray-200 pb-6">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-xl font-semibold text-[#D4AC0D]">
                                Iga Swiatek vs. Aryna Sabalenka
                            </h2>
                            <span className="text-sm text-[#F1C40F] font-bold">Live</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-[#666]">Score: 4-6, 6-1, 2-0</p>
                                <p className="text-[#666]">Aces: 3</p>
                                <p className="text-[#666]">Winners: 15</p>
                            </div>
                            <div>
                                <p className="text-[#666]">Fantasy Points: 38</p>
                                <p className="text-[#666]">Serve Speed: 112 mph</p>
                                <p className="text-[#666]">Unforced Errors: 5</p>
                            </div>
                        </div>
                    </div>

                    {/* Match 3 */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-xl font-semibold text-[#D4AC0D]">
                                Carlos Alcaraz vs. Jannik Sinner
                            </h2>
                            <span className="text-sm text-[#F1C40F] font-bold">Live</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-[#666]">Score: 7-6, 2-3</p>
                                <p className="text-[#666]">Aces: 7</p>
                                <p className="text-[#666]">Winners: 18</p>
                            </div>
                            <div>
                                <p className="text-[#666]">Fantasy Points: 52</p>
                                <p className="text-[#666]">Serve Speed: 135 mph</p>
                                <p className="text-[#666]">Unforced Errors: 4</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <Link to="/team/create">
                        <button className="bg-[#F1C40F] text-white font-bold py-3 px-6 rounded-md hover:bg-[#D4AC0D] transition">
                            Back to Team
                        </button>
                    </Link>
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

export default LiveScoring;