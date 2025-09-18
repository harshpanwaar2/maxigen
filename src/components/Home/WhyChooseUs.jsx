import React from "react";

// Data for the features, making it easy to manage
const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
    title: "Unrivaled Quality & Purity",
    description:
      "We source only the finest international ingredients and manufacture them in a GMP-certified facility. Every product is crafted to be free from banned substances, fillers, and impurities.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    title: "Scientifically Formulated for Results",
    description:
      "Our formulas aren't just based on trends; they're backed by science. Each product is developed to deliver tangible results, helping you perform better and recover faster.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.05 4.275a7.5 7.5 0 100 15.45m4.386-11.925a7.5 7.5 0 010 11.925m-8.772-1.063a7.5 7.5 0 010-9.8"
        />
      </svg>
    ),
    title: "Certified & Transparent",
    description:
      "Your trust is our priority. With certifications like HALAL and third-party lab testing on every batch, we operate with complete transparency so you know exactly what you're getting.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
    title: "Dedicated to Your Success",
    description:
      "We're more than just a supplement company; we're your partner in health. Our team is committed to supporting your journey with exceptional customer service and reliable products.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-900 sm:py-20 lg:py-24 -mx-6 px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
            We believe that true strength comes from within. Our mission is to
            provide you with the purest, most effective supplements, backed by
            science and an unwavering commitment to quality.
          </p>
        </div>

        {/* This is the grid container. `gap-8` provides the spacing between cards. */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            // This is the individual card. Styling is applied here.
            <div
              key={feature.title}
              className="bg-gray-50 p-8 text-center rounded-lg shadow-md"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-500 mx-auto">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
