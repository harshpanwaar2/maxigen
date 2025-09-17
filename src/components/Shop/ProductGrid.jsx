import React from "react";
import ProductCard from "./ProductCard";
// import ultimaImg from "../../assets/Product/ultima.jpg";
// import testaImg from "../../assets/Product/testa.jpg";
// import ripogenImg from "../../assets/Product/ripogen.jpg";
// import omegaImg from "../../assets/Product/omega.jpg";
// import nitrogenImg from "../../assets/Product/nitrogen.jpg";
// import nitrixImg from "../../assets/Product/nitrix.jpg";
// import isogenImg from "../../assets/Product/isogen.jpg"; // Corrected filename from isogen27 to isogen
// import creMonoImg from "../../assets/Product/cre-mono.jpg"; // Corrected filename from cremono to cre-mono
// import creMonoBlendImg from "../../assets/Product/cre-mono-blend.jpg";




const   ProductGrid = ({products}) => {
  return (
    <>
      <div className="w-full md:w-3/4">
        {/* TOOLBAR SECTION */}
        <div className="flex justify-between items-center mb-4 border border-gray-200  p-3 rounded-lg">
          {/* <p className="text-sm text-gray-600">Showing</p> */}
          <select className="border border-gray-200  rounded-md p-2">
            <option >Default sorting</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
          </select>
        </div>
        {/* PRODUCT-GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          { (products ?? []).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </>
  );
};

export default ProductGrid;