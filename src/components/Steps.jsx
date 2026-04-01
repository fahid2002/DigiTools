import React from "react";

export default function Steps() {
  const steps = [
    { 
      id: "01", 
      title: "Create Account", 
      desc: "Sign up for free in seconds. No credit card required to get started.", 
      // Removed the leading slash here for cleaner logic
      img: "user.png" 
    },
    { 
      id: "02", 
      title: "Choose Products", 
      desc: "Browse our catalog and select the tools that fit your needs.", 
      img: "package.png" 
    },
    { 
      id: "03", 
      title: "Start Creating", 
      desc: "Download and start using your premium tools immediately.", 
      img: "rocket.png" 
    }
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Get Started In 3 Steps
          </h2>
          <p className="text-slate-500 mt-3 text-base font-normal">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Grid*/}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="group bg-white rounded-[2rem] border border-slate-100 p-8 text-center shadow-sm hover:shadow-xl transition-all duration-500 relative"
            >
              {/* 01, 02, 03 Numbering*/}
              <span className="absolute top-5 right-5 bg-gradient-to-br from-blue-600 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-lg shadow-purple-100">
                {step.id}
              </span>

              {/* Image Circle*/}
              <div className="mb-6 flex justify-center pt-2">
                <div className="w-24 h-24 rounded-full bg-purple-50 flex items-center justify-center overflow-hidden border border-purple-100 group-hover:scale-105 transition-transform duration-500 shadow-sm">
                  <img 
                    // FIXED: Added BASE_URL to ensure images load on GitHub Pages
                    src={`${import.meta.env.BASE_URL}${step.img}`} 
                    alt={step.title} 
                    className="w-full h-full object-contain p-5" 
                  />
                </div>
              </div>

              {/* Typography */}
              <h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm font-normal px-2">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}