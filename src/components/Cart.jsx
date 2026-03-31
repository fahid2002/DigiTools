// src/components/Cart.jsx
import React from "react";

export default function Cart({ cart, removeItem, clearCart }) {

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-6">
        🛒 Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">
          Your cart is empty
        </p>
      ) : (
        <>
          {/* Items */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border p-4 rounded">

                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-500">
                      ${item.price}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>

              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-6 flex justify-between items-center">
            <h3 className="text-xl font-bold">
              Total: ${total}
            </h3>

            <button
              onClick={clearCart}
              className="bg-purple-600 text-white px-5 py-2 rounded"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </section>
  );
}