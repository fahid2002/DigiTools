export default function Footer() {
  return (
    <footer className="bg-[#0b0d17] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
        <div className="col-span-1">
          <h2 className="text-2xl font-bold text-purple-500 mb-4">DigiTools</h2>
          <p className="text-gray-400">Everything you need to create, manage and scale your digital workflow.</p>
        </div>
        <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest text-sm">Product</h4>
            <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>Case Studies</li>
            </ul>
        </div>
        <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>
        </div>
        <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest text-sm">Social</h4>
            <div className="flex gap-4 text-2xl">
                <span>🌐</span> <span>🐦</span> <span>📸</span>
            </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:row justify-between text-gray-500 text-sm">
          <p>© 2026 DigiTools. All rights reserved.</p>
          <div className="flex gap-6">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
          </div>
      </div>
    </footer>
  );
}