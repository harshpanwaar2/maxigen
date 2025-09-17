

import React from "react";
import { Link } from "react-router-dom";

// --- UPDATE THESE IMAGE PATHS ---
// You can re-use images from your about page
import melbourneImg from "../assets/about/lifestyle.jpg"; // Using lifestyle as a placeholder for a cinematic hero
import scientistImg from "../assets/about/scientist.jpeg";
import factoryImg from "../assets/about/factorry.jpg";
import lifestyleImg from "../assets/about/fitness.jpg";
import tabletsImg from "../assets/about/tablets.jpeg";
import researchLabImg from "../assets/about/lab.jpeg"; // Assuming you have an R&D lab shot
// You will likely need a dedicated photo for your founder
// import michaelTrentImg from "../../assets/story/michael-trent.jpg";

const OurStoryPage = () => {
  return (
    <div className="bg-white">
      {/* SECTION 1: The Hero - The Founding Idea */}
      <div className="pl-5 pr-5">
        {/* ADDED: Container for spacing */}
        <div
          // CHANGED: Added rounded-2xl and overflow-hidden
          className="relative h-[55vh] md:h-[60vh] bg-cover bg-center text-white flex items-center justify-center text-center rounded-xl overflow-hidden shadow-lg"
          style={{ backgroundImage: `url(${melbourneImg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 p-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              It Started with a Simple Idea.
            </h1>
            <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto">
              Create clean, science-backed supplements that actually deliver
              results.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-24">
        {/* SECTION 2: The Founder & The "Why" */}
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">
              A Founder's Frustration.
            </h2>
            <div className="w-24 h-1 bg-blue-500 mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The story of Maxigen Nutrition starts with our founder, Michael
              Trent, a former endurance athlete who struggled to find
              supplements that were safe, clean, and transparent. The market was
              filled with artificial fillers, banned substances, and exaggerated
              claims with no scientific backing.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-xl md:text-2xl text-gray-800 font-serif">
              "What if athletes and health enthusiasts could finally trust the
              supplements they used?"
            </blockquote>
          </div>
          <div className="order-1 md:order-2">
            {/* --- Placeholder for Founder's Image --- */}
            <div className="w-full h-96 bg-gray-300 rounded-2xl shadow-lg flex items-center justify-center text-gray-500">
              {/* <img src={michaelTrentImg} alt="Michael Trent, Founder of Maxigen" className="w-full h-full object-cover rounded-2xl" /> */}
              Image of Michael Trent
            </div>
          </div>
        </div>

        {/* SECTION 3: The Early Days - The Grind */}
        <div className="max-w-6xl mx-auto px-4 text-center mt-24">
          <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">
            Long Nights. Real Science. No Shortcuts.
          </h2>
          <div className="w-24 h-1 bg-blue-500 mb-6 mx-auto"></div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Driven by a vision for change, Michael brought together a small but
            dedicated team of scientists and nutritionists. The early days in
            Melbourne were fueled by a commitment to doing things right,
            building an in-house R&D facility before ever launching a product.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <img
              src={scientistImg}
              alt="Scientist researching"
              className="w-full h-64 object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src={researchLabImg}
              alt="R&D Lab"
              className="w-full h-64 object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src={factoryImg}
              alt="Early production facility"
              className="w-full h-64 object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>

        {/* SECTION 4: The Breakthrough */}
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center mt-24">
          <div>
            <img
              src={lifestyleImg}
              alt="Happy customers enjoying a healthy lifestyle"
              className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">
              The Response Was Overwhelming.
            </h2>
            <div className="w-24 h-1 bg-blue-500 mb-6 mx-auto md:mx-0"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              When the first product line launched, customers immediately
              appreciated the clean labels, transparent sourcing, and noticeable
              results. Word began to spread, and the brand quickly grew beyond
              Melbourne, gaining traction across Australia and eventually
              reaching international markets.
            </p>
          </div>
        </div>

        {/* SECTION 5: Unwavering Promise (Parallax Effect) */}
        <div
          className="mt-24 py-24 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${factoryImg})` }}
        >
          <div className="max-w-4xl mx-auto px-4 text-center bg-gray-900 bg-opacity-70 text-white p-12 rounded-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Growth with Integrity.
            </h2>
            <div className="w-24 h-1 bg-blue-500 mb-6 mx-auto"></div>
            <p className="text-lg leading-relaxed">
              Even as we grew, we remained committed to our founding principles.
              Every product is formulated in GMP-certified facilities, is
              third-party tested, and made with internationally sourced,
              premium-grade ingredients.
            </p>
          </div>
        </div>

        {/* SECTION 6: Maxigen Today */}
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center mt-24">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">
              The Trusted Partner for Thousands.
            </h2>
            <div className="w-24 h-1 bg-blue-500 mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, Maxigen Nutrition offers a diverse and ever-growing range
              of supplements for performance, wellness, and more. Our products
              are used and trusted by athletes, personal trainers, and everyday
              wellness seekers across Australia and beyond.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={tabletsImg}
              alt="Maxigen's diverse product range"
              className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* SECTION 7: The Journey Continues (Final CTA) */}
        <div className="bg-gray-50 mt-24 py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">
              From a Garage Idea to a Global Mission.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our journey has been one of passion, persistence, and purpose. But
              no matter how much we grow, we stay rooted in our founding belief
              of creating clean, effective supplements for people who take their
              health seriously.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <button className="w-full px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
                  Shop The Collection
                </button>
              </Link>
              <Link to="/about">
                <button className="w-full px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300">
                  Learn About Our Science
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStoryPage;
