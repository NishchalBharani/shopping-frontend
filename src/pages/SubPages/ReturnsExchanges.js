// src/pages/ReturnsExchanges.js
import React from 'react';

const ReturnsExchanges = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Returns & Exchanges</h1>
      <p className="mb-4">
        We want you to love your purchase! If you are not completely satisfied, you can return or exchange 
        your items within 30 days of receiving your order.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Return Process</h2>
      <p className="mb-4">
        To initiate a return, please contact our customer service with your order number and reason for 
        return. We will provide you with a return shipping label.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Exchanges</h2>
      <p>
        If you wish to exchange an item, please follow the same process as above. Once we receive your 
        returned item, we will process your exchange within 5-7 business days.
      </p>
    </div>
  );
};

export default ReturnsExchanges;
