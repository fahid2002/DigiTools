export default function Pricing() {
  const plans = [
    { name: "Starter", price: 0, features: ["Limited Access", "Community Support"], active: false },
    { name: "Pro", price: 29, features: ["Unlimited Access", "Priority Support", "Custom Branding", "Analytics"], active: true },
    { name: "Enterprise", price: 99, features: ["Bulk Licensing", "Dedicated Manager", "API Access"], active: false }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Simple, Transparent Pricing</h2>
          <p className="text-gray-500 mt-2">No hidden fees. Choose the plan that works for you.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`card p-8 border ${plan.active ? 'bg-purple-600 text-white scale-105 border-none shadow-2xl' : 'bg-white text-slate-800'}`}>
              {plan.active && <div className="badge badge-warning mb-4 self-center uppercase font-bold">Most Popular</div>}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">${plan.price}<span className="text-lg opacity-70">/month</span></div>
              <ul className="space-y-4 mb-8">
                {plan.features.map(f => <li key={f} className="flex gap-2">✔ {f}</li>)}
              </ul>
              <button className={`btn w-full ${plan.active ? 'btn-white bg-white text-purple-600' : 'btn-primary'}`}>
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started Now"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}