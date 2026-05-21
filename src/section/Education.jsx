
import React from "react";
import { education } from "../constant"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-32 px-[6vw] md:px-[7vw] lg:px-[15vw] font-sans relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] rounded-full bg-indigo-600/5 blur-[130px] pointer-events-none"></div>

      {/* Section Title */}
      <div className="text-center mb-24 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
          Education
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          My academic foundation, coursework, and milestones.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative max-w-5xl mx-auto z-10">
        {/* Glowing Center Line */}
        <div className="absolute sm:left-1/2 left-4 top-0 bottom-0 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-transparent shadow-[0_0_10px_rgba(139,92,246,0.3)]"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-stretch mb-20 relative ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline node marker */}
            <div className="absolute sm:left-1/2 left-4 top-8 transform -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-purple-500 shadow-[0_0_12px_rgba(139,92,246,0.8)] z-20 transition-all duration-300"></div>

            {/* Content Section */}
            <div
              className={`w-full sm:w-[calc(50%-40px)] p-6 sm:p-8 rounded-3xl border border-white/5 bg-gradient-to-b from-gray-900/60 to-black/80 backdrop-blur-2xl shadow-2xl hover:border-purple-500/20 hover:shadow-purple-500/5 transition-all duration-500 ml-12 sm:ml-0`}
            >
              {/* Flex container for image and text */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-4 border-b border-white/5">
                {/* School Logo/Image */}
                <div className="w-20 h-14 bg-white border border-white/10 rounded-2xl overflow-hidden shrink-0 p-1.5 flex items-center justify-center shadow-md">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-500/5 px-2.5 py-1 rounded-full w-fit">
                    {edu.date}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1.5 leading-snug">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm font-semibold text-gray-400 leading-normal">
                    {edu.school}
                  </h4>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="inline-block bg-indigo-500/10 text-xs font-bold text-indigo-400 border border-indigo-500/10 rounded-full px-3 py-1 uppercase tracking-wide">
                  Grade: {edu.grade}
                </span>
              </div>
              <p className="mt-4 text-gray-300 text-sm leading-relaxed font-medium select-text">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
