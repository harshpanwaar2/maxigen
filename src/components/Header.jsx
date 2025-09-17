import React, { useState } from 'react';

import { FaFacebookF, FaTwitter, FaInstagram, FaRegUser, FaChevronDown } from 'react-icons/fa';
import { IoSearchOutline, IoMenu, IoClose } from 'react-icons/io5';
import { HiOutlineShoppingBag } from "react-icons/hi";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full font-sans pb-3 bg-white">

            <div className="bg-[#007aff] text-black text-xs sm:text-sm py-4 px-4 md:px-8  pb-10">
                <div className="container mx-auto flex justify-between items-center">

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><FaFacebookF /></a>
                            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><FaTwitter /></a>
                            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><FaInstagram /></a>
                        </div>
                        <span className="hidden md:inline-block border-l border-gray-600/50 h-4"></span>
                        <a href="mailto:Support@maxigen-nutrition.com" className="hidden md:inline-block hover:text-white transition-colors">
                            Support@maxigen-nutrition.com
                        </a>
                    </div>


                    <a href="#" className="font-semibold hover:text-white transition-colors">
                        Ask Your Question
                    </a>
                </div>
            </div>


            <div className="bg-white text-black py-4 px-4 md:px-8   rounded-t-[30px] -mt-6 ">
                <div className="container mx-auto flex justify-between items-center">
                    <a
                        href="/"
                        className="flex items-center text-3xl font-extrabold tracking-wider text-blue-900 uppercase"
                    >
                        <img
                            src="src/assets/logo1.png"
                            alt="Logo"
                            className="h-12 w-auto object-contain align-middle"
                        />

                    </a>


                    <nav className="hidden lg:flex items-center gap-8">
                        <a href="/" className="font-semibold hover:text-blue-600 transition-colors">Home</a>
                        <a href="/shop" className="font-semibold hover:text-blue-600 transition-colors">Shop</a>
                        
                        <a href="/about" className="font-semibold hover:text-blue-600 transition-colors">About</a>
                        <a href="/features" className="flex items-center gap-1 font-semibold hover:text-blue-600 transition-colors">Features   </a>
                        <a href="/Contact" className="font-semibold hover:text-blue-600 transition-colors">Contact</a>
                    </nav>


                    <div className="hidden lg:flex items-center gap-5">

                        <button aria-label="User Account" className="hover:text-blue-600 transition-colors"><FaRegUser size={20} /></button>

                        <button className="bg-blue-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-500 transition-colors uppercase">
                            Order
                        </button>
                    </div>


                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                            {isMenuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
                        </button>
                    </div>
                </div>
            </div>


            {isMenuOpen && (
                <div className="lg:hidden bg-white text-black absolute w-full z-990 shadow-lg border-t border-gray-200">
                    <nav className="flex flex-col items-center gap-4 py-6">
                        <a href="/" className="font-semibold hover:text-blue-600 transition-colors py-2">Home</a>
                        <a href="/shop" className="font-semibold hover:text-blue-600 transition-colors py-2">Shop</a>

                        <a href="/about" className="font-semibold hover:text-blue-600 transition-colors py-2">About</a>
                        <a href="/Features" className="font-semibold hover:text-blue-600 transition-colors py-2">Features</a>
                        <a href="/contact" className="font-semibold hover:text-blue-600 transition-colors py-2">Contact</a>

                        <div className="border-t w-3/4 my-4"></div>

                        <div className="flex items-center gap-8">
                            <button aria-label="User Account" className="hover:text-blue-600 transition-colors"><FaRegUser size={22} /></button>
                            <button aria-label="Shopping Cart" className="relative hover:text-blue-600 transition-colors">
                                <HiOutlineShoppingBag size={26} />
                                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                            </button>
                        </div>
                        <button className="bg-black text-white font-bold py-3 px-8 rounded mt-4 hover:bg-gray-800 transition-colors uppercase">
                            Order
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;