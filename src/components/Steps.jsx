export default function Steps() {
  const steps = [
    { id: 1, title: "Create Account", desc: "Sign up with your email to start your journey.", icon: "👤" },
    { id: 2, title: "Choose Products", desc: "Select from our range of premium digital tools.", icon: "📦" },
    { id: 3, title: "Start Creating", desc: "Use your tools to build your dream projects.", icon: "🚀" }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Get Started In 3 Steps</h2>
        <p className="text-gray-500 mt-2">Start your digital transformation today.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="card bg-white shadow-xl border border-gray-100 p-10 text-center hover:-translate-y-2 transition-transform relative overflow-hidden">
            <span className="absolute top-4 right-4 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
              {step.id}
            </span>
            <div className="text-5xl mb-6 flex justify-center text-purple-600">{step.icon}</div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-gray-500">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}