import React from "react";
import { Link } from "react-router-dom";

const OurStory = () => {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Maxigen Story
          </h2>
          <div className="w-24 h-1 bg-blue-500 mb-6"></div>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Maxigen was born in Delhi, India, from a simple frustration: the
            market was flooded with supplements that promised the world but
            delivered little. Founded by a team of dedicated sports
            nutritionists and fitness veterans, we set out to create a brand
            that stood for transparency and results.
          </p>
          <p className="text-gray-400 leading-relaxed">
            We spent years in the lab, perfecting formulas that were not only
            powerful but also clean. Today, Maxigen is more than just a
            brand—it's a testament to what's possible when science and
            dedication collide.
          </p>
           <Link to="/our-story">
            <button className="px-8 py-3 bg-blue-400 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300 mt-5">
              Read Our Story
            </button>
          </Link>
        </div>
        <div className="order-1 md:order-2">
          <img
            src=""
            alt="Maxigen Lab"
            className="rounded-lg shadow-2xl object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
