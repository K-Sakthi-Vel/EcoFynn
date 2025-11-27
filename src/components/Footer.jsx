import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import footerBg from '../assets/footer/footer-bg.png'; // Assuming this is the correct background image as per user
import facebookIcon from '../assets/footer/facebook.png';
import instagramIcon from '../assets/footer/instagram.png';
import twitterIcon from '../assets/footer/twitter.png'; // This will be used for 'X' as per user's image


export default function Footer() {
    return (
        <motion.footer
            className="relative bg-[#2D452A] text-white overflow-hidden pt-[200px] sm:pt-[300px] md:pt-[300px]" // Adjusted padding-top for responsiveness
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ backgroundImage: `url(${footerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' , fontFamily:"Poppins"}}
        >
            {/* The wavy top section is removed as per user's instruction */}

            <div className="relative z-20 mx-auto pb-10 sm:pb-20 px-4 md:px-8 lg:px-50 flex flex-col md:flex-col lg:flex-row">
                {/* Left Section: Logo, Description, and Brochure */}
                <div className="flex flex-col items-start w-full md:w-1/2 mb-10 md:mb-0">
                    <img src={logo} alt="Ecofynn Logo" className="w-24 h-auto mb-6 ml-0 md:ml-[-10px]" />
                    <p className="mt-3 text-base text-white/90 leading-relaxed max-w-xs pr-4">
                        Our goal is to make sustainable choices easy for homes, offices, and businesses.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row w-full sm:w-[50%]">
                        <input
                            className="flex-grow rounded-full px-4 sm:px-10 pr-4 sm:pr-20 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white mb-4 sm:mb-0"
                            placeholder="Enter email id"
                            type="email"
                        />
                        <button className="whitespace-nowrap rounded-full px-6 py-3 sm:py-5 bg-[#2dbc3b] sm:ml-5 text-white font-semibold hover:bg-[#4CAF3A] transition-colors duration-200">
                            Get Brochure
                        </button>
                    </div>
                    <div className="mt-6 flex gap-3">
                        <img src={facebookIcon} alt="Facebook" className="w-10 h-10 cursor-pointer" />
                        <img src={instagramIcon} alt="Instagram" className="w-10 h-10 cursor-pointer" />
                        <img src={twitterIcon} alt="X" className="w-10 h-10 cursor-pointer" />
                    </div>
                </div>

                {/* Right Section: Quick Links, Our Products, About */}
                <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20">
                    {/* Quick Links */}
                    <div>
                        <div className="font-semibold text-xl sm:text-2xl mb-4 sm:mb-6" style={{fontFamily:"Poppins"}}>Quick Links</div>
                        <ul className="text-sm sm:text-base space-y-3 sm:space-y-4">
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Home</a></li>
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Best Practices</a></li>
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Track Order</a></li>
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Career</a></li>
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Help</a></li>
                        </ul>
                    </div>

                    {/* Our Products */}
                    <div>
                        <div className="font-semibold text-xl sm:text-2xl mb-4 sm:mb-6" style={{fontFamily:"Poppins"}}>Our Products</div>
                        <ul className="text-sm sm:text-base space-y-3 sm:space-y-4">
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Ethical Paper</a></li>
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Sustainable Stationery</a></li>
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Recycled Tissues</a></li>
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Bioplastics</a></li>
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Disposable Cutlery</a></li>
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Packaging Solutions</a></li>
                        </ul>
                    </div>

                    {/* About */}
                    <div>
                        <div className="font-semibold text-xl sm:text-2xl mb-4 sm:mb-6" style={{fontFamily:"Poppins"}}>About</div>
                        <ul className="text-sm sm:text-base space-y-3 sm:space-y-4" >
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>About Us</a></li>
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Contact Us</a></li>
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Become a Distributor</a></li>
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Be a Partner in Progress</a></li>
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Collaboration</a></li>
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Innovation</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom copyright section */}
            <div className="relative z-20 py-4 sm:py-6 text-sm text-white/70 border-t border-white/20 mt-5">
                <div className="mx-auto px-4 md:px-8 lg:px-50 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="mb-2 md:mb-0 text-xl sm:text-xl text-white">Copyright © 2025 | Future Green</div>
                    <div className="flex sm:flex-row gap-2 sm:gap-6 text-md sm:text-xl text-white">
                        <a href="#" className="hover:text-[#5EC44B] transition-colors duration-200">Privacy Policy</a>
                        | 
                        <a href="#" className="hover:text-[#5EC44B] transition-colors duration-200">Site Map</a>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
