import React, { useEffect } from 'react';
import { Lock, CreditCard } from 'lucide-react';

interface PaymentProps {
  orderId: string;
  amount: number;
  customerEmail: string;
  customerPhone: string;
  onSuccess: (response: any) => void;
  onFailure: (error: any) => void;
}

export default function PaymentGateway({
  orderId,
  amount,
  customerEmail,
  customerPhone,
  onSuccess,
  onFailure
}: PaymentProps) {
  useEffect(() => {
    // Initialize PayUBiz
    const script = document.createElement('script');
    script.src = 'https://secure.payu.in/js/payu.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    // Replace with your actual PayUBiz merchant details
    const paymentData = {
      key: 'YOUR_MERCHANT_KEY',
      txnid: orderId,
      amount: amount,
      productinfo: 'Kreigster Lifestyle Order',
      firstname: 'Customer',
      email: customerEmail,
      phone: customerPhone,
      surl: 'https://your-website.com/payment/success',
      furl: 'https://your-website.com/payment/failure',
      hash: 'GENERATED_HASH' // Generate this on your backend
    };

    // @ts-ignore
    if (window.bolt) {
      // @ts-ignore
      window.bolt.launch(paymentData, {
        responseHandler: (response: any) => {
          if (response.response.txnStatus === 'SUCCESS') {
            onSuccess(response);
          } else {
            onFailure(response);
          }
        },
        catchException: (error: any) => {
          onFailure(error);
        }
      });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <Lock className="h-5 w-5 text-emerald-700" />
        <h2 className="text-xl font-semibold">Secure Payment</h2>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Order Total:</span>
          <span className="font-semibold">${amount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Order ID:</span>
          <span className="text-sm">{orderId}</span>
        </div>
      </div>

      <button
        onClick={handlePayment}
        className="w-full bg-emerald-700 text-white py-3 rounded-md hover:bg-emerald-800 transition flex items-center justify-center gap-2"
      >
        <CreditCard className="h-5 w-5" />
        Proceed to Payment
      </button>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Secured by PayUBiz Payment Gateway
        </p>
      </div>
    </div>
  );
}