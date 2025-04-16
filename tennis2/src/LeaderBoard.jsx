import React from 'react';
import { Link } from 'react-router-dom';

const Leaderboards = () => {
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
                    <Link to="/login" className="text-[#FFC107] hover:underline mr-4">
                        Sign In
                    </Link>
                    <Link to="/signup" className="text-[#FFC107] hover:underline">
                        Sign Up
                    </Link>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
                <h1 className="text-3xl md:text-4xl font-bold text-[#1A3C34] mb-6">
                    Leaderboards
                </h1>
                <p className="text-[#666] mb-8 text-center max-w-2xl">
                    See how you stack up against the top fantasy tennis players worldwide.
                </p>

                {/* Leaderboard Table */}
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-[#FFC107] text-white">
                                    <th className="p-4">Rank</th>
                                    <th className="p-4">Player</th>
                                    <th className="p-4">Points</th>
                                    <th className="p-4">Wins</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Example Leaderboard Entries */}
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="p-4 font-bold text-[#1A3C34]">1</td>
                                    <td className="p-4 text-[#1A3C34]">AceMaster23</td>
                                    <td className="p-4 text-[#666]">1,245</td>
                                    <td className="p-4 text-[#666]">15</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="p-4 font-bold text-[#1A3C34]">2</td>
                                    <td className="p-4 text-[#1A3C34]">TennisTitan</td>
                                    <td className="p-4 text-[#666]">1,198</td>
                                    <td className="p-4 text-[#666]">14</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="p-4 font-bold text-[#1A3C34]">3</td>
                                    <td className="p-4 text-[#1A3C34]">ServeQueen</td>
                                    <td className="p-4 text-[#666]">1,150</td>
                                    <td className="p-4 text-[#666]">13</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="p-4 font-bold text-[#1A3C34]">4</td>
                                    <td className="p-4 text-[#1A3C34]">RallyKing</td>
                                    <td className="p-4 text-[#666]">1,102</td>
                                    <td className="p-4 text-[#666]">12</td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                    <td className="p-4 font-bold text-[#1A3C34]">5</td>
                                    <td className="p-4 text-[#1A3C34]">NetNinja</td>
                                    <td className="p-4 text-[#666]">1,075</td>
                                    <td className="p-4 text-[#666]">11</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6 text-center">
                        <Link to="/team/create">
                            <button className="bg-[#FFC107] text-white font-bold py-3 px-6 rounded-md hover:bg-[#FFB300] transition">
                                Back to Team
                            </button>
                        </Link>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="p-6 text-center text-sm text-[#999]">
                <p>
                    Need help? <Link to="/faq" className="text-[#FFC107] hover:underline">Visit our FAQ</Link>
                </p>
                <div className="mt-2">
                    <Link to="/privacy" className="text-[#999] hover:text-[#FFC107] mx-2">
                        Privacy Policy
                    </Link>
                    |
                    <Link to="/terms" className="text-[#999] hover:text-[#FFC107] mx-2">
                        Terms of Service
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default Leaderboards;