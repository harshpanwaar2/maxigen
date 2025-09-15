import React from 'react';
import { FaFlask, FaLeaf, FaShieldAlt } from 'react-icons/fa'; // Icons from the library

const features = [
  {
    icon: <FaFlask size={40} className="text-blue-500" />,
    title: 'Science-Backed Formulas',
    description: 'Every Maxigen product is the result of extensive research by our team of nutrition scientists. We use clinically-dosed ingredients to ensure maximum efficacy.'
  },
  {
    icon: <FaLeaf size={40} className="text-blue-500" />,
    title: 'Premium Ingredients',
    description: 'We source only the highest-quality raw materials from trusted suppliers globally. No fillers, no compromises—just pure, potent ingredients.'
  },
  {
    icon: <FaShieldAlt size={40} className="text-blue-500" />,
    title: 'Third-Party Tested',
    description: 'Your trust is our priority. Every batch is rigorously tested by independent third-party labs for purity, potency, and safety.'
  }
];

const OurDifference = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What Makes Us Different</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-black rounded-lg">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDifference;