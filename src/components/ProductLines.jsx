import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Product data (same as your original)
const productData = [
  {
    title: "Ethical Paper",
    description:
      "Made from 100% recycled and tree-free materials for everyday printing, writing, and art.",
    image: "/src/assets/product_lines/product1.jpg",
  },
  {
    title: "Sustainable Stationery",
    description:
      "Notebooks, diaries, and office supplies crafted from recycled paper with minimal environmental impact.",
    image: "/src/assets/product_lines/product2.jpg",
  },
  {
    title: "Ecopact Recycled Tissues",
    description:
      "Soft, unbleached tissues made from industrial kraft paper waste, offering a clean and green alternative.",
    image: "/src/assets/product_lines/product3.jpg",
  },
  {
    title: "Bioplastics",
    description:
      "Compostable and bio-based alternatives to traditional plastic items for responsible packaging and use.",
    image: "/src/assets/product_lines/product4.jpg",
  },
  {
    title: "Disposable Cutlery",
    description:
      "Durable, food-safe cutlery manufactured from plant-based or recycled materials for sustainable dining.",
    image: "/src/assets/product_lines/product5.jpg",
  },
  {
    title: "Packaging Solutions",
    description:
      "Eco-friendly packaging options that replace conventional plastics with recyclable and biodegradable materials.",
    image: "/src/assets/product_lines/product6.jpg",
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

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Primary Product Lines
          </h2>
          <p className="text-lg text-gray-700 max-w-md mx-auto">
            Responsible essentials designed to reduce waste and support everyday sustainable living.
          </p>
        </div>

        {productsInRows.map((row, rowIndex) => (
          <ProductRow key={rowIndex} rowProducts={row} cardsPerRow={cardsPerRow} />
        ))}
      </div>
    </section>
  );
}

// ProductRow: computes per-card initial X so they all start overlapped at screen center,
// then animates back to x: 0 (their final grid position).
function ProductRow({ rowProducts, cardsPerRow }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // refs for each card DOM node
  const cardRefs = useRef([]);
  cardRefs.current = [];

  // initialXs holds the computed translateX (in px) that moves each card's center to viewport center.
  // We animate from initialX -> 0
  const [initialXs, setInitialXs] = useState(null);
  const [alreadyMeasured, setAlreadyMeasured] = useState(false);

  // callback to attach refs
  const setCardRef = (el, idx) => {
    cardRefs.current[idx] = el;
  };

  useEffect(() => {
    if (!inView || alreadyMeasured) return;

    // compute initial offsets once when row becomes visible
    const computeOffsets = () => {
      const viewportCenterX = window.innerWidth / 2;

      const xs = rowProducts.map((_, idx) => {
        const el = cardRefs.current[idx];
        if (!el) return 0;
        const rect = el.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        // amount to move the card so its center aligns with viewport center
        // we want the card to start at center, so initial translate = viewportCenter - cardCenterX
        return viewportCenterX - cardCenterX;
      });

      setInitialXs(xs);
      setAlreadyMeasured(true);
    };

    // compute after a tiny rAF so layout is stable
    requestAnimationFrame(computeOffsets);

    const onResize = () => {
      // if not yet animated, recompute offsets so center stays correct
      if (!alreadyMeasured) requestAnimationFrame(computeOffsets);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [inView, rowProducts, alreadyMeasured]);

  // If screen is very narrow (1 column) or only one card, don't apply horizontal movement
  const shouldStackCenter = rowProducts.length > 1;

  // If not yet measured and not in view, we still render cards but invisible (to avoid layout shift on measurement).
  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 last:mb-0"
      aria-hidden={false}
    >
      {rowProducts.map((product, index) => {
        // default initial = 0 (no shift) so the card stays in place on small screens or if measure unavailable
        const initX = (() => {
          if (!shouldStackCenter) return 0;
          if (!initialXs) {
            // not yet measured: keep it visually hidden and slightly scaled so the measuring won't show flicker
            return 0;
          }
          return initialXs[index] ?? 0;
        })();

        // subtle stagger based on index
        const delay = 0.06 * index;

        return (
          <motion.div
            key={index}
            ref={(el) => setCardRef(el, index)}
            className="p-4 bg-white rounded-[20px] shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            initial={{
              x: shouldStackCenter && initialXs ? initX : 0,
              opacity: 0,
              scale: shouldStackCenter ? 0.98 : 1,
            }}
            animate={
              inView
                ? { x: 0, opacity: 1, scale: 1 }
                : { x: shouldStackCenter && initialXs ? initX : 0, opacity: 0, scale: 0.98 }
            }
            transition={{
              x: { type: "spring", stiffness: 90, damping: 22, mass: 0.8, delay },
              opacity: { duration: 0.35, delay },
              scale: { type: "spring", stiffness: 180, damping: 20, delay },
            }}
          >
            <div className="relative h-80 w-full">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>
            <div className="mt-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
              <p className="text-gray-600 text-base">{product.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
