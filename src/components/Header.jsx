import React from 'react'
import { motion } from 'framer-motion'


export default function Header() {
    return (
        <motion.header
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">FG</div>
                    <div>
                        <div className="font-semibold">Future Green</div>
                        <div className="text-xs text-gray-500 -mt-0.5">Sustainable Essentials</div>
                    </div>
                </div>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
                    <a href="#products" className="hover:text-primary">Products</a>
                    <a href="#about" className="hover:text-primary">About</a>
                    <a href="#contact" className="hover:text-primary">Contact</a>
                    <button className="ml-4 rounded-full px-4 py-2 bg-primary text-white text-sm hover:scale-105 transform transition">Shop</button>
                </nav>
                <div className="md:hidden">
                    <button className="p-2 rounded-md bg-white border">☰</button>
                </div>
            </div>
        </motion.header>
    )
}