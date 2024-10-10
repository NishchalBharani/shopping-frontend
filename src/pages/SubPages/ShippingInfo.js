// src/pages/ShippingInfo.js
import React from 'react';

const ShippingInfo = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shipping Information</h1>
      <p className="mb-4">
        We offer free shipping on orders over $50. All orders are processed within 2-3 business days. 
        You will receive a tracking number once your order has been shipped.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Shipping Methods</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Standard Shipping: 5-7 business days</li>
        <li>Express Shipping: 2-3 business days</li>
        <li>Overnight Shipping: 1 business day</li>
      </ul>
      <p className="mb-4">
        For more information, please contact our customer service.
      </p>
    </div>
  );
};

export default ShippingInfo;
