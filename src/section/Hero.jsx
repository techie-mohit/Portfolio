import React from "react";

import HeroExperience from "../components/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="backgrund" />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between relative z-20 gap-4 mt-20">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 xl:mb-10">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h2>Hi, I am </h2>
              <h1>Mohit Keshari</h1>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 mt-5 text-[#8245ee] leading-tight">
                <span className="text-white lg:text-5xl ">I am a&nbsp;&nbsp;</span>

                <span className="Typewriter-text md:text-5xl ">
                  <Typewriter
                    words={[
                      "Full Stack Developer",
                      "MERN Stack Developer",
                      "Backend Developer",
                      "Coder",
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
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <div>
          <div className="xl:w-[500px] xl:h-[500px] lg:w-[400px] lg:h-[400px] md:w-[350px] md:h-[350px] sm:w-[300px] sm:h-[300px] w-[250px] h-[200px] md:mt-20 xl:mb-50">
            <HeroExperience />
          </div>
        </div>
      </div>

      {/* <AnimatedCounter /> */}
    </section>
  );
};

export default Hero;
