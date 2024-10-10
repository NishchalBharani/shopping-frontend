import React from 'react';

const HeroBanner = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat h-[30rem]" style={{ backgroundImage: `url('https://cdn.venngage.com/template/thumbnail/full/ce0f9af1-115d-4e07-b7aa-8bddbac4447f.webp')` }}>
      <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-white text-center">
          <h1 className="text-6xl font-extrabold text-white-500">Big Sale! Up to 50% Off</h1>
          <button className="mt-4 bg-red-500 px-4 py-2 rounded-lg">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
