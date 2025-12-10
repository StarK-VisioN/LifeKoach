// Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import logo from "../assets/logo_bg.webp";
import cibilScoreButton from "../assets/cibil-score-button.svg";

const Navbar = ({ onNavClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = "hover:text-green-300 transition-colors duration-200";
  const navLinkActive = "text-green-300 font-semibold";

  // Handle navigation clicks
  const handleNavClick = (e, section) => {
    e.preventDefault();
    onNavClick(section);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (menuOpen) root.classList.add("menu-open");
    else root.classList.remove("menu-open");
    return () => root.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 pl-0 pr-[7vw] md:pl-0 md:pr-[7vw] lg:pl-0 lg:pr-[8vw] py-2 md:py-1 ${
        scrolled 
          ? "bg-[#103E83] shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        
        {/* Logo - Only change for mobile view */}
        <div className="flex items-center flex-shrink -ml-4 md:-ml-6 lg:-ml-8">
          <img
            src={logo}
            alt="Company Logo"
            className="h-16 w-auto md:h-24 md:w-80 lg:h-20 lg:w-110 object-contain cursor-pointer ml-5 md:ml-0 pb-2"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Desktop Menu - Updated to handle section scrolling */}
        <ul className="hidden md:flex gap-8 mr-30 text-lg font-bold text-white">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? navLinkActive : ""}`
              }
              end
              onClick={(e) => handleNavClick(e, "home")}
            >
              Home
            </NavLink>
          </li>

          {/* Services - Now scrolls to Revives section */}
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? navLinkActive : ""}`
              }
              onClick={(e) => handleNavClick(e, "services")}
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? navLinkActive : ""}`
              }
              onClick={(e) => handleNavClick(e, "about")}
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? navLinkActive : ""}`
              }
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Button - UNCHANGED */}
        <button
          className="md:hidden relative w-12 h-12 flex flex-col justify-center items-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-300/50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
              menuOpen ? "rotate-45 translate-y-0" : "mb-1.5"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-0 scale-0" : "mb-1.5"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 translate-y-0" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu - Updated to handle section scrolling */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-[#0D6EFD] to-[#00D87A] shadow-2xl border-l border-white/20">
            
            <div className="flex items-center justify-between p-6 border-b border-white/20 bg-gradient-to-r from-[#0D6EFD]/20 to-[#00D87A]/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="3" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="14" y="3" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="14" y="14" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="3" y="14" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.51" strokeLinecap="round"/>
                    <line x1="6.5" y1="17.5" x2="6.5" y2="17.51" strokeLinecap="round"/>
                    <line x1="17.5" y1="17.5" x2="17.5" y2="17.51" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Menu</h3>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500/20 hover:bg-red-500/30 transition-colors duration-200 border border-red-400/30"
                aria-label="Close menu"
              >
                <svg
                  className="w-5 h-5 text-red-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Links */}
            <nav className="p-6">
              <ul className="space-y-3">

                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-4 px-6 rounded-xl text-white font-medium transition-all duration-200 border ${
                        isActive
                          ? "bg-gradient-to-r from-[#0D6EFD]/30 to-[#00D87A]/20 text-green-300 border-green-500/50 shadow-lg"
                          : "hover:bg-white/10 hover:text-green-300 border-transparent hover:border-white/20"
                      }`
                    }
                    end
                    onClick={(e) => {
                      handleNavClick(e, "home");
                      setMenuOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <span className="text-base">Home</span>
                    </div>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      `block py-4 px-6 rounded-xl text-white font-medium transition-all duration-200 border ${
                        isActive
                          ? "bg-gradient-to-r from-[#0D6EFD]/30 to-[#00D87A]/20 text-green-300 border-green-500/50 shadow-lg"
                          : "hover:bg-white/10 hover:text-green-300 border-transparent hover:border-white/20"
                      }`
                    }
                    onClick={(e) => {
                      handleNavClick(e, "services");
                      setMenuOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <span className="text-base">Services</span>
                    </div>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                      `block py-4 px-6 rounded-xl text-white font-medium transition-all duration-200 border ${
                        isActive
                          ? "bg-gradient-to-r from-[#0D6EFD]/30 to-[#00D87A]/20 text-green-300 border-green-500/50 shadow-lg"
                          : "hover:bg-white/10 hover:text-green-300 border-transparent hover:border-white/20"
                      }`
                    }
                    onClick={(e) => {
                      handleNavClick(e, "about");
                      setMenuOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-base">About Us</span>
                    </div>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact-us"
                    className={({ isActive }) =>
                      `block py-4 px-6 rounded-xl text-white font-medium transition-all duration-200 border ${
                        isActive
                          ? "bg-gradient-to-r from-[#0D6EFD]/30 to-[#00D87A]/20 text-green-300 border-green-500/50 shadow-lg"
                          : "hover:bg-white/10 hover:text-green-300 border-transparent hover:border-white/20"
                      }`
                    }
                    onClick={(e) => {
                      handleNavClick(e, "contact");
                      setMenuOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-base">Contact Us</span>
                    </div>
                  </NavLink>
                </li>

              </ul>
            </nav>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;