// HeroSection.jsx
import React from "react";
import logo_img_bg from "../assets/logo_img_bg.webp";
import callForFreeAdviceButton from "../assets/call-for-free-advice-button.svg";
import Arrow from "./Arrow";

const HeroSection = ({ onApplyClick }) => {
  // Updated stats to reflect LifeKoach's core offerings without numbers
  const stats = [
    {
      title: "MENTORSHIP",
      subtitle: "Personalized guidance",
      icon: "👤",
    },
    {
      title: "DEVELOPMENT",
      subtitle: "Custom solutions",
      icon: "💻",
    },
    {
      title: "GROWTH",
      subtitle: "Career & emotional support",
      icon: "🌱",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0D6EFD] to-[#00D87A] before:absolute before:inset-0 before:z-0 before:pointer-events-none before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9IjIuOCIgbnVtT2N0YXZlcz0iNiIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')] before:opacity-95 before:mix-blend-overlay after:absolute after:inset-0 after:z-0 after:pointer-events-none after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+PGZpbHRlciBpZD0iYiI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIzLjUiIG51bU9jdGF2ZXM9IjgiIHR5cGU9ImZyYWN0YWxOb2lzZSIvPjxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjYikiLz48L3N2Zz4=')] after:opacity-85 after:mix-blend-overlay after:saturate-0">
      <div className="pt-16 md:pt-0 max-h-[700px]:pt-10 max-h-[600px]:pt-6 max-h-[500px]:pt-4">
        {/* Arrow Component */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:block max-h-[700px]:bottom-4 max-h-[600px]:bottom-3 max-h-[500px]:bottom-2">
          <Arrow />
        </div>

        {/* Mobile Layout (300px - 767px) */}
        <div className="md:hidden min-h-screen flex flex-col pt-4 relative max-h-[700px]:pt-2 max-h-[600px]:pt-1 max-h-[500px]:pt-0">
          {/* Image positioned behind content */}
          <div className="absolute inset-0 flex justify-center items-end z-0">
            <img
              src={logo_img_bg}
              alt="LifeKoach"
              className="h-[35rem] w-5/5 max-w-md pb-40 object-contain mx-auto"
            />
          </div>

          {/* Content Container */}
          <div className="flex-1 flex flex-col pt-16 px-4 sm:px-6 relative z-10 max-h-[700px]:pt-12 max-h-[600px]:pt-8 max-h-[500px]:pt-6 max-h-[450px]:pt-4">
            <div className="w-full">
              {/* Main Heading */}
              <div className="overflow-hidden transition-all duration-500 ease-in-out text-white">
                <h1 className="text-3xl sm:text-3xl font-bold leading-tight transition-all duration-500 ease-in-out max-h-[700px]:text-xl max-h-[600px]:text-lg max-h-[500px]:text-base max-h-[450px]:text-sm">
                  <span className="font-zalando block">NAVIGATE LIFE'S</span>
                  <span className="font-zalando block">CHALLENGES WITH</span>
                  <span className="font-zalando">
                    EXPERT GUIDANCE
                    <span style={{ fontFamily: "Google Sans Code" }}>.</span>
                  </span>
                </h1>
              </div>

              {/* Privacy Notice */}
              <div className="flex items-start gap-3 py-3 mt-3 transition-all duration-500 ease-in-out max-h-[700px]:py-2 max-h-[600px]:py-1.5 max-h-[500px]:py-1 max-h-[450px]:py-0.5">
                <span className="text-white/90 text-base leading-relaxed max-h-[700px]:text-sm max-h-[600px]:text-xs max-h-[500px]:text-xs max-h-[450px]:text-xs">
                  We value your privacy and use your information only to improve
                  your experience
                </span>
              </div>

              {/* CTA Button - Only call button */}
              <div className="mt-2 transition-all duration-500 ease-in-out max-h-[700px]:mt-3 max-h-[600px]:mt-2 max-h-[500px]:mt-1.5 max-h-[450px]:mt-1">
                <a
                  href="tel:9310243054"
                  className="cursor-pointer bg-transparent border-none p-0 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-0.5 relative z-10 inline-block"
                >
                  <img
                    src={callForFreeAdviceButton}
                    alt="Call for free advice"
                    className="w-auto h-10 transition-all duration-300 ease-in-out max-h-[700px]:h-8 max-h-[600px]:h-6 max-h-[500px]:h-5 max-h-[450px]:h-4"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Stats Section at the bottom */}
          <div className="mt-4 pb-6 px-4 sm:px-6 relative z-10 pb-32 max-h-[700px]:pb-25 max-h-[600px]:pb-20 max-h-[500px]:pb-12 max-h-[450px]:pb-8">
            <div className="bg-[#0a192f]/30  backdrop-blur-lg rounded-full px-4 shadow-xl border border-white/10 transition-all duration-500 ease-in-out max-h-[700px]:px-3 max-h-[600px]:px-2 max-h-[500px]:px-1.5 max-h-[450px]:px-1">
              <div className="grid grid-cols-3 gap-2">
                {stats.map((stat, idx) => (
                  <div
                    key={stat.title}
                    className="flex flex-col items-center justify-center text-center transition-all duration-500 ease-in-out"
                  >
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="text-white text-sm font-bold mb-1">
                      {stat.title}
                    </div>
                    <div className="text-white/90 text-xs leading-tight">
                      {stat.subtitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Layout (768px - 1023px) */}
        <div className="hidden md:block lg:hidden min-h-screen relative max-h-[700px]:min-h-[85vh] max-h-[600px]:min-h-[80vh] max-h-[500px]:min-h-[75vh] max-h-[450px]:min-h-[70vh]">
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-1/2 z-10 ml-10 max-h-[700px]:top-2/5 max-h-[600px]:top-1/3 max-h-[500px]:top-1/4 max-h-[450px]:top-1/5 max-h-[700px]:ml-5 max-h-[600px]:ml-2 max-h-[500px]:ml-1 max-h-[450px]:ml-0">
            {/* Main Heading */}
            <div className="overflow-hidden transition-all duration-500 ease-in-out text-white relative z-10">
              <h1 className="text-3xl font-bold leading-tight transition-all duration-500 ease-in-out max-h-[700px]:text-2xl max-h-[600px]:text-xl max-h-[500px]:text-lg max-h-[450px]:text-base">
                <span className="font-zalando block">NAVIGATE LIFE'S</span>
                <span className="font-zalando block">CHALLENGES WITH</span>
                <span className="font-zalando">
                  EXPERT GUIDANCE
                  <span style={{ fontFamily: "Google Sans Code" }}>.</span>
                </span>
              </h1>
            </div>

            {/* Privacy Notice */}
            <div className="flex items-start gap-3 py-3 mt-4 transition-all duration-500 ease-in-out max-h-[700px]:py-2 max-h-[600px]:py-1.5 max-h-[500px]:py-1 max-h-[450px]:py-0.5">
              <span className="text-white/90 text-lg leading-relaxed max-h-[700px]:text-base max-h-[600px]:text-sm max-h-[500px]:text-xs max-h-[450px]:text-xs">
                We respect your privacy and use your data solely to enhance your
                experience
              </span>
            </div>

            {/* CTA Button - Only call button */}
            <div className="mt-6 transition-all duration-500 ease-in-out max-h-[700px]:mt-4 max-h-[600px]:mt-3 max-h-[500px]:mt-2 max-h-[450px]:mt-1.5">
              <a
                href="tel:9310243054"
                className="cursor-pointer bg-transparent border-none p-0 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-0.5 relative z-10 inline-block"
              >
                <img
                  src={callForFreeAdviceButton}
                  alt="Call for free advice"
                  className="w-auto h-12 transition-all duration-300 ease-in-out max-h-[700px]:h-10 max-h-[600px]:h-8 max-h-[500px]:h-6 max-h-[450px]:h-5"
                />
              </a>
            </div>

            {/* Stats Section */}
            <div className="mt-8 w-full max-w-md transition-all duration-500 ease-in-out relative z-10 max-h-[700px]:mt-6 max-h-[600px]:mt-4 max-h-[500px]:mt-3 max-h-[450px]:mt-2">
              <div className="bg-[#0a192f]/30 backdrop-blur-lg rounded-full p-5 shadow-xl border border-white/10 transition-all duration-500 ease-in-out max-h-[700px]:p-4 max-h-[600px]:p-3 max-h-[500px]:p-2 max-h-[450px]:p-1.5">
                <div className="grid grid-cols-3 gap-4 max-h-[600px]:gap-3 max-h-[500px]:gap-2 max-h-[450px]:gap-1">
                  {stats.map((stat, idx) => (
                    <div
                      key={stat.title}
                      className="flex flex-col items-center justify-center text-center transition-all duration-500 ease-in-out"
                    >
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className="text-white text-base font-bold mb-1">
                        {stat.title}
                      </div>
                      <div className="text-white/90 text-sm max-w-[130px] leading-tight">
                        {stat.subtitle}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tablet Image */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 flex justify-center items-center transition-all duration-500 ease-in-out max-h-[700px]:top-2/5 max-h-[600px]:top-1/3 max-h-[500px]:top-1/4 max-h-[450px]:top-1/5">
            <img
              src={logo_img_bg}
              alt="LifeKoach"
              className="h-80 w-4/5 object-contain transition-all duration-500 ease-in-out"
            />
          </div>
        </div>

        {/* Small Desktop Layout (1024px - 1279px) */}
        <div className="hidden lg:block xl:hidden min-h-screen max-h-[700px]:min-h-[85vh] max-h-[600px]:min-h-[80vh] max-h-[500px]:min-h-[75vh] max-h-[450px]:min-h-[70vh]">
          <div className="h-full min-h-screen flex items-center pl-8 lg:pl-10 max-h-[700px]:min-h-[85vh] max-h-[600px]:min-h-[80vh] max-h-[500px]:min-h-[75vh] max-h-[450px]:min-h-[70vh] max-h-[700px]:pl-6 max-h-[600px]:pl-4 max-h-[500px]:pl-2 max-h-[450px]:pl-1">
            <div className="container mx-auto px-4 sm:px-6 max-h-[700px]:px-3 max-h-[600px]:px-2 max-h-[500px]:px-1 max-h-[450px]:px-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
                <div className="text-white ml-4 md:ml-6 max-h-[700px]:ml-2 max-h-[600px]:ml-1 max-h-[500px]:ml-0 max-h-[450px]:ml-0 -mt-20">
                  {/* Main Heading */}
                  <div className="h-[120px] mb-3 overflow-hidden transition-all duration-500 ease-in-out relative z-10 max-h-[700px]:h-[100px] max-h-[600px]:h-[80px] max-h-[500px]:h-[60px] max-h-[450px]:h-[50px]">
                    <h1 className="text-2xl md:text-3xl font-bold leading-tight transition-all duration-500 ease-in-out max-h-[700px]:text-xl max-h-[600px]:text-lg max-h-[500px]:text-base max-h-[450px]:text-sm">
                      <span className="font-zalando block">
                        NAVIGATE LIFE'S
                      </span>
                      <span className="font-zalando block">
                        CHALLENGES WITH
                      </span>
                      <span className="font-zalando">
                        EXPERT GUIDANCE
                        <span style={{ fontFamily: "Google Sans Code" }}>
                          .
                        </span>
                      </span>
                    </h1>
                  </div>

                  {/* Privacy Notice */}
                  <div className="flex items-start gap-3 py-1 transition-all duration-500 ease-in-out max-h-[700px]:py-0.5 max-h-[600px]:py-0 max-h-[500px]:py-0 max-h-[450px]:py-0">
                    <span className="text-white/90 text-sm md:text-base max-h-[700px]:text-xs max-h-[600px]:text-xs max-h-[500px]:text-xs max-h-[450px]:text-xs">
                      We respect your privacy and use your data solely to <br />
                      enhance your experience
                    </span>
                  </div>

                  {/* CTA Button - Only call button */}
                  <div className="mt-4 transition-all duration-500 ease-in-out max-h-[700px]:mt-2 max-h-[600px]:mt-1 max-h-[500px]:mt-0.5 max-h-[450px]:mt-0.5">
                    <a
                      href="tel:9310243054"
                      className="cursor-pointer bg-transparent border-none p-0 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-0.5 relative z-10 inline-block"
                    >
                      <img
                        src={callForFreeAdviceButton}
                        alt="Call for free advice"
                        className="w-auto h-8 md:h-9 transition-all duration-300 ease-in-out max-h-[700px]:h-6 max-h-[600px]:h-5 max-h-[500px]:h-4 max-h-[450px]:h-3"
                      />
                    </a>
                  </div>

                  {/* Stats Section */}
                  <div className="mt-4 w-full max-w-xl transition-all duration-500 ease-in-out relative z-10 max-h-[700px]:mt-2 max-h-[600px]:mt-1 max-h-[500px]:mt-0.5 max-h-[450px]:mt-0.5">
                    <div className="bg-[#0a192f]/30 backdrop-blur-lg rounded-full p-3 shadow-xl border border-white/10 transition-all duration-500 ease-in-out max-h-[700px]:p-2 max-h-[600px]:p-1.5 max-h-[500px]:p-1 max-h-[450px]:p-0.5">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 max-h-[500px]:gap-1 max-h-[450px]:gap-0.5">
                        {stats.map((stat, idx) => (
                          <div
                            key={stat.title}
                            className="flex flex-col items-center justify-center text-center transition-all duration-500 ease-in-out"
                          >
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-white text-sm font-bold mb-1">
                              {stat.title}
                            </div>
                            <div className="text-white/90 text-xs max-w-[100px] md:max-w-[120px] leading-tight">
                              {stat.subtitle}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="min-h-[220px] md:min-h-[250px] flex justify-center items-center transition-all duration-500 ease-in-out max-h-[700px]:min-h-[180px] max-h-[600px]:min-h-[150px] max-h-[500px]:min-h-[120px] max-h-[450px]:min-h-[100px]">
                  <img
                    src={logo_img_bg}
                    alt="LifeKoach"
                    width={500}
                    height={500}
                    loading="eager"
                    className="w-full max-w-xs md:max-w-sm transition-all duration-500 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Desktop Layout (1280px and above) */}
        <div className="hidden xl:block min-h-screen max-h-[700px]:min-h-[85vh] max-h-[600px]:min-h-[80vh] max-h-[500px]:min-h-[75vh] max-h-[450px]:min-h-[70vh]">
          <div className="h-full min-h-screen flex items-center pl-10 md:pl-12 lg:pl-16 xl:pl-20 max-h-[700px]:min-h-[85vh] max-h-[600px]:min-h-[80vh] max-h-[500px]:min-h-[75vh] max-h-[450px]:min-h-[70vh] max-h-[700px]:pl-8 max-h-[600px]:pl-6 max-h-[500px]:pl-4 max-h-[450px]:pl-2">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-h-[700px]:px-3 max-h-[600px]:px-2 max-h-[500px]:px-1 max-h-[450px]:px-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="text-white mt-13 ml-4 md:ml-6 lg:ml-8 max-h-[700px]:ml-2 max-h-[600px]:ml-1 max-h-[500px]:ml-0 max-h-[450px]:ml-0 -mt-20">
                  {/* Main Heading */}
                  <div className="h-[140px] md:h-[160px] lg:h-[130px] overflow-hidden transition-all duration-500 ease-in-out relative z-10 max-h-[700px]:h-[120px] max-h-[600px]:h-[100px] max-h-[500px]:h-[80px] max-h-[450px]:h-[60px]">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight transition-all duration-500 ease-in-out max-h-[700px]:text-lg max-h-[600px]:text-base max-h-[500px]:text-sm max-h-[450px]:text-xs">
                      <span className="font-zalando block">
                        NAVIGATE LIFE'S
                      </span>
                      <span className="font-zalando block">
                        CHALLENGES WITH
                      </span>
                      <span className="font-zalando">
                        EXPERT GUIDANCE
                        <span style={{ fontFamily: "Google Sans Code" }}>
                          .
                        </span>
                      </span>
                    </h1>
                  </div>

                  {/* Privacy Notice */}
                  <div className="flex mt-4 items-start gap-3 py-1 md:py-2 transition-all duration-500 ease-in-out max-h-[700px]:py-0.5 max-h-[600px]:py-0 max-h-[500px]:py-0 max-h-[450px]:py-0">
                    <span className="text-white/90 text-sm md:text-base lg:text-1xl max-h-[700px]:text-xs max-h-[600px]:text-xs max-h-[500px]:text-xs max-h-[450px]:text-xs">
                      We respect your privacy and use your data solely to <br />
                      enhance your experience
                    </span>
                  </div>

                  {/* CTA Button - Only call button */}
                  <div className="mt-4 md:mt-6 transition-all duration-500 ease-in-out max-h-[700px]:mt-2 max-h-[600px]:mt-1 max-h-[500px]:mt-0.5 max-h-[450px]:mt-0.5">
                    <a
                      href="tel:9310243054"
                      className="cursor-pointer bg-transparent border-none p-0 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-0.5 relative z-10 inline-block"
                    >
                      <img
                        src={callForFreeAdviceButton}
                        alt="Call for free advice"
                        className="w-auto h-7 md:h-8 lg:h-10 transition-all duration-300 ease-in-out max-h-[700px]:h-6 max-h-[600px]:h-5 max-h-[500px]:h-4 max-h-[450px]:h-3"
                      />
                    </a>
                  </div>

                  {/* Stats Section */}
                  <div className="mt-4 md:mt-15 w-full max-w-2xl transition-all duration-500 ease-in-out relative z-10 max-h-[700px]:mt-2 max-h-[600px]:mt-1 max-h-[500px]:mt-0.5 max-h-[450px]:mt-0.5">
                    <div className="bg-[#0a192f]/30 backdrop-blur-lg rounded-full p-2 md:p-3 shadow-xl border border-white/10 transition-all duration-500 ease-in-out max-h-[700px]:p-1.5 max-h-[600px]:p-1 max-h-[500px]:p-0.5 max-h-[450px]:p-0.5">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 max-h-[500px]:gap-1 max-h-[450px]:gap-0.5">
                        {stats.map((stat, idx) => (
                          <div
                            key={stat.title}
                            className="flex flex-col items-center justify-center text-center transition-all duration-500 ease-in-out"
                          >
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-white text-sm font-bold mb-1">
                              {stat.title}
                            </div>
                            <div className="text-white/90 text-xs max-w-[110px] md:max-w-[130px] leading-tight">
                              {stat.subtitle}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="min-h-[250px] md:min-h-[300px] flex justify-center items-center transition-all duration-500 ease-in-out max-h-[700px]:min-h-[200px] max-h-[600px]:min-h-[170px] max-h-[500px]:min-h-[140px] max-h-[450px]:min-h-[120px]">
                  <img
                    src={logo_img_bg}
                    alt="LifeKoach"
                    width={700}
                    height={700}
                    loading="eager"
                    className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl transition-all duration-500 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
