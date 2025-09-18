import React from "react";
import { useState } from "react";

const categories = [
  {
    name: "Protein",
    subcategories: [
      "Whey Protein",
      "Isolate Protein",
      "Advanced Whey",
      "Ripped Whey",
    ],
  },
  {
    name: "Gainer",
    subcategories: ["Mega Mass Gainer"],
  },
  {
    name: "Tablets & Capsules",
    subcategories: [
      "Fat Burner",
      "Multivitamins",
      "Omega 3",
      "Fish Oil",
      "Nitrix Oxide",
      "Testosterone Booster",
      "ZMA",
    ],
  },
  {
    name: "Pre/Post Workout",
    subcategories: [
      "EAA BCAA",
      "Pre Workout",
      "Creatine",
      "Glutamine",
      "L-Carnitine",
    ],
  },
];
const brands = [
  "Energy Sport",
  "Now Sports",
  "Optimum",
  "Power Fitness Club",
  "Transcend Coole",
];

const FilterSidebar = () => {
  const [isOpen, setIsOpen] = useState({});

  const toggleCategory = (categoryName) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [categoryName]: !prevState[categoryName],
    }));
  };

  return (
    <>
      <aside className="w-full md:w-1/4 h-fit p-6  border border-gray-200 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-3">
          <h2 className="text-xl font-bold">Filters</h2>
          <button className="text-sm text-blue-600 hover:underline">
            Clear All
          </button>
        </div>
        {/* Product Categories Section */}
        <div className="mb-8">
          <h3 className="font-extrabold font-mono hover:[text-shadow:2px_2px_6px_rgba(0,0,0,0.3)]  mb-4">PRODUCT CATEGORIES</h3>
          <ul className="space-y-2 font-serif">
            {categories.map((category) => (
              <li key={category.name}>
                <div
                  className="flex justify-between items-center cursor-pointer hover:font-semibold"
                  onClick={() => toggleCategory(category.name)}
                >
                  <label className="cursor-pointer">{category.name}</label>
                  {/* Chevron Icon for expanding/collapsing */}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isOpen[category.name] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
                {/* Collapsible Sub-category List */}
                {isOpen[category.name] && (
                  <ul className="pl-4 mt-2 space-y-2 border-l border-gray-200">
                    {category.subcategories.map((sub) => (
                      <li key={sub} className="flex items-center">
                        <input
                          type="checkbox"
                          id={sub}
                          className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label
                          htmlFor={sub}
                          className="cursor-pointer text-gray-600 hover:text-black"
                        >
                          {sub}
                        </label>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range Section */}
        <div className="mb-8">
          <h3 className="font-extrabold font-mono  border-t border-gray-200 pt-6 mb-4">
            FILTER BY PRICE
          </h3>
          {/* For a real price slider, consider a library like 'rc-slider' or use two input fields */}
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="Min"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            />
            <span>-</span>
            <input
              type="number"
              placeholder="Max"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
        </div>

        {/* Brands Section */}
        <div className="mb-8">
          <h3 className="font-extrabold font-mono  border-t border-gray-200 pt-6 mb-4">
            BRANDS
          </h3>
          <ul className="space-y-2 font-serif hover:[text-shadow:2px_2px_6px_rgba(0,0,0,0.3)]">
            {brands.map((brand) => (
              <li key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  id={brand}
                  className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor={brand}
                  className="cursor-pointer text-gray-600 hover:text-black"
                >
                  {brand}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Apply Button */}
        <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Apply Filters
        </button>
      </aside>
    </>
  );
};

export default FilterSidebar;
