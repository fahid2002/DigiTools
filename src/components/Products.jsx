import React from "react";
import productsData from "../data/products.json";

export default function Products({ addToCart }) {
  // STRICT COLOR LOGIC: Matches tags by name to ensure color consistency
  const getTagStyle = (tagName) => {
    const name = tagName?.toLowerCase();
    if (name === "best seller" || name === "hot") {
      return "bg-amber-50 text-amber-600 border border-amber-100"; 
    }
    if (name === "popular") {
      return "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-none shadow-sm shadow-purple-100"; 
    }
    if (name === "new") {
      return "bg-green-50 text-green-600 border border-green-100"; 
    }
    return "bg-slate-100 text-slate-600";
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-2 text-slate-900 tracking-tight">
            Premium Digital Tools
          </h2>
          <p className="text-slate-500 text-base leading-tight">
            Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.
          </p>
        </div> */}
        
        <div className="grid md:grid-cols-3 gap-6">
          {productsData.map((item) => (
            <div 
              key={item.id} 
              className="group flex flex-col bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-lg transition-all duration-500 p-6 relative"
            >
              <div className="flex justify-between items-start mb-4 pt-1">
                {/* Image Container */}
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border border-slate-100 shadow-sm">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-contain p-2.5" 
                  />
                </div>

                {/* Tags */}
                {item.tag && (
                  <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${getTagStyle(item.tag)}`}>
                    {item.tag}
                  </div>
                )}
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-0.5 tracking-tight">
                  {item.name}
                </h3>
                <p className="text-slate-500 text-xs leading-tight mb-3">
                  {item.description}
                </p>
                
                {/* Price Section */}
                <div className="flex items-baseline gap-0.5 mb-3">
                  <span className="text-3xl font-black text-slate-900 leading-none">
                    ${item.price}
                  </span>
                  <span className="text-xs font-medium text-slate-400">/{item.period}</span>
                </div>
                
                <ul className="space-y-1 mb-6">
                  {item.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-600 leading-tight">
                      <span className="text-emerald-500 font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Buy Now Button */}
              <button 
                onClick={() => addToCart(item)}
                className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-sm shadow-md shadow-purple-50 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}