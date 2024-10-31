import React from 'react';
import { Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80"
          alt="Sustainable Fashion"
        />
        <div className="absolute inset-0 bg-gray-900/40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Sustainable Fashion for All
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-100">
            Unisex designs crafted with natural threads. Every purchase helps support education through Bards Foundation.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-emerald-700 text-white px-8 py-3 rounded-full hover:bg-emerald-800 transition">
              Shop Collection
            </button>
            <button className="bg-white text-emerald-800 px-8 py-3 rounded-full hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}