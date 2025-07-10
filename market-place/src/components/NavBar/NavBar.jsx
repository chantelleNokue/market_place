import React, { useState, useEffect } from "react";
import { Heart, ShoppingBag, Search, Menu, X, ChevronDown } from "lucide-react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl' 
        : 'bg-white/90 backdrop-blur-sm shadow-lg'
    }`}>
      <nav className="max-w-[1400px] mx-auto md:h-[14vh] h-[12vh] px-10 flex justify-between items-center">
        {/* Logo with solid blue styling */}
        <a 
          href="#" 
          className="text-3xl font-bold text-blue-600 hover:scale-105 transition-all duration-300 hover:drop-shadow-lg"
        >
          Market<span className="text-4xl text-blue-700">H</span>ub
        </a>

        {/* Desktop Menu */}
        <ul className="md:flex items-center gap-x-8 hidden">
          <li>
            <a 
              href="#" 
              className="relative font-semibold tracking-wide text-blue-600 group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          
          {/* Categories Dropdown */}
          <li className="relative group">
            <button className="flex items-center gap-1 font-semibold tracking-wide text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 group">
              Categories
              <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-blue-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-blue-600 mb-3">Fashion</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">Women Clothing</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">Men Clothing</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">Kids</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">Shoes</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">Bags & Luggage</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-600 mb-3">Lifestyle</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">Beauty & Health</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">Home & Kitchen</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">Sports & Outdoors</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">Electronics</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">Jewelry & Accessories</a></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200">View All Categories</a>
                    <a href="#" className="text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors duration-200">Special Offers</a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <a
              href="#"
              className="relative font-semibold tracking-wide text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 group"
            >
              New In
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          
          <li>
            <a
              href="#"
              className="relative font-semibold tracking-wide text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 group"
            >
              Sale
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          
          <li>
            <a
              href="#"
              className="relative font-semibold tracking-wide text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 group"
            >
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        </ul>

        {/* Nav Action */}
        <div className="flex items-center gap-x-5">
          {/* Search Input with solid blue styling */}
          <div className="md:flex p-1 bg-blue-50 border-2 border-blue-300 rounded-full hidden hover:border-blue-500 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search products..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-4 bg-transparent focus:outline-none text-gray-700 placeholder-gray-500"
            />
            <button className="bg-blue-600 text-white w-10 h-10 flex justify-center items-center rounded-full hover:bg-blue-700 hover:scale-110 hover:shadow-lg transition-all duration-300 hover:rotate-12">
              <Search size={18} />
            </button>
          </div>

          {/* Heart Icon */}
          <a 
            href="#" 
            className="relative text-gray-700 text-2xl hover:text-pink-600 transition-all duration-300 hover:scale-125 group"
          >
            <Heart className="w-6 h-6 group-hover:fill-pink-600 transition-all duration-300" />
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300">
              2
            </span>
            <div className="absolute inset-0 bg-pink-100 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 -z-10"></div>
          </a>

          {/* Shopping Bag Icon */}
          <a 
            href="#" 
            className="relative text-gray-700 text-2xl hover:text-blue-600 transition-all duration-300 hover:scale-125 group"
          >
            <ShoppingBag className="w-6 h-6 transition-all duration-300" />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300">
              3
            </span>
            <div className="absolute inset-0 bg-blue-100 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 -z-10"></div>
          </a>

          {/* Hamburger menu */}
          <button 
            className="text-gray-700 text-3xl md:hidden hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-180" 
            onClick={toggleMenu}
          >
            {showMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul className={`flex flex-col gap-y-12 bg-blue-50/95 backdrop-blur-xl rounded-2xl p-10 items-center gap-x-15 md:hidden absolute top-20 left-1/2 transform -translate-x-1/2 transition-all duration-500 z-40 border border-blue-200/50 shadow-2xl ${
          showMenu 
            ? "translate-y-0 opacity-100 scale-100" 
            : "translate-y-4 opacity-0 scale-95 pointer-events-none"
        }`}>
          <li className="transform transition-all duration-300 delay-100">
            <a 
              href="#" 
              className="font-semibold tracking-wide text-blue-600 hover:scale-105 transition-all duration-300"
            >
              Home
            </a>
          </li>
          <li className="transform transition-all duration-300 delay-200">
            <a
              href="#"
              className="font-semibold tracking-wide text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:translate-x-2"
            >
              About Us
            </a>
          </li>
          <li className="transform transition-all duration-300 delay-300">
            <a
              href="#"
              className="font-semibold tracking-wide text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:translate-x-2"
            >
              Process
            </a>
          </li>
          <li className="transform transition-all duration-300 delay-400">
            <a
              href="#"
              className="font-semibold tracking-wide text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:translate-x-2"
            >
              Contact Us
            </a>
          </li>
          <li className="flex p-1 bg-blue-50 border-2 border-blue-300 rounded-full md:hidden hover:border-blue-500 hover:shadow-lg transition-all duration-300 transform delay-500">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search products..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-4 bg-transparent focus:outline-none text-gray-700 placeholder-gray-500"
            />
            <button className="bg-blue-600 text-white w-10 h-10 flex justify-center items-center rounded-full hover:bg-blue-700 hover:scale-110 hover:shadow-lg transition-all duration-300 hover:rotate-12">
              <Search size={18} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;