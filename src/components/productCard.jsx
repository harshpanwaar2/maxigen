import React, { useState, useRef } from 'react';

const Icon = ({ name, className = 'w-6 h-6' }) => {
  const icons = {
    heart: (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
      </svg>
    ),
    veg: (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <circle cx="12" cy="12" r="5" fill="green"/>
      </svg>
    ),
    chevronLeft: (
       <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    ),
    chevronRight: (
       <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    ),
  };
  return icons[name] || null;
};


const products = [
  {
    id: 1,
    name: 'Biozyme Performance Whey 2 kg & Creatine 100g Combo',
    image: 'https://placehold.co/400x400/F0F0F0/333?text=Product+1',
    price: 5849,
    originalPrice: 7098,
    discount: 17,
    offer: 'Free Shaker worth Rs. 699',
    isVeg: true,
  },
  {
    id: 2,
    name: 'Super Gainer XXL 2 kg Chocolate & Creatine Monohydrate',
    image: 'https://placehold.co/400x400/F0F0F0/333?text=Product+2',
    price: 2299,
    originalPrice: 4049,
    discount: 43,
    offer: 'Free Shaker worth Rs. 699',
    isVeg: true,
  },
  {
    id: 3,
    name: 'Pre Workout WrathX 0.75 lb Sour Green',
    image: 'https://placehold.co/400x400/F0F0F0/333?text=Product+3',
    price: 1399,
    originalPrice: 2099,
    discount: 33,
    offer: null,
    isVeg: true,
  },
  {
    id: 4,
    name: 'Shilajit Pro by MuscleBlaze 10 g',
    image: 'https://placehold.co/400x400/F0F0F0/333?text=Product+4',
    price: 599,
    originalPrice: 749,
    discount: 20,
    offer: null,
    isVeg: true,
  },
   {
    id: 5,
    name: 'Advanced Fat Burner Extreme 90 Capsules',
    image: 'https://placehold.co/400x400/F0F0F0/333?text=Product+5',
    price: 899,
    originalPrice: 1499,
    discount: 40,
    offer: 'Limited Time Offer',
    isVeg: true,
  },
   {
    id: 6,
    name: 'Pre Workout WrathX 0.75 lb Sour Green',
    image: 'https://placehold.co/400x400/F0F0F0/333?text=Product+3',
    price: 1399,
    originalPrice: 2099,
    discount: 33,
    offer: null,
    isVeg: true,
  },
];



const ProductCard = ({ product }) => (
  <div className="flex-shrink-0 w-64 m-2 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="relative p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-contain rounded-t-lg" />
      <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors">
        <Icon name="heart" />
      </button>
       {product.isVeg && (
        <div className="absolute top-2 left-2 text-green-600">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1v-1h16v1c0 .55-.45 1-1 1zm-1-4H5v-1h14v1zm-1-4H5V8h12v2zM12 12.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
        </div>
      )}
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-sm font-semibold text-gray-800 h-12 mb-2">{product.name}</h3>
      <div className="flex items-baseline space-x-2 mt-auto">
        <p className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString('en-IN')}</p>
        <p className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</p>
        <p className="text-sm font-semibold text-green-600">{product.discount}% off</p>
      </div>
       {product.offer && <p className="text-xs text-blue-600 font-medium mt-1">{product.offer}</p>}
      <div className="mt-4 space-y-2">
        <button className="w-full py-2 text-center text-blue-600 font-bold border-2 border-blue-600 rounded-md hover:bg-blue-50 transition-colors">
          ADD TO CART
        </button>
        <button className="w-full py-2 text-center text-white font-bold bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
          BUY NOW
        </button>
      </div>
    </div>
  </div>
);



export default function PopularProducts() {
  const [activeTab, setActiveTab] = useState('Best Seller');
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
        const scrollAmount = direction === 'left' ? -300 : 300;
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-yellow-50/50 font-sans py-12">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Popular</h2>
        <div className="flex items-center border-b border-gray-200 pb-2 mb-6">
          <button
            onClick={() => setActiveTab('Best Seller')}
            className={`px-4 py-2 text-sm font-semibold transition-colors duration-300 ${activeTab === 'Best Seller' ? 'bg-gray-900 text-white rounded-t-md' : 'text-gray-500'}`}>
            Best Seller
          </button>
          <button
            onClick={() => setActiveTab('Categories')}
            className={`px-4 py-2 text-sm font-semibold transition-colors duration-300 border border-gray-300 rounded-md ml-2 ${activeTab === 'Categories' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'}`}>
            Categories
          </button>
        </div>

        <div className="relative">
             <button onClick={() => scroll('left')} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-colors hidden md:block">
                <Icon name="chevronLeft" className="w-6 h-6 text-gray-800" />
            </button>
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto pb-4 -mx-2 px-2 scrollbar-hide"
            >
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
             <button onClick={() => scroll('right')} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-colors hidden md:block">
                <Icon name="chevronRight" className="w-6 h-6 text-gray-800" />
            </button>
        </div>
      </div>
    </div>
  );
}

