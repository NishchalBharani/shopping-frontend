import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ key, product }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/products/${product._id}`); 
  };

  return (
    <div 
      className="w-full h-[30rem] p-4 cursor-pointer" // Set width to 100%
      onClick={handleProductClick} 
      key={key}
    >
      <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
        <img className="w-full h-[20rem] object-cover" src={product.image_url} alt={product.name} />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-500">Brand: {product.brand}</p>
          <p className="text-gray-700 font-bold">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
