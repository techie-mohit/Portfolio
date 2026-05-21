import { socialImgs } from "../constant";

const Footer = () => {
  return (
    <footer className="bg-black/90 border-t border-white/5 py-12 px-6 sm:px-10 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <p className="text-sm text-gray-500 font-medium text-center md:text-left select-text">
          © {new Date().getFullYear()} Mohit Keshari. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-purple-600 hover:text-white hover:border-purple-500 hover:scale-105 shadow-md"
              aria-label="Social Link"
            >
              <img
                src={socialImg.imgPath}
                alt="social icon"
                className="w-5 h-5 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;