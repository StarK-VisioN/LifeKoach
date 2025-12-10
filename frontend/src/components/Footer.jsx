// Footer.jsx
import React from 'react';
import { 
  Envelope, 
  Phone, 
  MapPin, 
  FacebookLogo, 
  TwitterLogo, 
  InstagramLogo, 
  LinkedinLogo, 
  YoutubeLogo 
} from '@phosphor-icons/react';
import logo_img_bg from '../assets/logo_img_bg.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#" },
        { name: "About Us", href: "#" },
        { name: "Services", href: "#" },
        { name: "Mentors", href: "#" },
        { name: "Testimonials", href: "#" }
      ]
    },
    {
      title: "Our Services",
      links: [
        { name: "Career Guidance", href: "#" },
        { name: "Personal Development", href: "#" },
        { name: "Emotional Support", href: "#" },
        { name: "Skill Enhancement", href: "#" },
        { name: "Networking", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Disclaimer", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: <FacebookLogo size={24} />, href: "#" },
    { name: "Twitter", icon: <TwitterLogo size={24} />, href: "#" },
    { name: "Instagram", icon: <InstagramLogo size={24} />, href: "#" },
    { name: "LinkedIn", icon: <LinkedinLogo size={24} />, href: "#" },
    { name: "YouTube", icon: <YoutubeLogo size={24} />, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-8 pb-4">
      <div className="container mx-auto px-6 md:px-12 lg:px-38">
        {/* Top Section - Company Info */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <img 
              src={logo_img_bg} 
              alt="LifeKoach Logo" 
              className="h-10 w-auto mr-3"
            />
            <h2 className="text-xl font-bold">LifeKoach</h2>
          </div>
          <p className="text-gray-300 mb-4 max-w-2xl text-sm">
            Your trusted partner in personal and professional growth. We connect you with expert mentors who guide you through life's challenges and help you unlock your full potential.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="bg-gray-800 hover:bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Middle Section - Links and Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 border-t border-gray-800 pt-6">
          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-base font-bold mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold mb-3">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={16} className="text-blue-500 mr-3 mt-1" />
                <span className="text-gray-300 text-sm">
                  123, Business Park, Mumbai, Maharashtra 400001, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-blue-500 mr-3" />
                <span className="text-gray-300 text-sm">
                  +91 72768 96735
                </span>
              </li>
              <li className="flex items-center">
                <Envelope size={16} className="text-blue-500 mr-3" />
                <span className="text-gray-300 text-sm">
                  contact@lifekoach.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-800 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs mb-2 md:mb-0">
              © {currentYear} LifeKoach. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-xs transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xs transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xs transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;