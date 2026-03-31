export default function Stats() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-500 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
        <div>
          <h2 className="text-5xl font-bold">50K+</h2>
          <p className="opacity-80">Active Users</p>
        </div>
        <div className="border-x border-white/20">
          <h2 className="text-5xl font-bold">200+</h2>
          <p className="opacity-80">Premium Tools</p>
        </div>
        <div>
          <h2 className="text-5xl font-bold">4.9</h2>
          <p className="opacity-80">User Rating</p>
        </div>
      </div>
    </div>
  );
}