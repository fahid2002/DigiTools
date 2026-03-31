// src/components/Products.jsx
import React from "react";
import productsData from "../data/products.json";

export default function Products({ addToCart }) {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Premium Digital Tools</h2>
        <p className="text-gray-500">Choose from our curated collection of professional utilities.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {productsData.map((item) => (
          <div key={item.id} className="card bg-base-100 border border-gray-100 shadow-sm hover:shadow-xl transition-all p-6 relative">
            {item.tag && (
              <div className={`badge badge-${item.tagType} absolute top-4 right-4`}>
                {item.tag}
              </div>
            )}
            <div className="text-4xl mb-4 p-3 bg-purple-50 w-fit rounded-xl">{item.icon}</div>
            <h3 className="card-title text-xl mb-2">{item.name}</h3>
            <p className="text-gray-500 text-sm mb-4">{item.description}</p>
            <div className="text-2xl font-bold text-black mb-4">
              ${item.price} <span className="text-sm font-normal text-gray-400">/{item.period}</span>
            </div>
            <ul className="space-y-2 mb-6 flex-grow">
              {item.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500 font-bold">✓</span> {f}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => addToCart(item)}
              className="btn btn-primary w-full"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}