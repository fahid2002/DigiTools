import React, { useState } from "react"; // Explicitly import React
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

export default function App() { // Moved export default here
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
      
      <Banner />
      <Stats />

      {/* Toggle Section */}
      <section className="py-16 bg-gray-50/50">
        <div className="text-center mb-10">
          <div className="inline-flex p-1 bg-gray-200 rounded-xl">
            <button 
              onClick={() => setView("products")} 
              className={`px-8 py-2 rounded-lg font-semibold transition ${view === 'products' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-600 hover:text-purple-600'}`}
            >
              Products
            </button>
            <button 
              onClick={() => setView("cart")} 
              className={`px-8 py-2 rounded-lg font-semibold transition ${view === 'cart' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-600 hover:text-purple-600'}`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        <div className="container mx-auto">
          {view === "products" ? (
            <Products addToCart={addToCart} />
          ) : (
            <Cart cart={cart} removeItem={removeItem} clearCart={clearCart} />
          )}
        </div>
      </section>

      <Steps />
      <Pricing />
      
      {/* Newsletter Call to Action */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready To Transform Your Workflow?</h2>
          <p className="mb-8 opacity-90">Join 50,000+ creators using DigiTools daily.</p>
          <div className="flex justify-center gap-4">
              <button className="btn bg-white text-purple-600 border-none hover:bg-gray-100 px-8">Explore Products</button>
              <button className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-600 px-8">Pricing</button>
          </div>
      </div>

      <Footer />

      <ToastContainer position="bottom-right" />
    </div>
  );
}