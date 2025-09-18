import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- ICONS (Ensure you have react-icons installed) ---
import { FaFlask, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import { GiWorld } from "react-icons/gi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsBuilding, BsClipboardCheck } from "react-icons/bs";

// --- LOCAL IMAGES ---
// IMPORTANT: Update these paths to match your saved image files in src/assets/images/
import heroImage from '../assets/features/featureHero.png';
import sourcingImage from '../assets/features/journey-sourcing.jpg';
import labImage from '../assets/features/journey-lab.jpg';
import manufacturingImage from '../assets/features/journey-manufacturing.jpg';
import testingImage from '../assets/features/journey-testing.jpg';
import maleAthleteImage from '../assets/features/athlete-male.jpg';
import femaleAthleteImage from '../assets/features/athlete-female.jpg';
import ctaImage from '../assets/features/cta-background.jpg';

const Feature = () => {


     // Data for the Core Pillars Section
  const pillars = [
    {
      icon: <FaFlask size={40} className="text-blue-500" />,
      title: "Scientific Formulation",
      text: "Every product is developed by our in-house R&D team. We use clinically researched ingredients at effective doses to ensure you get real, measurable results."
    },
    {
      icon: <FaShieldAlt size={40} className="text-blue-500" />,
      title: "Uncompromising Quality",
      text: "We source only premium-grade raw materials from trusted global suppliers. Our products are made in GMP-certified facilities to guarantee purity and potency."
    },
    {
      icon: <FaCheckCircle size={40} className="text-blue-500" />,
      title: "Absolute Transparency",
      text: "No proprietary blends. No hidden ingredients. Every batch is third-party tested for safety and quality, so you can be confident in what you’re putting in your body."
    }
  ];

  // Data for the Manufacturing Journey Section
  const journeySteps = [
    {
      icon: <GiWorld size={30} />,
      title: "Premium Sourcing",
      text: "Our journey begins by sourcing the highest-purity raw ingredients from certified global suppliers.",
      imageUrl: sourcingImage
    },
    {
      icon: <AiOutlineFileSearch size={30} />,
      title: "Scientific Formulation",
      text: "Our expert R&D team meticulously researches and formulates each product for maximum synergy and effectiveness.",
      imageUrl: labImage
    },
    {
      icon: <BsBuilding size={30} />,
      title: "Advanced Manufacturing",
      text: "We use state-of-the-art, GMP-certified facilities to produce our supplements under the strictest quality control standards.",
      imageUrl: manufacturingImage
    },
    {
      icon: <BsClipboardCheck size={30} />,
      title: "Rigorous Third-Party Testing",
      text: "Before any product reaches you, it is sent to independent labs to verify its purity, potency, and safety.",
      imageUrl: testingImage
    }
  ];

  // Data for Testimonials
  const testimonials = [
    {
      name: "Rohan Sharma",
      title: "Competitive Bodybuilder",
      quote: "The purity of Maxigen products gives me the confidence to perform at my best. The Ripped Whey is a game-changer during my cutting phase.",
      imageUrl: maleAthleteImage
    },
    {
      name: "Priya Kaur",
      title: "Strength & Conditioning Coach",
      quote: "Recovery is everything. Since I started using the ZMA and EAA+BCAA complex, my soreness has decreased and I'm ready for my next session faster.",
      imageUrl: femaleAthleteImage
    }
  ];


  return (
    <>
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* --- 1. Hero Section --- */}
      <div className="relative bg-gray-800 h-[50vh] flex items-center justify-center text-center text-white ml-4 mr-4 rounded-xl overflow-hidden" >
        <div 
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url(${heroImage})`}}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 p-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Engineered for Excellence.</h1>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-blue-400">Built on Trust.</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Discover the science, quality, and transparency that set Maxigen Nutrition apart.
          </p>
        </motion.div>
      </div>

      {/* --- 2. Core Pillars Section --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-extrabold text-gray-900">The Foundation of Our Promise</h2>
             <p className="mt-4 text-lg text-gray-600">Three core principles guide every product we create.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center p-6 bg-gray-50 rounded-lg shadow-sm"
              >
                <div className="flex justify-center mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. Manufacturing Journey Section --- */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                  <h2 className="text-3xl font-extrabold text-gray-900">From Source to Scoop</h2>
                  <p className="mt-4 text-lg text-gray-600">Our commitment to quality at every step of the process.</p>
            </div>
             <div className="relative">
                  <div className="absolute left-1/2 h-full w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block"></div>
                  {journeySteps.map((step, index) => (
                      <motion.div 
                          key={index}
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7 }}
                          className={`flex flex-col md:flex-row items-center mb-16 md:mb-24 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`} >
                          <div className="md:w-5/12">
                              <img src={step.imageUrl} alt={step.title} className="rounded-lg shadow-xl w-full" />
                          </div>
                           <div className="relative md:w-2/12 flex justify-center">
                              <div className="absolute h-full w-0.5 bg-gray-200 top-0 left-1/2 -translate-x-1/2 md:hidden"></div>
                              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold z-10 shadow-lg">{index + 1}</div>
                          </div>
                          <div className="md:w-5/12 text-center md:text-left mt-6 md:mt-0">
                              <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                              <p className="text-gray-600">{step.text}</p>
                          </div>
                      </motion.div>
                  ))}
            </div>
        </div>
      </section>

      {/* --- 5. The Proof Section --- */}
      <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-gray-900">Trusted by Athletes, Backed by Certifications</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                 {testimonials.map((testimonial, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                         className="bg-gray-50 rounded-lg p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm">
                        <img src={testimonial.imageUrl} alt={testimonial.name} className="w-24 h-24 rounded-full object-cover flex-shrink-0" />
                        <div>
                           <blockquote className="text-gray-600 italic">"{testimonial.quote}"</blockquote>
                           <p className="mt-4 font-bold text-gray-900">{testimonial.name}</p>
                           <p className="text-sm text-blue-500">{testimonial.title}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
             <div className="text-center">
                <p className="text-sm uppercase font-semibold text-gray-500 mb-4">PROUDLY CERTIFIED</p>
                <div className="flex justify-center items-center gap-8 flex-wrap">
                    <span className="font-semibold text-gray-500">GMP Certified</span>
                    <span className="font-semibold text-gray-500">HALAL Certified</span>
                    <span className="font-semibold text-gray-500">FDA Compliant</span>
                    <span className="font-semibold text-gray-500">Third-Party Tested</span>
                </div>
             </div>
          </div>
      </section>

      {/* --- 6. Final CTA Section --- */}
      <section className="relative bg-gray-900 rounded-xl overflow-hidden ml-4 mr-4">
         <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ctaImage})`}}
        ></div>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold text-white">Ready to Elevate Your Performance?</h2>
             <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">Explore our range of scientifically formulated supplements and find the perfect tools to help you achieve your fitness goals.</p>
             <div className="mt-8 flex justify-center gap-4">
                 <Link to="/shop" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">Shop All Products</Link>
                 <Link to="/about" className="inline-block bg-gray-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-600 transition-colors">Read Our Story</Link>
            </div>
        </div>
      </section>
    </motion.div>
    </>
  )
}

export default Feature