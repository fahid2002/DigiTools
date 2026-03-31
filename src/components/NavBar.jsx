import React from "react";

export default function Navbar({ cartCount, setView }) {
  return (
    <div className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      {/* 🧭 Centered Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 🔷 LOGO */}
          <div 
            onClick={() => setView("products")} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            {/* <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-purple-200 group-hover:scale-105 transition-transform">
              D
            </div> */}
            <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              DigiTools
            </span>
          </div>

          {/* 🔷 CENTER MENU (Desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map((item) => (
              <button
                key={item}
                onClick={() => item === "Products" && setView("products")}
                className="text-gray-600 hover:text-purple-600 font-semibold text-sm transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* 🔷 RIGHT SIDE */}
          <div className="flex items-center gap-3 md:gap-6">
            
            {/* 🛒 CART BUTTON */}
            <button
              onClick={() => setView("cart")}
              className="btn btn-ghost btn-circle group relative"
            >
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:text-purple-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="badge badge-sm indicator-item bg-purple-600 border-none text-white font-bold p-2">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>

            {/* 🔑 LOGIN (Hidden on Mobile) */}
            <button className="hidden md:block text-gray-700 font-bold hover:text-purple-600 transition-colors px-4">
              Login
            </button>

            {/* 🚀 GET STARTED */}
            <button className="btn bg-purple-600 hover:bg-purple-700 text-white border-none rounded-full px-6 shadow-lg shadow-purple-100 hidden sm:flex">
  Get Started
</button>
          </div>
        </div>
      </div>
    </div>
  );
}