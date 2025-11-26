import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import whyChooseUsBg from "../assets/why_choose_us/why-choose-us-bg.jpg";
import { FaRecycle, FaTruck, FaShoppingBag } from "react-icons/fa";
import { PiSquaresFourBold } from "react-icons/pi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: FaRecycle,
    title: "Eco - Friendly",
    description:
      "Every product is made from recycled or responsibly sourced materials. You get quality without harming the planet.",
  },
  {
    icon: FaTruck,
    title: "Free Shipping",
    description:
      "Enjoy complimentary shipping on all orders, making eco-friendly choices even more accessible.",
  },
  {
    icon: FaShoppingBag,
    title: "Pocket Friendly",
    description:
      "Sustainable living doesn't have to be expensive. Our products offer great value without compromising quality.",
  },
  {
    icon: PiSquaresFourBold,
    title: "Wide Product Range",
    description:
      "Explore a diverse selection of eco-conscious products, from everyday essentials to unique sustainable innovations.",
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxContentHeight, setMaxContentHeight] = useState(0);

  const sectionRef = useRef(null);
  const iconRefs = useRef([]);
  const contentRefs = useRef([]); // refs for title+desc blocks to measure
  const ctxRef = useRef(null);
  const activeIndexRef = useRef(0);
  const prevIndexRef = useRef(0);

  // animate title/desc reveal when activeIndex changes
  useEffect(() => {
    const newIndex = activeIndex;
    const prevIndex = prevIndexRef.current;
    const direction = newIndex > prevIndex ? 1 : newIndex < prevIndex ? -1 : 0; // 1 = down, -1 = up

    // get DOM nodes
    const incoming = contentRefs.current[newIndex];
    const outgoing = contentRefs.current[prevIndex];

    // hide outgoing, animate incoming
    if (outgoing && outgoing !== incoming) {
      gsap.killTweensOf(outgoing);
      gsap.to(outgoing, { opacity: 0, y: direction === 1 ? 10 : -10, duration: 0.18, ease: "power1.in" });
    }

    if (incoming) {
      gsap.killTweensOf(incoming);
      // reset start (from top if scrolling down => y:-20, from bottom if scrolling up => y:20)
      gsap.set(incoming, { opacity: 0, y: direction === 1 ? -20 : direction === -1 ? 20 : 0, willChange: "transform,opacity" });
      gsap.to(incoming, { opacity: 1, y: 0, duration: 0.42, ease: "power2.out" });
    }

    prevIndexRef.current = newIndex;
    activeIndexRef.current = newIndex;
  }, [activeIndex]);

  useLayoutEffect(() => {
    iconRefs.current = iconRefs.current.slice(0, features.length);
    contentRefs.current = contentRefs.current.slice(0, features.length);

    const buildTimeline = () => {
      // teardown previous
      if (ctxRef.current) {
        ctxRef.current.revert();
        ScrollTrigger.getAll().forEach((st) => {
          if (st.vars && st.vars.trigger === sectionRef.current) st.kill();
        });
        ctxRef.current = null;
      }

      const section = sectionRef.current;
      if (!section) return;

      const vw = Math.max(window.innerWidth, 1);
      const lastIdx = features.length - 1;

      const ctx = gsap.context(() => {
        const tl = gsap.timeline();

        // ensure initial positions (first centered)
        iconRefs.current.forEach((el, i) => {
          if (el) gsap.set(el, { x: i === 0 ? 0 : vw, opacity: i === 0 ? 1 : 0, willChange: "transform,opacity" });
        });

        // Build slot-based timeline (0..lastIdx-1)
        for (let s = 0; s < lastIdx; s++) {
          const currentEl = iconRefs.current[s];
          const nextEl = iconRefs.current[s + 1];

          if (nextEl) {
            tl.set(nextEl, { x: vw, opacity: 0 }, s);
            tl.to(nextEl, { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, s);
          } else {
            tl.to({}, { duration: 1 }, s);
          }

          if (currentEl) {
            tl.to(currentEl, { x: -vw, opacity: 0, duration: 0.6, ease: "power2.in" }, s + 0.6);
          }
        }

        // ScrollTrigger pinned area: use (features.length - 1) so last item stays centered
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerHeight * Math.max(features.length - 1, 1)}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          animation: tl,
          snap: {
            snapTo: (value) => {
              const slots = Math.max(1, lastIdx);
              return Math.round(value * slots) / slots;
            },
            duration: 0.25,
            ease: "power1.out",
          },
          onUpdate: (self) => {
            // map progress to index using slots = lastIdx
            const slots = Math.max(1, lastIdx);
            const calcIndex = Math.min(lastIdx, Math.max(0, Math.round(self.progress * slots)));
            if (calcIndex !== activeIndexRef.current) {
              activeIndexRef.current = calcIndex;
              setActiveIndex(calcIndex);
            }
            if (self.progress <= 0.001 && activeIndexRef.current !== 0) {
              activeIndexRef.current = 0;
              setActiveIndex(0);
            }
            if (self.progress >= 0.999 && activeIndexRef.current !== lastIdx) {
              activeIndexRef.current = lastIdx;
              setActiveIndex(lastIdx);
            }
          },
        });

        // ensure first visible
        const first = iconRefs.current[0];
        if (first) gsap.set(first, { x: 0, opacity: 1 });
      }, section);

      ctxRef.current = ctx;
    }; // buildTimeline

    // measure content heights to avoid shifting
    const measureContentHeights = () => {
      let max = 0;
      contentRefs.current.forEach((el) => {
        if (!el) return;
        // ensure element is measurable: temporarily make visible offscreen if necessary
        // Use getBoundingClientRect which works even if opacity:0; but if display:none it won't.
        const rect = el.getBoundingClientRect();
        const h = Math.ceil(rect.height);
        if (h > max) max = h;
      });
      if (max > 0 && max !== maxContentHeight) setMaxContentHeight(max);
    };

    // initial build + measurement
    buildTimeline();
    // Wait for browser to render content then measure
    requestAnimationFrame(() => {
      measureContentHeights();
      ScrollTrigger.refresh();
    });

    // on resize, rebuild and re-measure
    const onResize = () => {
      clearTimeout(window.__wcResizeTimer);
      window.__wcResizeTimer = setTimeout(() => {
        buildTimeline();
        measureContentHeights();
        ScrollTrigger.refresh();
      }, 120);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (ctxRef.current) {
        ctxRef.current.revert();
        ctxRef.current = null;
      }
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars && st.vars.trigger === sectionRef.current) st.kill();
      });
    };
  }, []); // run once

  return (
    <section
      ref={sectionRef}
      className="relative bg-cover bg-center py-20 px-6 text-white min-h-[100vh] flex items-center overflow-hidden"
      style={{ backgroundImage: `url(${whyChooseUsBg})` }}
    >
      <div className="absolute inset-0 bg-green-800 opacity-70"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          Our goal is to make eco-friendly choices easy for both individuals and businesses.
        </p>

        {/* Icon track */}
        <div
          className="relative flex justify-center items-center h-48 md:h-64 mb-8 w-full overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute left-0 right-0 h-[3px] top-1/2 transform -translate-y-1/2" />

          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                ref={(el) => (iconRefs.current[idx] = el)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                           bg-yellow-400 text-green-800 rounded-full p-4 md:p-5 shadow-lg
                           flex items-center justify-center pointer-events-none"
                style={{
                  zIndex: 20 + (idx === activeIndex ? 10 : 0),
                  width: "4.25rem",
                  height: "4.25rem",
                }}
              >
                <Icon className="text-3xl md:text-4xl" />
              </div>
            );
          })}
        </div>

        {/* Title + Description area (stacked absolutely, keep space reserved by spacer) */}
        <div style={{ position: "relative", width: "100%" }} className="mb-12">
          {/* Spacer keeps layout stable with height = tallest content */}
          <div style={{ height: maxContentHeight || undefined }} />

          {/* All content blocks are absolutely stacked inside this box */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: maxContentHeight || "auto",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              pointerEvents: "none", // prevent accidental selection during animation
            }}
          >
            <div style={{ width: "100%", maxWidth: "64rem", padding: "0 1rem" }}>
              {features.map((f, idx) => (
                <div
                  key={idx}
                  ref={(el) => (contentRefs.current[idx] = el)}
                  style={{
                    position: idx === activeIndex ? "relative" : "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    opacity: idx === activeIndex ? 1 : 0,
                    transform: "translateY(0px)",
                    pointerEvents: idx === activeIndex ? "auto" : "none",
                  }}
                >
                  <h3 className="text-3xl md:text-4xl font-semibold mb-4">{f.title}</h3>
                  <p className="text-lg md:text-xl max-w-4xl mx-auto">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
