import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/logo.png';
import User from '../assets/user.png';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <motion.header
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="sticky top-0 z-40 bg-white backdrop-blur-md border-b border-gray-100 shadow-md"
        >
            <div className="max-w-7xl h-[80px] mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    {/* Ecofynn Logo */}
                    <img src={Logo} alt="Ecofynn Logo" className="h-15 w-15 mr-8" /> {/* Placeholder logo */}
                </div>

                {/* Mobile Menu Toggle (Hamburger Icon) */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="p-2 rounded-full hover:bg-gray-100">
                        {isMobileMenuOpen ? (
                            <XMarkIcon className="h-6 w-6 text-gray-700" />
                        ) : (
                            <Bars3Icon className="h-6 w-6 text-gray-700" />
                        )}
                    </button>
                </div>

                {/* Desktop Navigation Links and Search Bar/Icons */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Navigation Links */}
                    <nav className="flex items-center gap-12 text-md font-medium text-gray-700 mr-10">
                        <a href="#" className="hover:text-primary">Shop</a>
                        <div className="relative group">
                            <button className="flex items-center hover:text-primary">
                                Products <span className="ml-1"><ChevronDownIcon strokeWidth={3} className='ml-2 w-3 h-3' /></span>
                            </button>
                            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Ethical Paper</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sustainable Stationery</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Recycled Tissues</a>
                                <a href="#" className="block px-4 py-2 text-sm text-white bg-green-700 hover:bg-green-800">Bio Plastics</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Paper/Cloth Bags</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Disposable Cutlery</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Packaging Solutions</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Corrugated Products</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Diaries</a>
                            </div>
                        </div>
                        <div className="relative group">
                            <button className="flex items-center hover:text-primary">
                                Buyers/Resellers <span className="ml-1"><ChevronDownIcon strokeWidth={3} className='ml-2 w-3 h-3' /></span>
                            </button>
                            <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Corporate Corner</a>
                                <a href="#" className="block px-4 py-2 text-sm text-white bg-green-700 hover:bg-green-800">Institutional Corner</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hotels/ Restaurant</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Exports</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Reseller</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Industrial/ Manufacturing</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Distributors</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Corporate Gifting Company</a>
                            </div>
                        </div>
                    </nav>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for products"
                            className="pl-4 pr-10 py-2 h-[50px] rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm w-[350px]"
                        />
                        <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                    <button className="p-2 rounded-full hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </button>
                    <img src={User} alt="User Profile" className="h-12 w-12 rounded-full object-cover" /> {/* Placeholder profile image */}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-[80px] left-0 w-full bg-white border-b border-gray-100 shadow-lg p-6">
                    <nav className="flex flex-col gap-4 text-[15px] font-medium text-gray-700">
                        <a href="#" className="block hover:text-primary py-2" onClick={toggleMobileMenu}>Shop</a>
                        <div className="relative group">
                            <button className="flex items-center hover:text-primary w-full text-left py-2">
                                Products <span className="ml-1"><ChevronDownIcon strokeWidth={3} className='ml-2 w-3 h-3' /></span>
                            </button>
                            <div className="pl-4 mt-2 border-l border-gray-200">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>Ethical Paper</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>Sustainable Stationery</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>Recycled Tissues</a>
                                <a href="#" className="block px-4 py-2 text-sm text-white bg-green-700 hover:bg-green-800" onClick={toggleMobileMenu}>Bio Plastics</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>Paper/Cloth Bags</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>Disposable Cutlery</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>Packaging Solutions</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>Corrugated Products</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>Diaries</a>
                            </div>
                        </div>
                        <div className="relative group">
                            <button className="flex items-center hover:text-primary w-full text-left py-2">
                                Buyers/Resellers <span className="ml-1"><ChevronDownIcon strokeWidth={3} className='ml-2 w-3 h-3' /></span>
                            </button>
                            <div className="pl-4 mt-2 border-l border-gray-200">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>Corporate Corner</a>
                                <a href="#" className="block px-4 py-2 text-sm text-white bg-green-700 hover:bg-green-800" onClick={toggleMobileMenu}>Institutional Corner</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>Hotels/ Restaurant</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>Exports</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>Reseller</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>Industrial/ Manufacturing</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>Distributors</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>Corporate Gifting Company</a>
                            </div>
                        </div>
                    </nav>
                    <div className="relative mt-4">
                        <input
                            type="text"
                            placeholder="Search for products"
                            className="pl-4 pr-10 py-2 h-[50px] rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm w-full"
                        />
                        <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex justify-around items-center mt-4">
                        <button className="p-2 rounded-full hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </button>
                        <img src={User} alt="User Profile" className="h-12 w-12 rounded-full object-cover" />
                    </div>
                </div>
            )}
        </motion.header>
    )
}
