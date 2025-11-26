import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import AboutUs from './components/AboutUs.jsx'
import TrendingProducts from './components/TrendingProducts.jsx'
import ProductLines from './components/ProductLines.jsx'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'


export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-800">
      <Header />
      <main className="relative overflow-hidden">
        <Hero />
        <AboutUs />
        <ProductLines />
        <TrendingProducts />

        <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">What Our Customers Say</h2>
          <Testimonials />
        </section>


      </main>
      <Footer />
    </div>
  )
}
