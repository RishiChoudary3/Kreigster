import React from 'react';
import { Heart } from 'lucide-react';

export default function Impact() {
  return (
    <div className="bg-emerald-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Making a Difference</h2>
            <p className="mt-4 text-lg text-gray-600">
              We believe in fashion that makes a positive impact. 20% of every purchase goes directly to the Bards Foundation, supporting education initiatives across India.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-semibold">Social Impact</h3>
                  <p className="text-gray-600">Supporting education through every purchase</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-semibold">Sustainable Materials</h3>
                  <p className="text-gray-600">100% natural threads and eco-friendly processes</p>
                </div>
              </div>
            </div>
            <a 
              href="https://bards.co.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-8 text-emerald-700 hover:text-emerald-800"
            >
              Learn more about Bards Foundation →
            </a>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80"
              alt="Impact"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-4xl font-bold text-emerald-700">20%</p>
              <p className="text-gray-600">of every purchase donated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}