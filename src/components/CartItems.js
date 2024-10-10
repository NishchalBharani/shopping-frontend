import React from 'react';
import { useSelector } from 'react-redux';

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.items); 

  if (cartItems.length === 0) {
    return <p className="text-center text-lg">Your cart is empty.</p>; 
  }

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Cart Items</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="flex items-center justify-between mb-2 border-b pb-2">
          <div className="flex-1">
            <p className="font-semibold">{item.name}</p>
            <p className="text-gray-600">{`Price: $${item.price.toFixed(2)}`}</p>
            <p className="text-gray-600">{`Quantity: ${item.quantity}`}</p>
          </div>
          <img
            src={item.image_url}
            alt={item.name}
            className="h-16 w-16 object-cover rounded"
          />
        </div>
      ))}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">
          Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default CartItems;
