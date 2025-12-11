// Team.jsx
import React, { useState, useEffect, useRef } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import teamMember1 from '../assets/team_mem1.png';
import teamMember2 from '../assets/team_mem2.jpg';
import teamMember3 from '../assets/team_mem2.jpg';
import teamMember4 from '../assets/team_mem2.jpg';
import teamMember5 from '../assets/team_mem2.jpg';
import teamMember6 from '../assets/team_mem2.jpg';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dibya Jyoti Das",
      position: "FOUNDER OF THE COMPANY",
      description: "DIBYA leads the tech strategy and innovation efforts at the company.",
      image: teamMember1,
    },
    {
      id: 2,
      name: "TEAM MEM 1",
      position: "Financial Analyst",
      description: "TEAM 1 evaluates financial data and provides strategic insights.",
      image: teamMember2,
    },
    {
      id: 3,
      name: "TEAM MEM 2",
      position: "Human Resources Manager",
      description: "TEAM 2 manages talent acquisition and workplace culture.",
      image: teamMember3,
    },
    {
      id: 4,
      name: "TEAM MEM 3",
      position: "Product Manager",
      description: "TEAM 3 oversees product development from concept to launch.",
      image: teamMember4,
    },
    {
      id: 5,
      name: "TEAM MEM 4",
      position: "Marketing Director",
      description: "TEAM 4 drives our marketing campaigns and brand presence.",
      image: teamMember5,
    },
    {
      id: 6,
      name: "TEAM MEM 5",
      position: "Operations Manager",
      description: "TEAM 5 ensures efficient daily operations and process optimization.",
      image: teamMember6,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef();
  const timeoutRef = useRef();

  // Auto slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, teamMembers.length]);

  // Reset auto play timer on manual interaction
  const resetAutoPlayTimer = () => {
    setIsAutoPlaying(false);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  const goToPrevious = () => {
    resetAutoPlayTimer();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? teamMembers.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    resetAutoPlayTimer();
    const isLastSlide = currentIndex === teamMembers.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    resetAutoPlayTimer();
    setCurrentIndex(index);
  };

  return (
    <div className="py-5 pb-20 px-6 md:px-12 lg:px-38">
      <div className="container mx-auto">

        {/* Heading Section */}
        <div className="flex flex-col items-start mb-12">

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 font-zalando">
                MEET OUR TEAM
              </h2>
              <p className="text-lg text-gray-900">
                Dedicated professionals driving our success
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Slider View */}
        <div className="md:hidden relative py-8">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="flex flex-col items-center group">
                    {/* Circular Image */}
                    <div className="relative mb-6">
                      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Decorative ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Team Member Details */}
                    <div className="text-center">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 transition-colors duration-300 group-hover:text-blue-600">
                        {member.name}
                      </h3>
                      <div className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                        {member.position}
                      </div>
                      <p className="text-black text-sm md:text-base max-w-xs">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg z-10 transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <CaretLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg z-10 transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <CaretRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center group"
            >
              {/* Circular Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Team Member Details */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 transition-colors duration-300 group-hover:text-blue-600">
                  {member.name}
                </h3>
                <div className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                  {member.position}
                </div>
                <p className="text-black text-sm md:text-base max-w-xs">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;