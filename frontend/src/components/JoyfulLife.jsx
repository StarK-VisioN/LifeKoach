// JoyfulLife.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Star, CaretLeft, CaretRight } from '@phosphor-icons/react';

const JoyfulLife = () => {
  const mentors = [
    {
      id: 1,
      name: "Dr. Ananya Sharma",
      problem: "Depression & Anxiety Specialist",
      description: "With over 15 years of experience in clinical psychology, Dr. Sharma has helped more than 2,500 individuals overcome depression and anxiety. Her compassionate approach combines evidence-based therapies with personalized care plans that address each person's unique needs.",
      rating: 5,
      students: 2500
    },
    {
      id: 2,
      name: "Rajiv Mehta",
      problem: "Career Guidance Expert",
      description: "A former HR executive with 20+ years of corporate experience, Rajiv has guided over 3,000 professionals to successful career transitions. His practical insights and industry connections have helped mentees secure positions at top companies worldwide.",
      rating: 5,
      students: 3000
    },
    {
      id: 3,
      name: "Priya Desai",
      problem: "Relationship & Family Counselor",
      description: "Priya brings 12 years of specialized experience in family therapy and relationship counseling. Having worked with over 1,800 families, she excels at resolving conflicts, improving communication, and helping individuals navigate complex family dynamics.",
      rating: 4,
      students: 1800
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
          prevIndex === mentors.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, mentors.length]);

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
    const newIndex = isFirstSlide ? mentors.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    resetAutoPlayTimer();
    const isLastSlide = currentIndex === mentors.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    resetAutoPlayTimer();
    setCurrentIndex(index);
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            color={i < rating ? "#ffe100" : "#d1d5db"} 
            weight={i < rating ? "fill" : "regular"} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className="py-30 bg-[#bfe6f2] px-6 md:px-12 lg:px-38">
      <div className="container mx-auto">

        {/* Heading Section */}
        <div className="flex flex-col items-start mb-8">

          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-zalando">
            BE WITH US LIVE A JOYFUL LIFE
          </h2>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mb-16">
          <p className="text-lg text-gray-700 leading-relaxed">
            If you are stuck in life and don't know what to do, and you're totally blank without anyone to support you, 
            LIFEKOACH is there for you. We have great mentors to guide you on the right path to success. Our mentors guide 
            you in every field, make your problems easier, see your potential, and support you throughout your journey.
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
              {mentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Mentor Name and Problem */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                        {mentor.name}
                      </h3>
                      <div className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mx-auto block text-center">
                        {mentor.problem}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-gray-600 leading-relaxed text-center">
                        {mentor.description}
                      </p>
                    </div>
                    
                    {/* Rating and Students */}
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <div className="flex items-center">
                        <StarRating rating={mentor.rating} />
                        <span className="ml-2 text-sm font-medium text-gray-700">
                          {mentor.rating}.0
                        </span>
                      </div>
                      <div className="text-sm font-medium text-gray-700">
                        {mentor.students.toLocaleString()}+ students
                      </div>
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
            {mentors.map((_, index) => (
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
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Mentor Name and Problem */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {mentor.name}
                </h3>
                <div className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {mentor.problem}
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-6">
                <p className="text-gray-600 leading-relaxed">
                  {mentor.description}
                </p>
              </div>
              
              {/* Rating and Students */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <StarRating rating={mentor.rating} />
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    {mentor.rating}.0
                  </span>
                </div>
                <div className="text-sm font-medium text-gray-700">
                  {mentor.students.toLocaleString()}+ students
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Connect With Our Mentors
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoyfulLife;