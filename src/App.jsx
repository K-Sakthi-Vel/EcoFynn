import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import AboutUs from './components/AboutUs.jsx'
import TrendingProducts from './components/TrendingProducts.jsx'
import ProductLines from './components/ProductLines.jsx'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import ImpactSection from './components/ImpactSection'
import WhyChooseUs from './components/WhyChooseUs'
import ClientsMarquee from './components/ClientsMarquee'
import WhoWeAre from './components/WhoWeAre'
import OurCustomersSay from './components/OurCustomersSay'
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
        <ImpactSection />
        <WhyChooseUs />
        <ClientsMarquee />
        <WhoWeAre />
        <OurCustomersSay />
      </main>
      <Footer />
    </div>
  )
}
