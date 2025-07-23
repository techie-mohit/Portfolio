import React from "react";
import { useMediaQuery } from "react-responsive";
import Tilt from "react-parallax-tilt";
// import myPhoto from "../assets/myphoto.jpg"; // ✅ Correct spelling?

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 550px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  

  return (
    <div className="flex items-center justify-center h-full w-full">
      <Tilt className="  rounded-full shadow-lg"
      tiltMaxAngleX={10} tiltMaxAngleY={10} 
      perspective={1000} 
      scale={1.1} 
      transitionSpeed={1000} 
      gyroscope={true}>
        <img
        src="assets/myphoto.jpg" // ✅ Correct path to the image
        alt="My Profile"
        className={`rounded-full object-cover shadow-lg transition-all duration-500 ${
          isMobile ? 'w-40 h-40' : isTablet ? 'w-60 h-60 ' :'w-85 h-85'
        }`}
      />
      </Tilt>
    </div>
  );
};

export default HeroExperience;
