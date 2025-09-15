import React from "react";

const FilterSidebar = () => {
  const categories = [
    "Digestion",
    "Health Support",
    "Performance",
    "Protein",
    "Sports Nutrition",
    "Vegan",
  ];
  const brands = [
    "Energy Sport",
    "Now Sports",
    "Optimum",
    "Power Fitness Club",
    "Transcend Coole",
  ];

  return (
    <>
      <aside className="w-full md:w-1/4 h-fit p-4  border border-gray-200 rounded-lg shadow-sm">
        {/* Product Categories Section  */}
        <div className="mb-6">
          <h3 className="font-bold border-b border-gray-200 pb-2 mb-3">PRODUCT CATEGORIES</h3>
          <ul className="space-y-2">
            {categories.map((category) => {
              return(
                <li key={category} className="cursor-pointer hover:font-semibold">
                    <input type="checkbox" id={"category"} className="mr-2" />
                <label className="cursor-pointer">{category} </label>
              </li>
              )
            })}
          </ul>
        </div>
        {/* BRAND SECTION */}
        <div className="mb-6">
          <h3 className="font-bold border-b border-gray-200  pb-2 mb-3">BRANDS</h3>
          <ul className="space-y-2">
            {brands.map((brand) => {
              return(
                <li key={brand} className="flex items-center hover:font-semibold">
                <input type="checkbox" id={"brand"} className="mr-2" />
                <label className="cursor-pointer">{brand} </label>
              </li>
              )
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;