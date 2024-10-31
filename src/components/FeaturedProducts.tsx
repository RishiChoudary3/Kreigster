import React from 'react';
import { Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Natural Linen Wrap Dress',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Organic Cotton Jumpsuit',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Hemp Blend Oversized Shirt',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1578966857306-c01febe1d8be?auto=format&fit=crop&q=80',
  },
];

export default function FeaturedProducts() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Featured Collection</h2>
        <p className="mt-4 text-gray-600">Timeless pieces crafted with care for the environment</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="h-[400px] w-full object-cover object-center group-hover:opacity-90 transition"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:bg-gray-100">
                <Heart className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              <p className="mt-1 text-gray-600">${product.price}</p>
            </div>
            <button className="mt-4 w-full bg-emerald-700 text-white py-2 rounded hover:bg-emerald-800 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}