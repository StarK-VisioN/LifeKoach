import React from "react";

const ScrollingText = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#103E83] h-10 flex items-center">
      {/* Fade effect on left side - same color */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#103E83] to-transparent z-10"></div>
      
      {/* Fade effect on right side - same color */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#103E83] to-transparent z-10"></div>
      
      <div className="flex w-full">
        <div className="flex whitespace-nowrap animate-infinite-scroll-slow items-center">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-center">
              <span className="text-white text-xl font-bold tracking-wide">
                India’s No.1 Mentorship & Personal Growth Platform for Youth and Professionals
              </span>
              <div className="flex items-center mx-12 space-x-2">
                <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex whitespace-nowrap animate-infinite-scroll-slow items-center" aria-hidden="true">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-center">
              <span className="text-white text-xl font-bold tracking-wide">
                India's No.1 fintech company in MSME loans and Business loans
              </span>
              <div className="flex items-center mx-12 space-x-2">
                <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;