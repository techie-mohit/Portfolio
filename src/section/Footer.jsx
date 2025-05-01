import { socialImgs } from "../constant";

const Footer = () => {
  return (
 
    <footer className="bg-gray-900 text-white py-4 mt-10 ">
      <div className="container mx-auto flex justify-center">
        <p className="text-sm text-center">
          Terms & Conditions
        </p>
      </div>
      <div className="flex items-center justify-center gap-5 mt-5">
        {socialImgs.map((socialImg, index) => (
          <a key={index} 
          href={socialImg.link} 
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black-50 bg-black-100 flex justify-center items-center rounded-xl size-10 md:size-12 cursor-pointer transition-all duration-500 hover:bg-black-50">
            <img src={socialImg.imgPath} alt="social icon" className="inline-block" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;