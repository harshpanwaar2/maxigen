import React from "react";
import ProductCard from "./ProductCard";
import wargenImg from "../../assets/Product/wargen.jpg";
import ultimaImg from "../../assets/Product/ultima.jpg";
import testaImg from "../../assets/Product/testa.jpg";
import ripogenImg from "../../assets/Product/ripogen.jpg";
import omegaImg from "../../assets/Product/omega.jpg";
import nitrogenImg from "../../assets/Product/nitrogen.jpg";
import nitrixImg from "../../assets/Product/nitrix.jpg";
import isogenImg from "../../assets/Product/isogen.jpg"; // Corrected filename from isogen27 to isogen
import creMonoImg from "../../assets/Product/cre-mono.jpg"; // Corrected filename from cremono to cre-mono
import creMonoBlendImg from "../../assets/Product/cre-mono-blend.jpg";


const products = [
  {
    id: 1,
    name: "Wargen",
    category: "Performance",
    price: 23.11,
    image: wargenImg,
  },
  {
    id: 2,
    name: "Ultima",
    category: "Performance",
    price: 23.11,
    image: ultimaImg,
  },
  {
    id: 3,
    name: "Testa",
    category: "Performance",
    price: 23.11,
    image: testaImg,
  },
  {
    id: 4,
    name: "Ripogen",
    category: "Performance",
    price: 23.11,
    image: ripogenImg,
  },
  {
    id: 5,
    name: "Omega",
    category: "Performance",
    price: 23.11,
    image: omegaImg,
  },
  {
    id: 6,
    name: "Nitrogen",
    category: "Performance",
    price: 23.11,
    image: nitrogenImg,
  },
  {
    id: 7,
    name: "Nitrix",
    category: "Performance",
    price: 23.11,
    image: nitrixImg,
  },
  {
    id: 8,
    name: "Isogen",
    category: "Performance",
    price: 23.11,
    image: isogenImg,
  },
  {
    id: 9,
    name: "Cre Mono",
    category: "Performance",
    price: 23.11,
    image: creMonoImg,
  },
  {
    id: 10,
    name: "Cre Mono Blend",
    category: "Performance",
    price: 23.11,
    image: creMonoBlendImg,
  },
];

const   ProductGrid = () => {
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
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </>
  );
};

export default ProductGrid;