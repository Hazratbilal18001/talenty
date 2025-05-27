import React, { useState } from 'react';

const Navbar = () => {
    const [langOpen, setLangOpen] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center px-4 py-2">
                {/* Left Side - Search */}
                <div className="flex items-center px-3 py-3 bg-[#e5e8ea80] rounded-md w-64">
                    <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 3.5a7.5 7.5 0 0013.65 13.65z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full outline-none text-sm text-gray-700 bg-transparent"
                    />
                </div>

                {/* Right Side - Language, Notification, Profile */}
                <div className="flex items-center gap-4 relative">
                    {/* Language Switcher */}
                    <div className="relative">
                        <div
                            onClick={() => setLangOpen(!langOpen)}
                            className="flex gap-3 items-center px-3 py-3 rounded-md cursor-pointer bg-[#e5e8ea80]"
                        >
                            <img className="w-4 h-4" src="./images/Language.png" alt="" />
                            <span className="text-sm text-gray-700">English</span>
                            <svg className="w-4 h-4 text-gray-600 ml-1" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        {langOpen && (
                            <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-md w-full z-10">
                                <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer">English</div>
                                <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer">اردو</div>
                            </div>
                        )}
                    </div>

                    {/* Notification */}
                    <svg className="w-6 h-6 text-gray-600 cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>

                    {/* Profile Picture */}
                    <img
                        src="./images/Profile.png"
                        alt="Profile"
                        className="w-8 h-8 rounded-full object-cover bg-[#FFD599]"
                    />
                </div>
            </div>
        </>
    );
};

export default Navbar;
