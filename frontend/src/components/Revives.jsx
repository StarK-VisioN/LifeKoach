// Revives.js
import React, { useState, useEffect, useRef } from 'react';
import depressionImage from '../assets/depression.jpg';
import careerPressureImage from '../assets/carrier_pressure.jpg';
import familyPressureImage from '../assets/family_pressure.jpg';
import loveFailureImage from '../assets/love_failure.jpg';
import examPressureImage from '../assets/exam_pressure.jpg';
import financialProblemImage from '../assets/financial_pressure.jpg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Revives = () => {
  const problems = [
    {
      id: 1,
      name: "Depression",
      image: depressionImage,
    },
    {
      id: 2,
      name: "Career Pressure",
      image: careerPressureImage,
    },
    {
      id: 3,
      name: "Family Pressure",
      image: familyPressureImage,
    },
    {
      id: 4,
      name: "Love Failure",
      image: loveFailureImage,
    },
    {
      id: 5,
      name: "Exam Pressure",
      image: examPressureImage,
    },
    {
      id: 6,
      name: "Financial Problem",
      image: financialProblemImage,
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
          prevIndex === problems.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, problems.length]);

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
    const newIndex = isFirstSlide ? problems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    resetAutoPlayTimer();
    const isLastSlide = currentIndex === problems.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    resetAutoPlayTimer();
    setCurrentIndex(index);
  };

  return (
    <div className="py-30  px-6 md:px-12 lg:px-30">
      <div className="container mx-auto">

        {/* Heading Section */}
        <div className="flex flex-col items-start mb-12">

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0 md:mr-6 font-zalando">
              THE PROBLEM'S SOLUTION WE HAVE
            </h2>
          </div>
        </div>

        {/* Mobile Slider View */}
        <div className="md:hidden relative">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {problems.map((problem) => (
                <div
                  key={problem.id}
                  className="flex flex-col items-center w-full flex-shrink-0 group py-8"
                >
                  {/* Circular Image - Larger size */}
                  <div className="relative mb-6">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-900 shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                      <img
                        src={problem.image}
                        alt={problem.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Problem Name - Larger text */}
                  <h3 className="text-2xl font-bold text-green-900 text-center transition-colors duration-300 group-hover:text-green-600">
                    {problem.name}
                  </h3>
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
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg z-10 transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {problems.map((_, index) => (
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

        {/* Desktop Horizontal View */}
        <div className="hidden md:flex flex-wrap gap-4 sm:gap-6 justify-center md:gap-8 lg:gap-12">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="flex flex-col group w-28 sm:w-32 md:w-auto"
            >
              {/* Circular Image */}
              <div className="relative mb-3 sm:mb-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-55 md:h-55 rounded-full overflow-hidden border-4 border-green-500 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                  <img
                    src={problem.image}
                    alt={problem.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Problem Name */}
              <h3 className="text-sm sm:text-base md:text-lg md:text-xl font-semibold text-green-900 text-center transition-colors duration-300 group-hover:text-green-600">
                {problem.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Revives;