import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import customerSaysBg from '../assets/our_customer_says/customer-says-bg.jpg';
import doubleQuotesIcon from '../assets/our_customer_says/double-quotes.png';

const allTestimonials = [
  {
    id: 1,
    quote: "Reliable products and consistent quality. Our team shifted to sustainable stationery without any disruption, and the feedback has been excellent.",
    name: "Rohan M.",
    title: "Corporate Buyer",
  },
  {
    id: 2,
    quote: "The eco-friendly packaging and cutlery fit our brand perfectly. Customers appreciate the change, and the cost stays within budget.",
    name: "Anita S.",
    title: "Café Owner",
  },
  {
    id: 3,
    quote: "Working with Future Green has been smooth and straightforward. Their range, pricing, and support make them an easy choice for reselling.",
    name: "Vikram P.",
    title: "Retail Partner",
  },
  {
    id: 4,
    quote: "The recycled paper and tissues are top quality. Clients are always surprised that eco-friendly products can look and feel this good.",
    name: "Shruti K.",
    title: "Sustainability Consultant",
  },
  {
    id: 5,
    quote: "We switched our entire office to Future Green products. The pricing is fair, delivery is quick, and the team loves the change.",
    name: "Devansh R.",
    title: "Office Admin",
  },
  {
    id: 6,
    quote: "The biodegradable cups and cutlery work perfectly for large events. No compromise on durability, and the eco-benefits are a big plus.",
    name: "Meera L.",
    title: "Event Organizer",
  },
  {
    id: 7,
    quote: "Future Green's commitment to sustainability is truly inspiring. Their products are not only good for the planet but also of exceptional quality.",
    name: "Priya S.",
    title: "Environmental Activist",
  },
  {
    id: 8,
    quote: "As a small business owner, finding affordable and eco-friendly packaging was a challenge until I found Future Green. Their service is excellent.",
    name: "Rahul K.",
    title: "Small Business Owner",
  },
  {
    id: 9,
    quote: "The compostable cutlery from Future Green has been a game-changer for our catering events. Our clients loves it.",
    name: "Sneha G.",
    title: "Catering Manager",
  },
  {
    id: 10,
    quote: "I've been using Future Green's recycled paper products for my art studio, and they are fantastic. The texture and durability are perfect for my needs.",
    name: "Arjun P.",
    title: "Artist",
  },
  {
    id: 11,
    quote: "Switching to Future Green's eco-friendly office supplies was a smooth transition. Our employees appreciate the greener workplace.",
    name: "Jessica T.",
    title: "Office Manager",
  },
  {
    id: 12,
    quote: "Future Green offers a diverse range of sustainable products. We've incorporated their items into our hotel.",
    name: "David H.",
    title: "Hotel Manager",
  },
];

const testimonialsPerPage = 6;

export default function OurCustomersSay() {
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * testimonialsPerPage;
  const endIndex = startIndex + testimonialsPerPage;
  const currentTestimonials = allTestimonials.slice(startIndex, endIndex);

  const totalPages = Math.ceil(allTestimonials.length / testimonialsPerPage);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  return (
    <section 
      className="relative py-10 lg:py-20 px-8 lg:px-20 min-h-screen flex justify-center items-center overflow-hidden" 
      style={{ backgroundImage: `url(${customerSaysBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="relative z-10 max-auto mx-auto px-4 text-center lg:px-20">
        <h2 className="text-5xl font-bold text-gray-900 mb-2" style={{fontFamily:'Poppins'}}>Know What Our Customers Say</h2>
        <p className="text-lg text-gray-800 mb-10">
          Businesses and individuals trust our products for their quality, value, and genuine sustainability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {currentTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl shadow-sm p-8 flex flex-col text-left border border-gray-100">
              <div className="flex items-center justify-center h-12 w-12 rounded-full border border-gray-300 border-2 bg-white mb-6 flex-shrink-0">
                <img src={doubleQuotesIcon} alt="Double Quotes" className="h-6 w-6 object-contain" />
              </div>
              <p className="text-lg text-gray-800 leading-relaxed mb-6 flex-grow">{testimonial.quote}</p>
              <div className="border-t border-gray-200 pt-6 mt-auto flex items-center flex-shrink-0">
                <UserCircleIcon className="h-12 w-12 text-gray-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-base font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center space-x-4 mt-10">
          <button 
            onClick={goToPrevPage}
            className={`p-3 rounded-full transition duration-300 cursor-pointer border-2 
              ${currentPage > 0 ? 'border-black text-black hover:border-yellow-400 hover:text-yellow-400 hover:bg-yellow-100' : 'border-gray-300 text-gray-400 cursor-not-allowed'}`}
            disabled={currentPage === 0}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button 
            onClick={goToNextPage}
            className={`p-3 rounded-full transition duration-300 cursor-pointer border-2 
              ${currentPage < totalPages - 1 ? 'border-green-500 text-green-500 hover:bg-green-100' : 'border-gray-300 text-gray-400 cursor-not-allowed'}`}
            disabled={currentPage === totalPages - 1}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
