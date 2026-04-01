import React from "react";

export default function Banner() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10 lg:gap-16">
          
          {/*IMAGE*/}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-200 to-indigo-100 rounded-[2.5rem] blur-2xl opacity-40"></div>
              <img 
                src="/banner.png" 
                className="relative w-full max-w-md lg:max-w-lg rounded-[2.5rem] shadow-2xl transition-transform duration-700 hover:scale-[1.03]" 
                alt="Hero Banner" 
              />
            </div>
          </div>

          {/*TEXT */}
            <div className="w-full lg:w-1/2 text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-600"></span>
              </span>
              <span className="text-purple-700 font-bold text-xs md:text-sm tracking-wider uppercase">
                NEW: AI-POWERED TOOLS AVAILABLE
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
              Supercharge Your <br /> 
              <span className="text-purple-600">Digital Workflow</span>
            </h1>
            
            <p className="py-8 text-slate-600 text-lg md:text-xl max-w-xl leading-relaxed">
              Access premium AI tools, design assets, templates, and productivity 
              software—all in one place. Start creating faster today.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* Primary Action */}
              <button className="btn btn-primary bg-purple-600 border-none hover:bg-purple-700 px-10 rounded-full text-white font-bold h-14 shadow-lg shadow-purple-100 normal-case text-lg">
                Explore Products
              </button>

              {/*Watch Demo*/}
              <button className="btn btn-outline border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-purple-600 px-10 rounded-full h-14 font-bold normal-case text-lg gap-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-6 h-6"
                >
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}