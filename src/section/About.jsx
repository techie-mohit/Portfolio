import React from 'react'


const About = () => {
  return (
  <section
        id="about"
        className="py-24 pb-24 px-[15vw] md:px-[7vw]  "
      >
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">About</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        </div>
        <div className="border border-white bg-gray-900 backdrop-blur-md  p-8 rounded-xl">
            <p className="mt-4 text-gray-400 font-bold"> I am a full-stack developer with a passion for creating dynamic and responsive web applications. I have a strong foundation in computer science and a keen interest in web development. I have experience in building dynamic and responsive web applications using modern technologies.
            Skilled in both front-end and back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and efficient solutions. I am a passionate software engineer with a strong foundation in computer science and a keen interest in web development. I have experience in building dynamic and responsive web applications using modern technologies.</p>
        </div>

        
  
     
      </section>
  )
}

export default About
