import { useState, useEffect } from "react";

import { navLinks } from "../constant";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl px-6 py-4 rounded-3xl border transition-all duration-500 ease-in-out z-[100] ${
        scrolled
          ? "bg-black/80 backdrop-blur-2xl border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)] py-3.5"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto flex items-center justify-between">
        <a
          href="#hero"
          className="text-white text-xl sm:text-2xl font-black tracking-wider bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        >
          MOHIT
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-8">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="relative group">
                <a
                  href={link}
                  className="text-gray-300 text-sm font-bold tracking-wide uppercase group-hover:text-purple-400 transition-colors duration-300 py-1 block"
                >
                  {name}
                </a>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:flex">
          <a
            href="#contact"
            className="relative group overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-extrabold text-sm uppercase px-6 py-2.5 rounded-2xl shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105"
          >
            Contact me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50 group"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-300 rounded-full ${
              isOpen ? "rotate-45 translate-y-2 bg-purple-400" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-opacity duration-300 rounded-full ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-300 rounded-full ${
              isOpen ? "-rotate-45 -translate-y-2 bg-purple-400" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-2xl transition-all duration-500 z-40 lg:hidden flex flex-col justify-center items-center px-8 py-16 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <nav className="w-full text-center">
          <ul className="flex flex-col space-y-8">
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a
                  href={link}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black text-gray-300 hover:text-purple-400 uppercase tracking-widest transition-colors duration-300 block"
                >
                  {name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-extrabold text-base uppercase px-8 py-3.5 rounded-2xl shadow-xl transition-all duration-300"
              >
                Contact me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;