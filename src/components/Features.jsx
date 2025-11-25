import React from 'react'
import { motion } from 'framer-motion'


const items = [
    { title: 'Bioplastics', desc: 'Compostable and bio-based alternatives to traditional plastic items.' },
    { title: 'Disposable Cutlery', desc: 'Durable, food-safe cutlery from plant-based or recycled materials.' },
    { title: 'Packaging Solutions', desc: 'Eco-friendly packaging that replaces conventional plastics.' },
    { title: 'Ethical Paper', desc: 'Made from 100% recycled and tree-free materials.' }
]


export default function Features() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((it, idx) => (
                <motion.div
                    key={it.title}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: idx * 0.08 }}
                    className="bg-white rounded-xl p-6 shadow hover:shadow-lg transform hover:-translate-y-2 transition"
                >
                    <div className="text-primary font-semibold">{it.title}</div>
                    <div className="mt-3 text-gray-600 text-sm">{it.desc}</div>
                </motion.div>
            ))}
        </div>
    )
}