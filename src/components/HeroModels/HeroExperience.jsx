import React from "react";
import { useMediaQuery } from "react-responsive";
import Tilt from "react-parallax-tilt";
// import myPhoto from "../assets/myphoto.jpg"; // ✅ Correct spelling?

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const isLaptop = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div className="flex justify-center items-center w-full h-screen">
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
          isMobile ? 'w-40 h-40 mb-40' : isTablet ? 'w-60 h-60 mt-60' : isLaptop ? 'w-72 h-72' : 'w-90 h-90'
        }`}
      />
      </Tilt>
    </div>
  );
};

export default HeroExperience;
