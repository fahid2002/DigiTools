import React from "react";

export default function Pricing() {
  const plans = [
    { 
      name: "Starter", 
      price: 0, 
      desc: "Perfect for getting started",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"], 
      active: false 
    },
    { 
      name: "Pro", 
      price: 29, 
      desc: "Best for professionals",
      features: ["Access to all premium tools", "Unlimited templates", "Priority Support", "Unlimited projects", "Cloud sync", "Advanced analytics"], 
      active: true 
    },
    { 
      name: "Enterprise", 
      price: 99, 
      desc: "For teams and businesses",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"], 
      active: false 
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tighter mb-2">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-500 text-base leading-tight">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500 ${
                plan.active 
                  ? 'bg-gradient-to-br from-blue-600 to-purple-700 text-white scale-105 z-10 shadow-2xl shadow-purple-200 border-none' 
                  : 'bg-white border-slate-100 text-slate-800 shadow-sm'
              }`}
            >
              {/*Most Popular Badge*/}
              {plan.active && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-50 px-5 py-1.5 rounded-full shadow-lg border border-amber-100">
                  <span className="text-[12px] font-bold tracking-[0.15em] text-amber-600">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${plan.active ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs leading-tight mb-4 ${plan.active ? 'text-white/80' : 'text-slate-500'}`}>
                  {plan.desc}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-black tracking-tighter ${plan.active ? 'text-white' : 'text-slate-900'}`}>
                    ${plan.price}
                  </span>
                  <span className={`text-sm ${plan.active ? 'text-white/60' : 'text-slate-400'}`}>/mo</span>
                </div>
              </div>

              {/*Features List */}
              <ul className="space-y-1.5 mb-10 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm font-normal leading-none">
                    <svg 
                      className="w-4 h-4 text-green-500 flex-shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`py-1 ${plan.active ? 'text-white/90' : 'text-slate-600'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/*Button Logic */}
              <button 
                className={`w-full py-4 rounded-full font-bold text-sm transition-all duration-300 transform hover:-translate-y-1 ${
                  plan.active 
                    ? 'bg-white text-purple-700 shadow-xl' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-100'
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : plan.name === "Pro" ? "Start Pro Trial" : "Get Started Now"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}