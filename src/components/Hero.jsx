import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section
            className="relative bg-cover bg-center h-[calc(100vh-80px)] flex items-center justify-center text-center px-4 overflow-hidden"
            style={{ backgroundImage: "url('/src/assets/hero/hero-bg.jpg')" }}
        >
            {/* Overlay for background blur/opacity */}
            <div className="absolute inset-0 bg-white opacity-70"></div> {/* Adjust opacity as needed, e.g., opacity-70 */}

            {/* Corner Images */}
            <img src="/src/assets/hero/top-left.png" alt="leaf" className="absolute top-0 left-0 w-100 h-70 object-contain" />
            <img src="/src/assets/hero/top-right.png" alt="leaf" className="absolute top-0 right-0 w-100 h-70 object-contain" />
            <img src="/src/assets/hero/bottom-left.png" alt="leaf" className="absolute bottom-0 left-0 w-100 h-70 object-contain" />
            <img src="/src/assets/hero/bottom-right.png" alt="leaf" className="absolute bottom-0 right-0 w-120 h-70 object-contain" />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative z-10 max-w-4xl mx-auto p-6 bg-opacity-80"
            >
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-black-700 text-lg mb-4 bg-white px-4 py-2 rounded-full inline-block"
                >
                    Welcome to the world of
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-6xl font-bold leading-1 text-gray-900 mb-6"
                >
                    SUSTAINABLE PRODUCTS <br /> FOR EVERYDAY USE
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-black-600 text-lg mb-8 max-w-2xl mx-auto"
                >
                    Practical, eco-friendly essentials made from recycled and responsibly sourced materials.
                    Designed for homes, workplaces, and conscious businesses.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex justify-center gap-4"
                >
                    <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-green-500 text-white font-medium text-lg hover:scale-105 transform transition duration-300">
                        Explore Now
                    </button>
                    <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-gray-300 bg-white text-gray-800 text-lg hover:shadow-lg transition duration-300">
                        Our Story
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
