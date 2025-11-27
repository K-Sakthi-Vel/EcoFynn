import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            const sequence = async () => {
                // 1. "Welcome to the world of" line (text and rounded background)
                await Promise.all([
                    controls.start('welcomeTextVisible'), // Animate parent p tag (opacity and y)
                    controls.start('bgReveal'), // Animate the rounded background from left to right
                    controls.start('textReveal') // Animate the actual text content
                ]);

                // 2. "SUSTAINABLE PRODUCTS FOR EVERYDAY USE" title
                await controls.start('headingParentVisible', { at: "+0.6" }); // Animate parent h1 opacity and clipPath

                // 3. Description paragraph
                await controls.start('descriptionVisible', { at: "+1.2" });

                // 4. Four side images
                await controls.start('imagesVisible', { at: "+1.2" });

                // 5. Two buttons
                await controls.start('buttonsVisible', { at: "+1.2" }); // Start buttons after images
            };
            sequence();
        }
    }, [controls, inView]);

    const welcomeTextParentVariants = {
        hidden: { opacity: 0, y: 20 },
        welcomeTextVisible: { opacity: 1, y: 0, transition: { duration: 1.2 } }
    };

    const bgRevealVariants = {
        hidden: { scaleX: 0, originX: 0 },
        bgReveal: { scaleX: 1, originX: 0, transition: { duration: 1.2, ease: "easeOut" } }
    };

    const textRevealVariants = {
        hidden: { clipPath: 'inset(0 100% 0 0)' },
        textReveal: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 1.2, ease: "easeOut" } }
    };

    const headingParentVariants = {
        hidden: { opacity: 0, clipPath: 'inset(0% 0 100% 0)' },
        headingParentVisible: { opacity: 1, clipPath: 'inset(0 0 0% 0)', transition: { duration: 2, ease: "easeOut" } } // Reveal parent h1 from top to bottom
    };

    const descriptionVariants = {
        hidden: { clipPath: 'inset(0 100% 0 0)' },
        descriptionVisible: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 2, ease: "easeOut" } }
    };

    const imageVariants = {
        hidden: (direction) => ({
            opacity: 0,
            x: direction === 'left' ? -200 : direction === 'right' ? 200 : 0,
            y: 0,
        }),
        imagesVisible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 1.6, ease: "easeOut" }
        }
    };

    const buttonGroupVariants = {
        hidden: { opacity: 0, y: 100 },
        buttonsVisible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut", staggerChildren: 0.4 } }
    };

    return (
        <section
            ref={ref}
            className="relative bg-cover bg-center h-[calc(100vh-80px)] flex items-center justify-center text-center px-4 overflow-hidden"
            style={{ backgroundImage: "url('/src/assets/hero/hero-bg.jpg')" }}
        >
            <div className="absolute inset-0 bg-white opacity-70"></div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto p-6">
                <motion.p
                    initial="hidden"
                    animate={controls}
                    variants={welcomeTextParentVariants}
                    className="text-black text-lg mb-4 inline-block relative"
                >
                    <motion.span
                        initial="hidden"
                        animate={controls}
                        variants={bgRevealVariants}
                        className="absolute inset-0 bg-white rounded-full"
                        style={{ zIndex: -1 }}
                    ></motion.span>
                    <motion.span
                        initial="hidden"
                        animate={controls}
                        variants={textRevealVariants}
                        className="relative px-4 py-2 inline-block text-black"
                        style={{ color: 'black' }}
                    >
                        Welcome to the world of
                    </motion.span>
                </motion.p>
                <motion.h1
                    initial="hidden"
                    animate={controls}
                    variants={headingParentVariants}
                    className="text-5xl md:text-6xl font-bold leading-1 text-gray-900 mb-6 overflow-hidden"
                    style={{ minHeight: '3em' }}
                >
                    <span className="block">SUSTAINABLE PRODUCTS</span>
                    <span className="block">FOR EVERYDAY USE</span>
                </motion.h1>
                <motion.p
                    initial="hidden"
                    animate={controls}
                    variants={descriptionVariants}
                    className="text-black-600 text-lg mb-8 max-w-2xl mx-auto overflow-hidden"
                >
                    Practical, eco-friendly essentials made from recycled and responsibly sourced materials.
                    Designed for homes, workplaces, and conscious businesses.
                </motion.p>
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={buttonGroupVariants}
                    className="flex justify-center gap-4"
                >
                    <motion.button
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-green-500 text-white font-medium text-lg hover:scale-105 transform transition duration-300"
                    >
                        Explore Now
                    </motion.button>
                    <motion.button
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-gray-300 bg-white text-gray-800 text-lg hover:shadow-lg transition duration-300"
                    >
                        Our Story
                    </motion.button>
                </motion.div>
            </div>

            {/* Corner Images */}
            <motion.img
                src="/src/assets/top-left.png"
                alt="leaf"
                className="absolute top-0 left-0 w-100 h-70 object-contain"
                initial="hidden"
                animate={controls}
                custom="left"
                variants={imageVariants}
            />
            <motion.img
                src="/src/assets/top-right.png"
                alt="leaf"
                className="absolute top-0 right-0 w-100 h-70 object-contain"
                initial="hidden"
                animate={controls}
                custom="right"
                variants={imageVariants}
            />
            <motion.img
                src="/src/assets/bottom-left.png"
                alt="leaf"
                className="absolute bottom-0 left-0 w-100 h-70 object-contain"
                initial="hidden"
                animate={controls}
                custom="left"
                variants={imageVariants}
            />
            <motion.img
                src="/src/assets/bottom-right.png"
                alt="leaf"
                className="absolute bottom-0 right-0 w-120 h-70 object-contain"
                initial="hidden"
                animate={controls}
                custom="right"
                variants={imageVariants}
            />
        </section>
    );
}
