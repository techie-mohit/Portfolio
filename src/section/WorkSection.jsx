import React, { useState } from "react";
import { projects } from "../constant";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-32 px-[6vw] md:px-[7vw] lg:px-[15vw] font-sans relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-indigo-600/5 blur-[130px] pointer-events-none"></div>

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
          Featured Projects
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          A showcase of the systems I have designed and built, highlighting scalable backend architectures and dynamic user experiences.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group border border-white/5 bg-gradient-to-b from-gray-900/60 to-black/80 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden cursor-pointer hover:border-purple-500/30 hover:shadow-purple-500/5 hover:-translate-y-2.5 transition-all duration-500"
          >
            <div className="p-4 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            <div className="p-6 pt-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 text-sm line-clamp-3 leading-relaxed font-medium">
                {project.description}
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-purple-500/5 text-[10px] font-bold text-purple-400 border border-purple-500/10 rounded-full px-3 py-1 uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3.5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-1/2 bg-white/[0.04] hover:bg-purple-600 hover:text-white border border-white/5 hover:border-purple-500 text-gray-300 py-3 rounded-2xl text-sm font-bold text-center transition-all duration-300"
                >
                  View Code
                </a>
                {project.webapp && (
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-3 rounded-2xl text-sm font-bold text-center shadow-lg shadow-purple-500/15 transition-all duration-300"
                  >
                    View Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-all duration-300">
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-3xl border border-white/10 shadow-2xl lg:w-full w-[95%] max-w-3xl overflow-y-auto max-h-[90vh] relative p-6 sm:p-10">
            {/* Modal Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:text-purple-400 hover:border-purple-500/30 flex items-center justify-center text-xl font-medium transition-all duration-300"
            >
              &times;
            </button>

            <div className="flex flex-col">
              <div className="w-full flex justify-center mt-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl border border-white/5"
                />
              </div>
              <div className="mt-8">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed select-text">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-500/5 text-[10px] font-bold text-purple-400 border border-purple-500/10 rounded-full px-3 py-1 uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-white/[0.04] hover:bg-purple-600 hover:text-white border border-white/5 hover:border-purple-500 text-gray-300 py-3.5 rounded-2xl text-sm font-bold text-center transition-all duration-300"
                  >
                    View Code
                  </a>
                  {selectedProject.webapp && (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-3.5 rounded-2xl text-sm font-bold text-center shadow-lg shadow-purple-500/15 transition-all duration-300"
                    >
                      View Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
