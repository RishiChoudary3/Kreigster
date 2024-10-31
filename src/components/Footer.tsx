import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Kreigster</h3>
            <p className="text-sm">
              Fight. Restore. Thrive.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white">Sale</a></li>
              <li><a href="#" className="hover:text-white">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Our Story</a></li>
              <li><a href="#" className="hover:text-white">Impact</a></li>
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Stay updated with our latest collections and impact stories.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 px-4 py-2 rounded text-sm flex-1"
              />
              <button className="bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>© 2024 Kreigster Lifestyle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}