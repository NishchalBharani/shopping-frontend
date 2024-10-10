// src/pages/TermsOfService.js
import React from 'react';

const TermsOfService = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">
        By using our website, you agree to these terms of service. If you do not agree, please do not 
        use our site.
      </p>
      <h2 className="text-2xl font-semibold mb-2">User Responsibilities</h2>
      <p className="mb-4">
        You are responsible for maintaining the confidentiality of your account information and for all 
        activities that occur under your account.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
      <p>
        Our liability is limited to the maximum extent permitted by law. We are not responsible for any 
        indirect, incidental, or consequential damages.
      </p>
    </div>
  );
};

export default TermsOfService;
