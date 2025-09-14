import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import FilterSidebar from "../components/FilterSidebar";
import ProductGrid from "../components/ProductGrid";

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
      <div className="container mx-auto p-4 lg:p-8">
        {/* HEADER SECTION */}
        <div className="text-center bg-gray-100 p-10 rounded-lg mb-8">
          <h1 className="text-8xl font-extrabold tracking-tight">SHOP</h1>
          <Breadcrumbs aria-label="breadcrumb" className="flex justify-center">
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Home Page
            </Link>
            <Typography sx={{ color: "text.primary" }}>Shop</Typography>
          </Breadcrumbs>
        </div>
        {/* PARAGRAPH SECTION */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8 pt-18">
          All your supplement needs to combat your athletic endeavours + support
          big muscle growth to fat loss, focus & recovery from soreness,
          fatigue, stress and vitality management.
        </p>
        <div className="flex justify-center flex-wrap gap-3 mb-8">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="border px-4 py-2 rounded-full text-sm font-medium hover:bg-green-300 transition-colors"
            >
              {button}
            </button>


))}
        </div>
        {/* Main Content: Sidebar + Grid */}
        <div className="flex flex-col md:flex-row gap-8">
            <FilterSidebar />
            <ProductGrid />

        </div>
      </div>
    </>
  );
};
