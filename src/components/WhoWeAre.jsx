import React, { useRef, useEffect, useState } from "react";
import "./WhoWeAre.css"; // <-- import the stylesheet
import missionImg from "../assets/who_we_are/mission.png";
import approachImg from "../assets/who_we_are/approach.png";
import impactImg from "../assets/who_we_are/imapct.png";
import promiseImg from "../assets/who_we_are/promise.png";

const cards = [
  { id: 0, img: missionImg, alt: "Our Mission" },
  { id: 1, img: approachImg, alt: "Our Approach" },
  { id: 2, img: impactImg, alt: "Our Impact" },
  { id: 3, img: promiseImg, alt: "Our Promise" },
];

export default function WhoWeAre() {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const section = sectionRef.current;
    if (!scrollContainer || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.8,
      }
    );

    observer.observe(section);

    const handleWindowWheel = (e) => {
      if (!isSectionVisible) return;

      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      const isScrollContainerAtTop = scrollTop === 0;
      const isScrollContainerAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if (e.deltaY > 0) {
        if (!isScrollContainerAtBottom) {
          e.preventDefault();
          scrollContainer.scrollBy({ top: e.deltaY, behavior: 'smooth' });
        }
      } else if (e.deltaY < 0) {
        if (!isScrollContainerAtTop) {
          e.preventDefault();
          scrollContainer.scrollBy({ top: e.deltaY, behavior: 'smooth' });
        }
      }
    };

    window.addEventListener("wheel", handleWindowWheel, { passive: false });

    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", handleWindowWheel);
    };
  }, [isSectionVisible]);

  return (
    <section
      id="who-we-are-section"
      ref={sectionRef}
      className="bg-[#086c02] text-white py-20 px-8 lg:px-20 flex flex-col lg:flex-row items-center"
    >
      <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12 self-start pt-12">
        <h2 className="text-5xl font-bold mb-6">Who We Are?</h2>
        <p className="text-lg mb-4">
          Future Green creates practical, sustainable products that fit seamlessly into everyday life.
        </p>
        <p className="text-lg mb-8">
          We combine responsible materials, thoughtful design, and transparent practices to make eco-friendly choices easy and accessible.
        </p>
        <button className="bg-white text-green-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
          Know More
        </button>
      </div>

      <div className="lg:w-1/2 flex items-center justify-center">
        <div
          ref={scrollContainerRef}
          className="w-full max-w-[580px] h-[430px] overflow-y-auto space-y-4 hide-scrollbar"
        >
          <ul id="cards" className="w-full flex flex-col gap-4 container">
            <li id="card1" className="card w-full h-[430px] overflow-hidden flex-shrink-0">
              <div className="card-body w-full h-full flex items-center justify-center ">
                <img src={cards[0].img} alt={cards[0].alt} className=" rounded-[30px]"/>
              </div>
            </li>

            <li id="card2" className="card w-full h-[430px] overflow-hidden flex-shrink-0">
              <div className="card-body w-full h-full flex items-center justify-center">
                <img src={cards[1].img} alt={cards[1].alt} className=" rounded-[30px]" />
              </div>
            </li>

            <li id="card3" className="w-full h-[430px] overflow-hidden flex-shrink-0 card">
              <div className="card-body w-full h-full flex items-center justify-center">
                <img src={cards[2].img} alt={cards[2].alt} className=" rounded-[30px]" />
              </div>
            </li>

            <li id="card4" className="w-full h-[430px] overflow-hidden flex-shrink-0 card">
              <div className="card-body w-full h-full flex items-center justify-center">
                <img src={cards[3].img} alt={cards[3].alt} className=" rounded-[30px]" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
