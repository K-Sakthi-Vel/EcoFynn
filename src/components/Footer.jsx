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
            className="relative bg-[#2D452A] text-white overflow-hidden pt-[400px]" // Added padding-top to push content down and removed fixed height
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ backgroundImage: `url(${footerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' , fontFamily:"Poppins"}}
        >
            {/* The wavy top section is removed as per user's instruction */}

            <div className="relative z-20 max-auto mx-auto pb-20 px-50 flex flex-col md:flex-row"> {/* Changed to flex container with two main sections */}
                {/* Left Section: Logo, Description, and Brochure */}
                <div className="flex flex-col items-start w-full md:w-1/2">
                    <img src={logo} alt="Ecofynn Logo" className="w-24 h-auto mb-6 ml-[-10px]" />
                    <p className="mt-3 text-base text-white/90 leading-relaxed max-w-xs">
                        Our goal is to make sustainable choices easy for homes, offices, and businesses.
                    </p>
                    <div className="mt-8 flex w-[50%]">
                        <input
                            className="flex-grow rounded-full px-10 pr-20 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
                            placeholder="Enter email id"
                            type="email"
                        />
                        <button className="whitespace-nowrap rounded-full px-6 py-5 bg-[#2dbc3b] ml-5 text-white font-semibold hover:bg-[#4CAF3A] transition-colors duration-200">
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
                <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20"> {/* Three columns inside */}
                    {/* Quick Links */}
                    <div>
                        <div className="font-semibold text-2xl mb-6" style={{fontFamily:"Poppins"}}>Quick Links</div>
                        <ul className="text-base space-y-4">
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Home</a></li>
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Best Practices</a></li>
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Track Order</a></li>
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Career</a></li>
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Help</a></li>
                        </ul>
                    </div>

                    {/* Our Products */}
                    <div>
                        <div className="font-semibold text-2xl mb-6" style={{fontFamily:"Poppins"}}>Our Products</div>
                        <ul className="text-base space-y-4">
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
                        <div className="font-semibold text-2xl mb-6" style={{fontFamily:"Poppins"}}>About</div>
                        <ul className="text-base space-y-4" >
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>About Us</a></li>
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Contact Us</a></li>
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Become a Distributor</a></li>
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Be a Partner in Progress</a></li>
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}s>Collaboration</a></li>
                            <li><a href="#" className="text-white/80 hover:text-[#5EC44B] transition-colors duration-200" style={{fontFamily:"Poppins"}}>Innovation</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom copyright section */}
            <div className="relative z-20 py-6 text-sm text-white/70 border-t border-white/20 mt-5"> {/* Added top border and adjusted margin-top */}
                <div className="w-auto mx-auto px-50 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-2 md:mb-0 text-base">Copyright © 2025 | Future Green</div> {/* Adjusted text size */}
                    <div className="flex gap-6 text-base"> {/* Adjusted gap and text size */}
                        <a href="#" className="hover:text-[#5EC44B] transition-colors duration-200">Privacy Policy</a>
                        <a href="#" className="hover:text-[#5EC44B] transition-colors duration-200">Site Map</a>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
