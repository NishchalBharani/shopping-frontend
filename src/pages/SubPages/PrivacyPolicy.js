// src/pages/PrivacyPolicy.js
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Your privacy is important to us. This privacy policy explains how we collect, use, and protect 
        your information when you visit our site.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
      <p className="mb-4">
        We collect personal information that you provide to us when you place an order, create an account, 
        or sign up for our newsletter.
      </p>
      <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
      <p>
        We use your information to process your orders, communicate with you, and improve our services. 
        We do not sell or rent your information to third parties.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
