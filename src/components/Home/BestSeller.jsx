import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './BestSeller.css'; // Corrected to singular to match your file
import wargenImg from '../../assets/Product/wargen.jpg'
import isogenImg from '../../assets/Product/isogen.jpg'
import nitrogenImg from '../../assets/Product/nitrogen.jpg'
import infernoImg from '../../assets/Product/inferno.jpg'
import omegaImg from '../../assets/Product/omega.jpg'
import gluImg from '../../assets/Product/glu.jpg'
import { Link } from 'react-router-dom';

const bestSellersData = [
    { id: 1, category: '100% Whey Protein', name: 'Wargen', rating: 4.5, reviews: 120, price: '4,999', imageUrl: wargenImg },
    { id: 2, category: 'Isolate Protein', name: 'Isogen-27', rating: 4.8, reviews: 98, price: '5,499', imageUrl: isogenImg },
    { id: 3, category: 'Mega Mass Gainer', name: 'NitroGen', rating: 4.6, reviews: 85, price: '3,999', imageUrl: nitrogenImg},
    { id: 4, category: 'Fat Burner', name: 'Inferno', rating: 4.7, reviews: 150, price: '2,499', imageUrl: infernoImg },
    { id: 5, category: 'Fish Oil Pro', name: 'Omega-3', rating: 4.4, reviews: 75, price: '5,199', imageUrl: omegaImg },
    { id: 6, category: ' Pre/Post Workout', name: 'Glutamine (5000 mg)', rating: 4.9, reviews: 210, price: '2,999', imageUrl: gluImg },
];

const BestSellers = () => {
    
    const scrollContainerRef = useRef(null);

    // The scroll function logic
    const scroll = (direction) => {
        const scrollAmount = 300; // The distance to scroll in pixels
        const container = scrollContainerRef.current;

        if (container) {
            // Calculate the new scroll position
            const newScrollLeft = direction === 'left' 
                ? container.scrollLeft - scrollAmount 
                : container.scrollLeft + scrollAmount;
            
            // Apply the scroll with a smooth animation
            container.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="py-16 bestsellers-section-theme"> <div className="text-center">
                <h2 className="text-4xl lg:text-5xl font-bold mb-2 bestsellers-title-theme">
                    Our Best Sellers
                </h2>
                <div className="w-24 h-1.5  mt-4 mb-6 bg-accent rounded-full"></div>
                <p className="text-lg lg:text-xl mb-12 bestsellers-subtitle-theme">
                    Trusted by athletes, loved by all.
                </p>
            </div>
            <div className="relative w-full px-16  mx-auto">
                <button onClick={() => scroll('left')} className="absolute left-0 top-1/2  text-white bg-gray-800 -translate-y-1/2 z-20 rounded-full  hidden lg:flex items-center justify-center w-11 h-11">
                    <FaChevronLeft className="text-xl" />
                </button>
                <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full bg-gray-800 text-white hidden lg:flex items-center justify-center w-11 h-11">
                    <FaChevronRight className="text-xl" />
                </button>

                <div 
                    ref={scrollContainerRef} 
                    className="flex overflow-x-auto space-x-4 sm:space-x-8 pb-4 scroll-container px-4 sm:px-0 hide-scrollbar [&::-webkit-scrollbar]:hidden"
                >
                    {bestSellersData.map((product) => (
                        <div key={product.id} className="flex-shrink-0 w-4/5 sm:w-72 rounded-lg p-4 product-card-theme">
                            <div className="bg-gray-100 rounded-md p-4 mb-4">
                                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-contain" />
                            </div>
                            <span className="text-xs font-semibold product-category-theme">{product.category}</span>
                            <h3 className="text-xl font-bold mt-1 product-name-theme">{product.name}</h3>
                            <div className="flex items-center mt-2">
                                <span className="text-yellow-500">{'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}</span>
                                <span className="text-sm ml-2 product-reviews-theme">({product.reviews} reviews)</span>
                            </div>
                            <p className="text-2xl font-extrabold mt-4 product-price-theme">₹{product.price}</p>
                           <Link to="/shop"> <button className="w-full mt-4 py-3 rounded-lg font-bold add-to-cart-btn-theme">
                                Add to Cart
                            </button></Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestSellers;