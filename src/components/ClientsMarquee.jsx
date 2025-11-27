import React from 'react';
import amazon from '../assets/clients/amazon.png';
import bigbasket from '../assets/clients/bigbasket.png';
import brillio from '../assets/clients/brillio.png';
import facebook from '../assets/clients/facebook.png';
import flipkart from '../assets/clients/flipkart.png';
import printo from '../assets/clients/printo.png';
import randstad from '../assets/clients/randstad.png';
import samsung from '../assets/clients/samsung.png';
import tally from '../assets/clients/tally.png';
import wurfel from '../assets/clients/wurfel.png';
import zeiss from '../assets/clients/zeiss.png';

const clientLogos = [
  amazon,
  bigbasket,
  brillio,
  facebook,
  flipkart,
  printo,
  randstad,
  samsung,
  tally,
  wurfel,
  zeiss,
];

export default function ClientsMarquee() {
  return (
    <section className="bg-gradient-to-r from-green-800 to-green-700 py-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-semibold mb-12" style={{ fontFamily: 'Poppins' }}>Clients Who Trust Us</h2>
      </div>
      <div className="relative w-full flex overflow-hidden py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {clientLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="mx-8 max-h-20 h-20 w-auto object-contain p-2 rounded-lg"
              style={{ filter: 'brightness(1.1) contrast(1.2)' }}
            />
          ))}
          {clientLogos.map((logo, index) => (
            <img
              key={`duplicate-${index}`}
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="mx-8 max-h-16 h-16 w-auto object-contain bg-white p-2 rounded-lg shadow-md"
              style={{ filter: 'brightness(1.1) contrast(1.2)' }}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite; /* Adjust duration as needed */
        }
      `}</style>
    </section>
  );
}
