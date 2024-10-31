import React from 'react';
import { Heart, ShoppingBag, Menu, Search, Leaf } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Impact from './components/Impact';
import Footer from './components/Footer';
import OrderTracking from './components/OrderTracking';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Impact />
      <OrderTracking />
      <Footer />
    </div>
  );
}

export default App;