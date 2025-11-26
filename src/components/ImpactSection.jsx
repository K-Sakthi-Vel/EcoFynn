import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import impactBg from '../assets/impact-section.jpg';

// Import trending product images
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

gsap.registerPlugin(ScrollTrigger);

export default function ImpactSection() {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);
  const comp = useRef(null);

  const imagesArray = [
    Product1, Product2, Product3, Product4, Product5,
    Product6, Product7, Product8, Product9, Product10
  ];

  useLayoutEffect(() => {
    // make sure refs length matches images
    imageRefs.current = imageRefs.current.slice(0, imagesArray.length);

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      // cleanup older triggers for this section
      ScrollTrigger.getAll().forEach(st => {
        if (st.vars && st.vars.trigger === section) st.kill();
      });

      const imgs = imageRefs.current.filter(Boolean);
      if (!imgs.length) return;

      // viewport & section measurements
      const vh = window.innerHeight;
      const sectionH = Math.max(section.offsetHeight, vh);

      // timeline and mapping configuration (keeps previous behavior)
      const imagesCount = imgs.length;
      const timelineMultiplier = Math.max(1.6, imagesCount * 0.9);
      const pinDistancePx = Math.round(vh * timelineMultiplier);

      const tl = gsap.timeline();

      // layout columns and vertical offsets per image (alternate L/R)
      const leftPercent = 20;
      const rightPercent = 80;
      const perRowVerticalOffset = Math.round(sectionH * 0.06);

      const startBuffer = Math.round(vh * 0.9);
      const endBuffer = Math.round(vh * 0.9);

      const slotDuration = 1;
      const slotOffset = 0.2;

      // === MAIN CHANGE: bigger size + full opacity + stronger shadow ===
      // We'll set each img to be larger (wider) and apply a photographic shadow.
      // Shadow applied via inline style so it matches even if Tailwind config differs.

      imgs.forEach((img, i) => {
        const isRight = i % 2 === 0;
        const colLeft = isRight ? rightPercent : leftPercent;
        const rowSeed = i * perRowVerticalOffset;
        const jitterX = (Math.random() - 0.5) * 36;
        const leftRotation = -20;  // Uniform angle for left images
        const rightRotation = 20; // Uniform angle for right images

        // set placement and visual style (larger width + shadow + full opacity)
        gsap.set(img, {
          left: `${colLeft}%`,
          top: 0,
          transform: 'translate(-50%, 0)',
          x: jitterX,
          rotation: isRight ? rightRotation : leftRotation, // Apply uniform rotation based on side
          opacity: 1, // fully opaque
          scale: 1,   // base scale 1
        });

        // compute off-screen start and end positions
        const startY = sectionH + startBuffer + rowSeed;
        const endY = -endBuffer + rowSeed - 60;

        // vertical travel tween
        tl.fromTo(img,
          {
            y: startY,
            // opacity already 1 so keep it visible
            opacity: 1,
            scale: 1.02,
          },
          {
            y: endY,
            x: jitterX + (Math.random() - 0.5) * 12,
            rotation: isRight ? rightRotation : leftRotation, // Apply uniform rotation
            opacity: 1,           // keep fully opaque throughout
            scale: 1.06,          // slight scale up while moving
            ease: "none",
            duration: slotDuration,
          },
          i * slotOffset
        );

        // no extra fade-in tweens (we keep images fully visible)
      });

      // compute timeline length and hook to scroll trigger (keeps previous mapping)
      const totalTimelineDuration = (imagesCount - 1) * slotOffset + slotDuration;
      const pixelsPerUnit = vh * 1.05;
      const scrollEndPx = Math.round(totalTimelineDuration * pixelsPerUnit);

      ScrollTrigger.create({
        animation: tl,
        trigger: section,
        start: "top top",
        end: `+=${scrollEndPx}`,
        scrub: 0.7,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        // markers: true, // enable if you want to debug
      });

      // refresh
      ScrollTrigger.refresh();

      // resize handler to keep things consistent
      const onResize = () => ScrollTrigger.refresh();
      window.addEventListener('resize', onResize);

      // cleanup listener when timeline is cleaned
      tl._onCleanup = () => window.removeEventListener('resize', onResize);
    }, comp);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(st => {
        if (st.vars && st.vars.trigger === sectionRef.current) st.kill();
      });
    };
  }, [imagesArray]);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-cover bg-center py-20 px-6 sm:px-10 md:px-20 lg:px-32 flex items-center justify-center min-h-[100vh] overflow-hidden"
      style={{ backgroundImage: `url(${impactBg})` }}
    >
      <div className="absolute inset-0 bg-green-900 opacity-20"></div>

      {/* images overlay content; GSAP sets left/top and animates y via timeline */}
      <div ref={comp} className="absolute inset-0 z-20 pointer-events-none">
        {imagesArray.map((image, index) => (
          <img
            key={index}
            ref={el => imageRefs.current[index] = el}
            src={image}
            alt={`Eco-friendly product ${index + 1}`}
            /* LARGER IMAGE + STRONG SHADOW + rounded corners */
            className="absolute rounded-2xl object-cover"
            style={{
              zIndex: 60 + index,
              top: 0,
              pointerEvents: 'none',
              width: '460px', // Fixed width for images
              height: '340px', // Fixed height for images
              boxShadow: '0 30px 60px rgba(0,0,0,0.35)', // stronger photographic shadow
              borderRadius: '14px',
              opacity: 1, // ensure fully opaque in case CSS affects it
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="text-black text-2xl sm:text-xl md:text-3xl leading-relaxed font-medium opacity-[0.7]" style={{ fontFamily: "Poppins" }}>
          Using eco-friendly products may seem small, and some people
          question their real impact. The direct benefit can be debated, but the
          deeper value is in how they shape daily habits. Regular use builds
          awareness and encourages more environmentally responsible
          behavior over time.
        </p>
      </div>
    </section>
  );
}
