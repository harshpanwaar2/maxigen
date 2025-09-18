import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <div
        className="group relative border border-gray-200 rounded-lg p-4 flex flex-col text-left shadow-sm  hover:shadow-2xl hover:shadow-blue-600/50 
        hover:-translate-y-2 hover:scale-105 
        transition-all duration-300 ease-out"
      >
        <h3 className="font-bold text-md mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ">
          {product.name}
        </h3>

        <div className="relative w-full flex-grow">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-contain mb-4"
          />
        </div>

        <div className="mt-auto">
          <div className="flex justify-between items-center mb-3">
            <p className="text-xs text-gray-500">{product.category}</p>

            <p className="text-lg font-semibold text-gray-900">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <Link
            to={`/product/${product.id}`}
            className="block w-full bg-blue-600 text-white py-2 rounded-md text-center hover:bg-orange-500 transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
