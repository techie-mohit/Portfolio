import React from 'react'


const About = () => {
  return (
  <section
    id="about"
    className="py-32 px-[12vw] md:px-[7vw] lg:px-[15vw] relative overflow-hidden"
  >
    {/* Ambient Glows */}
    <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px] pointer-events-none"></div>
    <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none"></div>

    {/* Section Title */}
    <div className="text-center mb-16 relative z-10">
      <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase bg-clip-text">
        About Me
      </h2>
      <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
    </div>

    <div className="relative z-10 max-w-4xl mx-auto">
      <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-purple-500/10 hover:border-purple-500/30 transition-all duration-500 group relative">
        {/* Glow overlay */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed select-text">
          I am a full-stack developer with a passion for creating dynamic and responsive web applications.
          Skilled in both front-end and back-end development, I specialize in the MERN stack and other
          modern technologies. I am a passionate software engineer with a strong foundation in computer science and a great interest in web development.
        </p>
      </div>
    </div>
  </section>
  )
}

export default About
