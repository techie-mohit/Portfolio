import { SkillsInfo } from "../constant";
import Tilt from "react-parallax-tilt";
import React from 'react'

const TechStack = () => {
  return (
    <section
      id="skills"
      className="py-32 px-[6vw] md:px-[7vw] lg:px-[15vw] font-sans relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-purple-600/5 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none"></div>

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
          Skills & Expertise
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          A collection of my technical skills and expertise honed through various professional experiences and building scalable applications.
        </p>
      </div>

      {/* Skill Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="group/card bg-gradient-to-b from-gray-900/60 to-black/80 backdrop-blur-2xl px-6 sm:px-8 py-8 rounded-3xl border border-white/5 shadow-2xl hover:border-purple-500/20 hover:shadow-purple-500/5 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 tracking-wide flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></span>
                {category.title}
              </h3>

              {/* Skill Items */}
              <Tilt
                key={category.title}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                perspective={1200}
                scale={1.02}
                transitionSpeed={800}
                gyroscope={false}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 w-full">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center space-x-2.5 bg-white/[0.02] border border-white/5 rounded-2xl py-3 px-3.5 text-left hover:bg-white/[0.06] hover:border-purple-500/30 transition-all duration-300 group"
                    >
                      <img
                        src={skill.imgPath}
                        alt={`${skill.name} logo`}
                        className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                      <span className="text-xs sm:text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Tilt>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
