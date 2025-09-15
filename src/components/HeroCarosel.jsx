import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselData = [
  {
    image: 'src/assets/hero/hero1..jpeg', 
    topLabel: 'Advanced Whey Blend',
    title: 'NITROGEN',
    subtitle: 'High-quality whey protein for maximum muscle growth and rapid recovery. Achieve your peak.',
    buttonText: 'Product Details',
  },
  {
    image: 'src/assets/hero/hero2.jpeg',
    topLabel: 'Get Your Natural Protein',
    title: 'FUEL YOUR STRENGTH',
    subtitle: 'Maxigen fuels your strength, helping you maximize your gains and unleash your true potential.',
    buttonText: 'View Product',
  },
  {
    image: 'src/assets/hero/hero3.jpeg', // 
    topLabel: 'Ultimate Performance',
    title: 'IGNITE WITH INFERNO',
    subtitle: 'Our ultimate pre-workout formula for explosive energy and laser-sharp focus. Dominate every workout.',
    buttonText: 'Order Now',
  },
];



const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

 
  useEffect(() => {

    const slideInterval = setInterval(nextSlide, 5000); 
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  
  const { image, topLabel, title, subtitle, buttonText } = carouselData[currentIndex];

  return (
    <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden shadow-2xl font-sans bg-black rounded-xl mb-4">
  
      <div className="absolute top-0 left-0 w-full h-full">
        {carouselData.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              slideIndex === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover" 
            />
          </div>
        ))}
        {/* Dark overlay to make text more readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      </div>


      {/* Slide Content */}
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center text-white p-4 z-10">
        <div className="w-11/12 max-w-4xl">
            <p className="font-semibold uppercase tracking-widest text-gray-300 text-sm md:text-base mb-3">
              {topLabel}
            </p>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold uppercase my-4 drop-shadow-xl font-bebas-neue">
              {title}
            </h1>
            <p className="max-w-xl mx-auto text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
              {subtitle}
            </p>
            <button className="bg-white text-black font-bold py-3 px-10 rounded-md hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wider">
              {buttonText}
            </button>
        </div>
      </div>

      {/* Navigation Arrows (Left/Right) */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-all z-20 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-all z-20 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <ChevronRight size={28} />
      </button>

      {/* Navigation Dots (Bottom) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {carouselData.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === slideIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;

