import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const productData = [
    {
        title: 'Ethical Paper',
        description: 'Made from 100% recycled and tree-free materials for everyday printing, writing, and art.',
        image: '/src/assets/product_lines/product1.jpg',
    },
    {
        title: 'Sustainable Stationery',
        description: 'Notebooks, diaries, and office supplies crafted from recycled paper with minimal environmental impact.',
        image: '/src/assets/product_lines/product2.jpg',
    },
    {
        title: 'Ecopact Recycled Tissues',
        description: 'Soft, unbleached tissues made from industrial kraft paper waste, offering a clean and green alternative.',
        image: '/src/assets/product_lines/product3.jpg',
    },
    {
        title: 'Bioplastics',
        description: 'Compostable and bio-based alternatives to traditional plastic items for responsible packaging and use.',
        image: '/src/assets/product_lines/product4.jpg',
    },
    {
        title: 'Disposable Cutlery',
        description: 'Durable, food-safe cutlery manufactured from plant-based or recycled materials for sustainable dining.',
        image: '/src/assets/product_lines/product5.jpg',
    },
    {
        title: 'Packaging Solutions',
        description: 'Eco-friendly packaging options that replace conventional plastics with recyclable and biodegradable materials.',
        image: '/src/assets/product_lines/product6.jpg',
    },
];

export default function ProductLines() {
    const cardsPerRow = 3; 

    const productsInRows = [];
    for (let i = 0; i < productData.length; i += cardsPerRow) {
        productsInRows.push(productData.slice(i, i + cardsPerRow));
    }

    return (
        <section
            className="relative py-20 px-4 bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url('/src/assets/product_lines/product-lines-bg.jpg')" }}
        >
            <div className="absolute inset-0 bg-white opacity-70"></div>

            <div className="relative z-10 w-auto mx-auto px-4 sm:px-6 lg:px-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{fontFamily:"Poppins"}}>Our Primary Product Lines</h2>
                    <p className="text-lg text-gray-700 max-w-md mx-auto">Responsible essentials designed to reduce waste and support everyday sustainable living.</p>
                </div>

                {productsInRows.map((row, rowIndex) => (
                    <ProductRow key={rowIndex} rowProducts={row} cardsPerRow={cardsPerRow} />
                ))}
            </div>
        </section>
    );
}

function ProductRow({ rowProducts, cardsPerRow }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const itemVariants = {
        hidden: (colIndex) => {
            let xOffset = 0;
            const estimatedCardWidth = 380;
            const estimatedGap = 32;
            const stackOffset = estimatedCardWidth + estimatedGap;

            if (cardsPerRow === 3) {
                if (colIndex === 0) xOffset = stackOffset;
                else if (colIndex === 2) xOffset = -stackOffset;
            } else if (cardsPerRow === 2) {
                if (colIndex === 0) xOffset = stackOffset / 2;
                else if (colIndex === 1) xOffset = -stackOffset / 2;
            } else {
                xOffset = 0;
            }
            return { x: xOffset, opacity: 0 };
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
            },
        },
    };

    const rowContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    return (
            <motion.div
                ref={ref}
                className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 mb-8 last:mb-0"
                variants={rowContainerVariants}
                initial="hidden"
                animate={controls}
            >
            {rowProducts.map((product, index) => (
                <motion.div
                    key={index}
                    className="group p-4 bg-white rounded-[20px] shadow-lg overflow-hidden"
                    variants={itemVariants}
                    custom={index}
                >
                    <div className="relative h-80 w-full overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover rounded-[20px] transition-transform duration-300 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-[20px]"></div> {/* Changed opacity to 20 */}
                        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-green-500 text-white py-2 px-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-yellow-400 text-lg font-semibold whitespace-nowrap">
                            Explore Now
                        </button>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                        <p className="text-gray-600 text-base">{product.description}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
