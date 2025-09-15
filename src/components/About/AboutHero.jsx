import React from 'react';

const AboutHero = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={heroStyle} className="h-[60vh] flex items-center justify-center rounded-xl text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-600 tracking-tight uppercase">
          About Us
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Engineered for Peak Performance. Discover the science and passion behind the supplements trusted by athletes worldwide.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;