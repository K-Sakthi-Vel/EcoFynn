import React from 'react'
import { motion } from 'framer-motion'


const quotes = [
    { name: 'Rohan M.', role: 'Corporate Buyer', text: 'Reliable products and consistent quality. The team shifted to sustainable stationery without disruption.' },
    { name: 'Shruti K.', role: 'Sustainability Consultant', text: 'The recycled paper and tissues are top quality.' },
    { name: 'Anita S.', role: 'Café Owner', text: 'Packaging and cutlery fit our brand perfectly.' }
]


export default function Testimonials() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quotes.map((q, idx) => (
                <motion.blockquote
                    key={q.name}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.12 }}
                    className="bg-white p-6 rounded-2xl shadow"
                >
                    <p className="text-gray-700">{q.text}</p>
                    <footer className="mt-4 text-sm text-gray-500">— {q.name}, <span className="text-xs">{q.role}</span></footer>
                </motion.blockquote>
            ))}
        </div>
    )
}