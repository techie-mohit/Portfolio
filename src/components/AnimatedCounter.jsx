
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";

import { counterItems } from "../constant";

// gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      // Set initial value to 0
      gsap.set(numberElement, { innerText: "0" });

      // Create the counting animation
      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 }, // Ensures whole numbers
        scrollTrigger: {
          trigger: "#counter",
          start: "top center",
        },
        // Add the suffix after counting is complete
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    }, counterRef);
  }, []);

  return (
    <div id="counter" ref={counterRef} className="max-w-7xl mx-auto px-6 mt-16 sm:mt-24 relative z-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="group/counter bg-gradient-to-b from-gray-900/60 to-black/80 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/5 shadow-2xl hover:border-purple-500/20 hover:shadow-purple-500/5 transition-all duration-500 flex flex-col justify-center text-center relative overflow-hidden"
          >
            {/* Ambient card hover glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-indigo-500/5 opacity-0 group-hover/counter:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="counter-number text-4xl sm:text-5xl font-extrabold mb-2.5 bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(139,92,246,0.15)]">
              0 {item.suffix}
            </div>
            <div className="text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
