import React, { useState } from 'react';
import { Heart, ShoppingBag, Menu, Search } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <button
              className="sm:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="text-2xl font-bold text-emerald-800">Kreigster</div>
          </div>

          <div className="hidden sm:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-700">Shop</a>
            <a href="#" className="text-gray-700 hover:text-emerald-700">About</a>
            <a href="#" className="text-gray-700 hover:text-emerald-700">Impact</a>
            <a href="#" className="text-gray-700 hover:text-emerald-700">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2">
              <Heart className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2">
              <ShoppingBag className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-700">Shop</a>
            <a href="#" className="block px-3 py-2 text-gray-700">About</a>
            <a href="#" className="block px-3 py-2 text-gray-700">Impact</a>
            <a href="#" className="block px-3 py-2 text-gray-700">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}