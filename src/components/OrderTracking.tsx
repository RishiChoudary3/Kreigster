import React, { useState } from 'react';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

interface OrderStatus {
  status: 'processing' | 'shipped' | 'delivered';
  timestamp: string;
  location?: string;
}

export default function OrderTracking() {
  const [orderId, setOrderId] = useState('');
  const [orderDetails, setOrderDetails] = useState<null | {
    id: string;
    status: OrderStatus;
    items: Array<{ name: string; quantity: number }>;
    total: number;
  }>(null);

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order lookup - replace with actual API call
    setOrderDetails({
      id: orderId,
      status: {
        status: 'shipped',
        timestamp: '2024-03-15 14:30:00',
        location: 'Mumbai Distribution Center'
      },
      items: [
        { name: 'Natural Linen Wrap Dress', quantity: 1 },
        { name: 'Organic Cotton Jumpsuit', quantity: 1 }
      ],
      total: 279.98
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Clock className="h-6 w-6 text-yellow-500" />;
      case 'shipped':
        return <Truck className="h-6 w-6 text-blue-500" />;
      case 'delivered':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      default:
        return <Package className="h-6 w-6 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Track Your Order</h1>
        
        <form onSubmit={handleTrackOrder} className="mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Enter your order ID"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
            <button
              type="submit"
              className="bg-emerald-700 text-white px-6 py-2 rounded-md hover:bg-emerald-800 transition"
            >
              Track Order
            </button>
          </div>
        </form>

        {orderDetails && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="border-b pb-4 mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Order #{orderDetails.id}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Total: ${orderDetails.total}
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-4">
                {getStatusIcon(orderDetails.status.status)}
                <div>
                  <p className="font-semibold text-gray-900 capitalize">
                    {orderDetails.status.status}
                  </p>
                  <p className="text-sm text-gray-600">
                    {orderDetails.status.location}
                  </p>
                  <p className="text-sm text-gray-500">
                    {orderDetails.status.timestamp}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Order Items</h3>
              <ul className="space-y-2">
                {orderDetails.items.map((item, index) => (
                  <li key={index} className="flex justify-between text-sm">
                    <span>{item.name}</span>
                    <span className="text-gray-600">Qty: {item.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}