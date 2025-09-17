import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/Products";
import { motion } from "framer-motion";
import { BenefitIcon } from "../components/BenefitsIcon";
import { CheckIcon } from "@heroicons/react/24/solid";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id.toString() === productId);

  if (!product) {
    return <div className="text-center text-2xl mt-24">Product not found!</div>;
  }
  const formatNutrientName = (key) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            to="/shop"
            className="text-blue-600 hover:underline mb-8 inline-block"
          >
            ← Back to Shop
          </Link>

          {/* --- TOP SECTION: Image + Main Details --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side: Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-gray-100 rounded-lg p-8 shadow-sm sticky top-8"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-contain"
              />
            </motion.div>

            {/* Right Side: Main Product Info */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="text-sm font-semibold text-blue-600 mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
                {product.name}
              </h1>
              <p className="text-xl text-gray-500 italic mb-4">
                {product.tagline}
              </p>
              <p className="text-3xl font-bold text-gray-800 mb-6">
                ${product.price.toFixed(2)}
              </p>

              <div className="flex items-center space-x-6 text-sm text-gray-600 mb-6 border-t border-b border-gray-200 py-4">
                <div>
                  <strong>Flavours:</strong> {product.specs.flavours.join(", ")}
                </div>
                <div>
                  <strong>Weight:</strong> {product.specs.weight}
                </div>
                <div>
                  <strong>Servings:</strong> {product.specs.servings}
                </div>
              </div>

              {/* --- NEW: Detailed Info Section --- */}
              <div className="text-gray-700 space-y-4 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mt-4">
                  Product Details
                </h3>
                <p className="text-base leading-relaxed">
                  {product.details.description}
                </p>
                <h3 className="text-xl font-bold text-gray-800 mt-4">
                  Purity & Performance
                </h3>
                <p className="text-base leading-relaxed">
                  {product.details.purityInfo}
                </p>
              </div>

              <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                Add to Cart
              </button>
            </motion.div>
          </div>

          {/* --- BENEFITS SECTION --- */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose {product.name.split("(")[0].trim()}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-gray-50 p-6 rounded-lg text-center"
                >
                  <div className="flex justify-center mb-4">
                    <BenefitIcon icon={benefit.icon} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- UPDATED: Ideal For & Nutritional Facts Section --- */}
          <div className="mt-16 pt-12 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Ideal For...</h3>
              <ul className="space-y-3">
                {product.idealFor.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <BenefitIcon icon="certified" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Nutritional Facts</h3>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                {Object.entries(product.nutritionalFacts).map(
                  ([key, value]) => {
                    if (typeof value === "object" && value !== null) {
                      return (
                        <div key={key}>
                          <div className="bg-gray-100 p-3">
                            <strong className="text-gray-900 font-bold text-sm block">
                              {formatNutrientName(key)}
                            </strong>
                          </div>
                          <div className="pl-6">
                            {Object.entries(value).map(([subKey, subValue]) => (
                              <div
                                key={subKey}
                                className="flex justify-between text-sm py-2 px-3 border-t border-gray-100"
                              >
                                <span className="text-gray-600">
                                  {formatNutrientName(subKey)}
                                </span>
                                <strong className="text-gray-900">
                                  {subValue}
                                </strong>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          key={key}
                          className="flex justify-between text-sm p-3 bg-white"
                        >
                          <span className="text-gray-600">
                            {formatNutrientName(key)}
                          </span>
                          <strong className="text-gray-900">{value}</strong>
                        </div>
                      );
                    }
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SingleProduct;
