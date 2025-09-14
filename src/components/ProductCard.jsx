import React from 'react'

const ProductCard = ({product}) => {
  return (
    <>
     <div className="border border-gray-200  rounded-lg p-4 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
      <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
      
      <div className="flex-grow">
        <p className="text-xs text-gray-500 mb-1">{product.category}</p>
        <h3 className="font-bold text-md mb-2">{product.name}</h3>
      </div>

      <p className="text-lg font-semibold text-gray-800 my-2">${product.price.toFixed(2)}</p>
      
      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-400 transition-colors">
        View Details
      </button>
    </div>
  

    </>
  )
}

export default ProductCard