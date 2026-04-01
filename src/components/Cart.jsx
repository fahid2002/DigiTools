import React from "react";

export default function Cart({ cart, removeItem, clearCart }) {
  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  // New handler to process checkout and then clear the data
  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    // 1. You can add your logic here (e.g., API call)
    alert("Proceeding to checkout...");
    
    // 2. Call the function passed from App.jsx to empty the state
    clearCart();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 pb-20">
      <div className="bg-white border border-slate-100 rounded-[2rem] shadow-sm p-6 md:p-10">
        <h2 className="text-xl font-bold text-slate-900 mb-8 px-2">Your Cart</h2>

        {cart.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-400">Your cart is empty</p>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="space-y-3 mb-10">
              {cart.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-center justify-between bg-gray-50/80 hover:bg-gray-100/50 transition-all duration-300 p-4 md:p-5 rounded-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100 p-2.5">
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-slate-900 text-base leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-slate-400 text-sm font-medium mt-0.5">${item.price}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-[#ff4d8d] hover:text-[#e63b7a] font-bold text-xs uppercase tracking-wider transition-colors px-3"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Pricing Summary */}
            <div className="flex justify-between items-center mb-8 px-4">
              <span className="text-slate-400 font-semibold">Total:</span>
              <span className="text-3xl font-black text-slate-900 tracking-tight">
                ${total}
              </span>
            </div>

            {/* FIXED BUTTON: Changed onClick to handleCheckout */}
            <button
              onClick={handleCheckout}
              className="w-full py-4 bg-[#8b3dff] hover:bg-[#7a2df0] text-white rounded-full font-bold text-base shadow-xl shadow-purple-100 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Proceed To Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}