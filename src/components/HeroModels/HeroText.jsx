import { Typewriter } from "react-simple-typewriter";

const HeroText = () =>{
    return (
        <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center md:px-30" >
        <h2 className="lg:text-2xl sm:text-xl ">Hello, I am </h2>
        <h1 className="md:text-[2.8rem] lg:text-4xl sm:text-4xl font-bold font-special">Mohit Keshari</h1>
    
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ee] leading-tight">
            <span className="text-white">I am a&nbsp;&nbsp;</span>
    
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
            />
            </span>
        </h3>
        </div>
    );
}

export default HeroText;