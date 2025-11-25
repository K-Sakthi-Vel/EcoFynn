import React from 'react'
import { motion } from 'framer-motion'


export default function Hero() {
    return (
        <section className="pt-12 pb-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold leading-tight"
                    >
                        Welcome to the world of
                        <span className="block text-primary">Sustainable Products for Everyday Use</span>
                    </motion.h1>


                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-6 text-gray-600 max-w-xl"
                    >Practical, eco-friendly essentials made from recycled and responsibly sourced materials. Designed for homes, workplaces, and conscious businesses.</motion.p>


                    <motion.div className="mt-8 flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                        <button className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary text-white font-medium hover:scale-105 transform transition">Explore Now</button>
                        <button className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-gray-200 bg-white text-sm hover:shadow-md transition">Our Story</button>
                    </motion.div>


                    <motion.div className="mt-8 flex items-center gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                        <div className="text-sm text-gray-500">Clients Who Trust Us</div>
                        <div className="flex gap-3">
                            <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center">A</div>
                            <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center">B</div>
                            <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center">C</div>
                        </div>
                    </motion.div>
                </div>


                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative"
                >
                    <div className="rounded-2xl shadow-xl overflow-hidden bg-white">
                        <img src="/src/assets/hero-illustration.jpg" alt="sustainable products" className="w-full object-cover h-80 md:h-96" />
                    </div>


                    <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="p-3 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
                            <div className="text-xs text-gray-500">Notebooks</div>
                            <div className="font-semibold">Starting From ₹50 /Pc</div>
                        </div>
                        <div className="p-3 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
                            <div className="text-xs text-gray-500">Spiral Notebooks</div>
                            <div className="font-semibold">Starting From ₹100 /Pc</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}