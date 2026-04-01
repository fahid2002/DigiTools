import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  const addToCart = (item) => {
    const isExist = cart.find((p) => p.id === item.id);
    if (isExist) {
      toast.warn("Item already in cart!");
      return;
    }
    setCart([...cart, item]);
    toast.success(`${item.name} added to cart!`);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error("Item removed");
  };

  const clearCart = () => {
    setCart([]);
    toast.info("Checkout successful!");
  };

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <Navbar cartCount={cart.length} setView={setView} />
      
      {/* 1. Main View (Products & Sections) */}
      {view === "products" ? (
        <main>
          <section id="home">
            <Banner />
          </section>

          <Stats />

          {/* Toggle Section & Products Grid */}
          <section id="products" className="py-16 bg-gray-50/50 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-2 text-slate-900 tracking-tight">
                  Premium Digital Tools
                </h2>
                <p className="text-slate-500 text-base leading-tight">
                  Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.
                </p>
              </div>

              <div className="text-center mb-12">
                <div className="inline-flex p-1 bg-slate-100 rounded-full border border-slate-200">
                  <button 
                    onClick={() => setView("products")} 
                    className="px-8 py-2 rounded-full font-semibold transition-all duration-300 bg-purple-600 text-white shadow-lg shadow-purple-200"
                  >
                    Products
                  </button>
                  <button 
                    onClick={() => setView("cart")} 
                    className="px-8 py-2 rounded-full font-semibold transition-all duration-300 text-gray-600 hover:text-purple-600"
                  >
                    Cart ({cart.length})
                  </button>
                </div>
              </div>

              <Products addToCart={addToCart} />
            </div>
          </section>

          <section id="features" className="scroll-mt-20">
            <Steps />
          </section>

          <section id="pricing" className="scroll-mt-20">
            <Pricing />
          </section>

          {/* FAQ Placeholder */}
          <section id="faq" className="py-20 bg-white scroll-mt-20">
            <div className="max-w-3xl mx-auto px-6 text-center">
               <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
               <p className="text-slate-500">Have questions? We're here to help.</p>
            </div>
          </section>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20 text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Ready To Transform Your Workflow?</h2>
              <p className="mb-8 opacity-90">Join thousands of professionals who are already using Digitools to work smarter.<br />Start your free trial today.</p>
              <div className="flex justify-center gap-4">
                  <button onClick={() => {setView("products"); setTimeout(() => {document.getElementById('products').scrollIntoView({ behavior: 'smooth' }); }, 100);}} className="btn bg-white text-purple-600 border-none hover:bg-gray-100 px-8 rounded-full">Explore Products</button>
                  <button onClick={() => document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})} className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-600 px-8 rounded-full">View Pricing</button>
              </div>
              <p className="mt-8 opacity-90">14-day free trial • No credit card required • Cancel anytime</p>
          </div>
        </main>
      ) : (
        /* 2. Cart View */
        <div className="pt-10">
          <Cart cart={cart} removeItem={removeItem} clearCart={clearCart} />
          {/* Button to go back if cart is empty */}
          <div className="text-center pb-20">
            <button onClick={() => setView("products")} className="text-purple-600 font-bold hover:underline">
              ← Back to Shopping
            </button>
          </div>
        </div>
      )}

      <Footer />
      <ToastContainer position="bottom-right" />
    </div>
  );
}