import React from "react";
import productsData from "../data/products.json";

export default function Products({ addToCart }) {
  return (
    <div className="bg-white max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2 text-slate-900">Premium Digital Tools</h2>
        <p className="text-gray-500">Choose from our curated collection of premium digital products designed <br/>to boost your productivity and creativity.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {productsData.map((item) => (
          <div key={item.id} className="card bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all p-6 relative">
            {item.tag && (
              <div className={`badge badge-${item.tagType} absolute top-4 right-4 border-none rounded-full`}>
                {item.tag}
              </div>
            )}
            <div className="text-4xl mb-4 p-3 bg-purple-50 w-fit rounded-xl">{item.icon}</div>
            
            {/* Forced black text for titles */}
            <h3 className="card-title text-xl mb-2 text-slate-900 font-bold">{item.name}</h3>
            
            <p className="text-gray-500 text-sm mb-4">{item.description}</p>
            
            {/* Forced black text for price */}
            <div className="text-2xl font-bold text-slate-900 mb-4">
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
  /* Combined from-blue-600 and to-purple-600 for the gradient mix */
  className="btn w-full bg-gradient-to-r from-blue-600 to-purple-600 border-none hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-bold shadow-lg shadow-blue-100 transition-all duration-300"
>
  Buy Now
</button>
          </div>
        ))}
      </div>
    </div>
  );
}