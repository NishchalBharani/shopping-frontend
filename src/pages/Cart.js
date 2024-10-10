
import React, { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { removeFromCart, incrementItemQuantity, decrementItemQuantity, setCartItems } from '../actions/cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const cartItems = useSelector((state) => state.cart.items); 

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId)); 
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2); 

  
  const handleProceedToDelivery = () => {
    if (cartItems.length > 0) {
      navigate('/auth/delivery'); 
    }
  };

  
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); 
  }, [cartItems]);

  
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems'); 
    if (storedCartItems) {
      dispatch(setCartItems(JSON.parse(storedCartItems))); 
    }
  }, [dispatch]);

  return (
    <div>
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 p-4">
        <div className="flex justify-between items-center">
          <div className="w-1/3 text-center text-blue-500 font-bold">Cart</div>
          <div className="w-1/3 text-center text-gray-400">Delivery</div>
          <div className="w-1/3 text-center text-gray-400">Payment</div>
        </div>
        <div className="w-full h-2 bg-blue-500 mt-2" style={{ width: '33%' }}></div> {/* 33% width filled for Cart */}
      </div>

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cartItems.length === 0 ? (
          <div className="text-gray-500">Your cart is empty. Try adding some products!</div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center justify-between border-b py-2">
                <div className="flex items-center">
                  <img src={item.image_url} alt={item.name} className="w-16 h-16 object-cover mr-4" /> {/* Display product image */}
                  <div>
                    <div>{item.name}</div>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => dispatch(decrementItemQuantity(item._id))}
                        className="bg-gray-200 rounded px-2"
                        disabled={item.quantity === 1} 
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() => dispatch(incrementItemQuantity(item._id))}
                        className="bg-gray-200 rounded px-2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div>${(item.price * item.quantity).toFixed(2)}</div> {/* Show total price for the item */}
                  <button
                    onClick={() => handleRemoveFromCart(item._id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between font-bold mt-4">
              <span>Total Price:</span>
              <span>${totalPrice}</span>
            </div>

            {/* Proceed to Delivery Button */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleProceedToDelivery}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
                disabled={cartItems.length === 0} 
              >
                Proceed to Delivery
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
