import React from 'react';
import ctaImg from "../../assets/about/CTA.jpg"


const CTASection = () => {
  return (
    <section className="py-20 " style={{
    backgroundImage: `url(${ctaImg})`, 
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover"
  }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Unlock Your Potential?
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          Join the thousands of athletes who trust Maxigen to fuel their journey. Explore our range of premium supplements today.
        </p>
        <a 
          href="/shop" 
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Explore Our Products
        </a>
      </div>
    </section>
  );
};

export default CTASection;