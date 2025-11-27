import React from 'react';
import trendingBg from '../assets/trending_products/trending-bg.jpg';
import topLeft from '../assets/top-left.png';
import bottomRight from '../assets/bottom-right.png';
import Product1 from '../assets/trending_products/Product1.jpg';
import Product2 from '../assets/trending_products/Product2.jpg';
import Product3 from '../assets/trending_products/Product3.jpg';
import Product4 from '../assets/trending_products/Product4.jpg';
import Product5 from '../assets/trending_products/Product5.jpg';
import Product6 from '../assets/trending_products/Product6.jpg';
import Product7 from '../assets/trending_products/Product7.jpg';
import Product8 from '../assets/trending_products/Product8.jpg';
import Product9 from '../assets/trending_products/Product9.jpg';
import Product10 from '../assets/trending_products/Product10.jpg';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useRef, useState, useEffect } from 'react';


const products = [
    { id: 1, name: 'Notebooks', price: '50.00', image: Product1 },
    { id: 2, name: 'Spiral Notebooks', price: '100.00', image: Product2 },
    { id: 3, name: 'Copier Paper', price: '132.00', image: Product3 },
    { id: 4, name: 'Paper Tape', price: '75.00', image: Product4 },
    { id: 5, name: 'Tissues', price: '60.00', image: Product5 },
    { id: 6, name: 'Paper Cups', price: '90.00', image: Product6 },
    { id: 7, name: 'Spoons', price: '45.00', image: Product7 },
    { id: 8, name: 'Shopping Bags', price: '110.00', image: Product8 },
    { id: 9, name: 'Egg Tray', price: '80.00', image: Product9 },
    { id: 10, name: 'Plates', price: '120.00', image: Product10 },
];

export default function TrendingProducts() {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    useEffect(() => {
        checkScroll();
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);
            return () => {
                scrollContainer.removeEventListener('scroll', checkScroll);
                window.removeEventListener('resize', checkScroll);
            };
        }
    }, []);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -316 : 316,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section
            className="relative py-16 px-10 overflow-hidden"
            style={{ backgroundImage: `url(${trendingBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-white opacity-70"></div>
            <div className="absolute top-5 rotate-[180deg] left-0">
                <img
                    src={topLeft}
                    alt="leaf decoration"
                    className="w-100 h-70 opacity-100"
                />
            </div>

            <div className="absolute bottom-10 right-0 rotate-[180deg]">
                <img
                    src={bottomRight}
                    alt="decorative"
                    className="w-100 h-70 opacity-100 object-contain"
                />
            </div>

            <div className="relative z-10 w-auto mx-auto px-4 sm:px-6 lg:px-20">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 text-center md:text-left">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2" style={{fontFamily:"Poppins"}}>Trending Products</h2>
                        <p className="text-gray-800 text-base sm:text-lg">Popular eco-friendly essentials that customers choose for quality, value, and sustainability.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-auto justify-center md:justify-start">
                        <button className="px-8 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition duration-300 text-lg w-full sm:w-auto">
                            View All
                        </button>
                        <div className="flex space-x-4 mt-4 sm:mt-0">
                            <button
                                onClick={() => scroll('left')}
                                className={`p-3 rounded-full transition duration-300 cursor-pointer 
                                    ${canScrollLeft
                                        ? 'border border-black border-2 text-black hover:text-yellow-400 hover:border-yellow-400 hover:bg-yellow-100'
                                        : 'border border-gray-300 text-gray-400 cursor-not-allowed'
                                    }`}
                                disabled={!canScrollLeft}
                            >
                                <ChevronLeftIcon className="h-6 w-6 text-current transition duration-300" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className={`p-3 rounded-full transition duration-300 cursor-pointer z ${canScrollRight ? 'border border-2 border-green-500 text-green-500 hover:bg-green-100' : 'border border-gray-300 text-gray-400 cursor-not-allowed'}`}
                                disabled={!canScrollRight}
                            >
                                <ChevronRightIcon className={`h-6 w-6 ${canScrollRight ? 'text-green-500' : 'text-gray-400'}`} />
                            </button>
                        </div>
                    </div>
                </div>

                <style>{`
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .no-scrollbar {
                        -ms-overflow-style: none;  /* IE and Edge */
                        scrollbar-width: none;  /* Firefox */
                    }
                `}</style>
                <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-4 sm:space-x-6 pb-4 no-scrollbar">
                    {products.map(product => (
                        <div key={product.id} className="group h-[450px] min-w-[70vw] sm:min-w-[60vw] md:min-w-[300px] lg:min-w-[300px] xl:min-w-[350px] max-w-[500px] bg-white rounded-2xl shadow-lg p-4 flex flex-col items-start border border-gray-200">
                            <div className="relative w-full h-80 sm:h-100 mb-3 rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mb-3">
                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800" style={{ fontFamily: 'Poppins' }}>{product.name}</h3>
                                <span className="text-sm font-semibold text-green-500 flex items-center mt-2 sm:mt-0">5 <span className="text-yellow-400 text-lg ml-1">⭐</span></span>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full">
                                <span>
                                    <p className="text-gray-800 text-sm mb-2">Starting From</p>
                                    <span className="text-xl sm:text-2xl font-bold text-gray-900" style={{ fontFamily: 'DM Sans' }}>₹{product.price} <span className="text-base text-gray-500">/Pc</span>
                                    </span>
                                </span>

                                <button className="flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-5 bg-green-500 text-white font-semibold rounded-full hover:bg-yellow-400 transition duration-300 text-sm mt-4 sm:mt-0" style={{fontFamily:'Poppins'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
