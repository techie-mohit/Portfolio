import React from "react";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Typewriter } from "react-simple-typewriter";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center py-20 overflow-hidden select-none">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-10 opacity-30 mix-blend-color-dodge pointer-events-none">
        <img src="/images/bg.png" alt="background texture" className="w-full h-full object-cover" />
      </div>

      {/* Modern Ambient glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-600/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col lg:flex-row items-center justify-between relative z-20 gap-12 mt-16 sm:mt-24">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center w-full lg:w-3/5 text-left">
          <div className="flex flex-col gap-6">
            <div className="hero-text select-text">
              <span className="text-purple-400 font-extrabold uppercase tracking-widest text-sm sm:text-base mb-2 block">
                Welcome to my portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-gray-400 mb-1 leading-tight">
                Hi, I am
              </h2>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                Mohit Keshari
              </h1>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mt-6 flex flex-wrap items-center leading-normal text-indigo-400">
                <span className="text-gray-300">I am a&nbsp;</span>
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent font-black">
                  <Typewriter
                    words={[
                      "Software Engineer",
                      "Full Stack Developer",
                      "MERN Stack Developer",
                      "Backend Developer",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={80}
                    delaySpeed={1000}
                  />
                </span>
              </h3>
            </div>
            
            <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed mt-2 font-medium">
              I architect highly scalable, robust MERN stack applications and low-latency system solutions with solid expertise in modern backend services.
            </p>
          </div>
        </header>

        {/* RIGHT: 3D Model */}
        <div className="w-full lg:w-2/5 flex justify-center items-center relative">
          <div className="absolute w-[350px] h-[350px] rounded-full bg-purple-500/5 blur-[80px] -z-10 animate-pulse"></div>
          <div className="xl:w-[480px] xl:h-[480px] lg:w-[400px] lg:h-[400px] md:w-[380px] md:h-[380px] sm:w-[320px] sm:h-[320px] w-[280px] h-[280px]">
            <HeroExperience />
          </div>
        </div>
      </div>

      {/* Live Animated counters */}
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
