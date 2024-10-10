import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.product);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product)); 
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          product && (
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0 w-full md:w-1/2">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="flex-grow w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-500 mb-4">Brand: {product.brand}</p>
                <p className="text-xl font-semibold text-gray-800 mb-4">
                  ${product.price}
                </p>
                <div className="mb-4" dangerouslySetInnerHTML={{ __html: product.description }} />
                <p className="text-gray-700 mb-2">Material: {product.material}</p>
                <p className="text-gray-600 mb-4">Delivery Estimate: {product.delivery_estimate}</p>
                <p className="text-gray-600 mb-4">Return Policy: {product.return_policy}</p>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500">★ {product.rating}</span>
                  <span className="ml-4 text-green-600">{product.stock_status}</span>
                </div>
                <div className="flex">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mr-2" onClick={handleAddToCart}>
                    Add to Cart
                  </button>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
