// Feedback.jsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  Briefcase, 
  User, 
  Heart, 
  Brain, 
  Chat, 
  ArrowRight,
  CaretLeft,  // Changed from ChevronLeft
  CaretRight  // Changed from ChevronRight
} from '@phosphor-icons/react';

const Feedback = () => {
  const benefits = [
    {
      id: 1,
      icon: <Briefcase size={32} className="text-blue-600" />,
      title: "Career Guidance",
      description: "Specialized programs that provide tools and resources for effective career planning and decision-making through personalized assessments."
    },
    {
      id: 2,
      icon: <User size={32} className="text-green-600" />,
      title: "Personal Development",
      description: "Build essential life skills, confidence, and self-awareness to overcome personal and professional challenges."
    },
    {
      id: 3,
      icon: <Heart size={32} className="text-red-500" />,
      title: "Emotional Support",
      description: "Navigate life's challenges including depression, family pressure, and relationship issues with expert guidance."
    },
    {
      id: 4,
      icon: <Brain size={32} className="text-purple-600" />,
      title: "Skill Enhancement",
      description: "Develop both technical and soft skills through targeted training and real-world application opportunities."
    },
    {
      id: 5,
      icon: <Chat size={32} className="text-yellow-500" />,
      title: "Networking",
      description: "Connect with industry professionals and peers to build valuable relationships for future opportunities."
    },
    {
      id: 6,
      icon: <ArrowRight size={32} className="text-indigo-600" />,
      title: "Goal Achievement",
      description: "Set clear objectives and create actionable plans with mentor support to reach your full potential."
    }
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
          prevIndex === benefits.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, benefits.length]);

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
    const newIndex = isFirstSlide ? benefits.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    resetAutoPlayTimer();
    const isLastSlide = currentIndex === benefits.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    resetAutoPlayTimer();
    setCurrentIndex(index);
  };

  return (
    <div className="py-5 px-6 md:px-12 lg:px-38">
      <div className="container mx-auto">

        {/* Heading Section */}
        <div className="flex flex-col items-start mb-12">

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0 md:mr-6 font-zalando">
              HOW OUR MENTORING PROGRAM USEFUL FOR MENTEE?
            </h2>
          </div>
        </div>

        {/* Introduction Text */}
        <div className="max-w-3xl mb-15">
          <p className="text-lg text-gray-900 leading-relaxed">
            Career guidance is an essential service that helps individuals understand their career options and make informed decisions. Through specialized career guidance programs, participants gain clarity about their career paths and learn how to overcome obstacles they might face in the professional world.
          </p>
        </div>

        {/* Mobile Slider View */}
        <div className="md:hidden relative py-8">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    {/* Icon */}
                    <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-md group-hover:shadow-lg transition-shadow duration-300 mx-auto">
                      {benefit.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300 text-center">
                      {benefit.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-center">
                      {benefit.description}
                    </p>
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
            <CaretLeft size={24} />  {/* Changed from ChevronLeft */}
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg z-10 transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <CaretRight size={24} />  {/* Changed from ChevronRight */}
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {benefits.map((_, index) => (
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
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Icon */}
              <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md group-hover:shadow-lg transition-shadow duration-300">
                {benefit.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Mentoring Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;