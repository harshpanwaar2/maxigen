import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { products } from "../data/Products";
import Link from "@mui/material/Link";
// import Link from 'react-router-dom'
import FilterSidebar from "../components/Shop/filterslidebar";
import ProductGrid from "../components/Shop/ProductGrid";
import { motion } from "framer-motion";


export const Shop = () => {
  const buttons = [
    "New Arrivals",
    "Best Sellers",
    "Health & Vitamins",
    "Pre-Workout",
    "Clearance",
  ];

  return (
    <>
<div className=" bg-gray-200 h-100 flex items-center justify-center flex-col text-center rounded-xl mr-4 ml-4">
  <div className="container mx-auto">
    <h1 className="text-7xl font-extrabold tracking-tight">SHOP</h1>
    <Breadcrumbs aria-label="breadcrumb" className="flex justify-center">
      <Link
        underline="hover"
        color="inherit"
        href="/"
      >
        Home Page
      </Link>
      <Typography sx={{ color: "text.primary" }}>Shop</Typography>
    </Breadcrumbs>
  </div>
</div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto p-4 lg:p-8"
      >
       



        <p className="text-center text-gray-800 text-lg font-mono  max-w-3xl mx-auto mb-8 pt-15 [text-shadow:2px_2px_6px_gray]">
          All your supplement needs to combat your athletic endeavours + support
          big muscle growth to fat loss, focus & recovery from soreness,
          fatigue, stress and vitality management.
        </p> 
        <div className="flex justify-center flex-wrap gap-3 mb-8 font-medium text-black pt-5 pb-5">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="border px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-400 hover:text-white transition-colors"
            >
              {button}
            </button>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <FilterSidebar />
          <ProductGrid products={products}  />
        </div>
      </motion.div>
    </>
  );
};

export default Shop;
