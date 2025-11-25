import React from 'react'
import { motion } from 'framer-motion'


const products = [
    { title: 'Notebooks', price: '₹50 /Pc' },
    { title: 'Spiral Notebooks', price: '₹100 /Pc' },
    { title: 'Copier Paper', price: '₹132 /Pc' },
    { title: 'M Fold Tissues', price: '₹75 /Pc' }
]


export default function ProductGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
                <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white rounded-2xl p-5 shadow hover:shadow-2xl transform hover:-translate-y-2 transition"
                >
                    <div className="h-40 rounded-md bg-gray-100 mb-4 flex items-center justify-center">Image</div>
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="font-semibold">{p.title}</div>
                            <div className="text-xs text-gray-500">Starting From</div>
                        </div>
                        <div className="text-right">
                            <div className="font-bold text-primary">{p.price}</div>
                            <button className="mt-3 rounded-full px-3 py-1 text-sm border border-gray-200 hover:bg-primary hover:text-white transition">Add To Cart</button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}