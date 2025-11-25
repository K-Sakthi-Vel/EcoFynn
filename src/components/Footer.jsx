import React from 'react'
import { motion } from 'framer-motion'


export default function Footer() {
    return (
        <motion.footer className="bg-primary text-white mt-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <div className="font-bold text-xl">Future Green</div>
                    <p className="mt-3 text-sm text-white/90">Everyday products that reduce waste without sacrificing quality.</p>
                </div>
                <div>
                    <div className="font-semibold">Quick Links</div>
                    <ul className="mt-3 text-sm space-y-2">
                        <li>Home</li>
                        <li>Best Practices</li>
                        <li>Track Order</li>
                    </ul>
                </div>
                <div>
                    <div className="font-semibold">Subscribe</div>
                    <div className="mt-3 flex gap-2">
                        <input className="rounded-l-md px-3 py-2 text-gray-800" placeholder="Enter email id" />
                        <button className="rounded-r-md px-4 bg-accent text-primary font-semibold">Get Brochure</button>
                    </div>
                </div>
            </div>
            <div className="bg-primary/90 text-white/80 text-sm py-4 text-center">Copyright © 2025 | Future Green</div>
        </motion.footer>
    )
}