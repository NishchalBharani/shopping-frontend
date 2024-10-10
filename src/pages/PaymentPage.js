
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 

const PaymentPage = () => {
    const navigate = useNavigate();
    const userInfo = useSelector((state) => state.user.userData); 
    const cartItems = useSelector((state) => state.cart.items); 
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0); 

    useEffect(() => {
        if (!userInfo || !userInfo.addresses.length) {
            
            navigate('/delivery');
        }
    }, [userInfo, navigate]);

    const handlePaymentMethodChange = (e) => {
        setSelectedPaymentMethod(e.target.value);
    };

    const handlePromoCodeChange = (e) => {
        setPromoCode(e.target.value);
    };

    const applyPromoCode = () => {
        
        if (promoCode === 'DISCOUNT10') {
            setDiscount(10); 
        } else {
            alert('Invalid promo code');
        }
    };

    const calculateTotal = () => {
        const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        return total - (total * (discount / 100));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        alert('Payment submitted successfully!');
        
        navigate('/');
    };

    return (
        <div className="w-full h-auto flex flex-col items-center p-4">
            <div className="w-full bg-gray-200 p-4">
                <div className="flex justify-between items-center">
                    <div className="w-1/3 text-center text-blue-500 font-bold">Cart</div>
                    <div className="w-1/3 text-center text-blue-400 font-bold">Delivery</div>
                    <div className="w-1/3 text-center text-blue-400 font-bold">Payment</div>
                </div>
                <div className="w-full h-2 bg-blue-500 mt-2" style={{ width: '100%' }}></div> {/* 66% width filled */}
            </div>
            <h1 className="text-2xl font-bold mb-4">Payment Information</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Select Payment Method</h2>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="Credit Card"
                                checked={selectedPaymentMethod === 'Credit Card'}
                                onChange={handlePaymentMethodChange}
                                className="mr-2"
                            />
                            Credit Card
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="Debit Card"
                                checked={selectedPaymentMethod === 'Debit Card'}
                                onChange={handlePaymentMethodChange}
                                className="mr-2"
                            />
                            Debit Card
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="Net Banking"
                                checked={selectedPaymentMethod === 'Net Banking'}
                                onChange={handlePaymentMethodChange}
                                className="mr-2"
                            />
                            Net Banking
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="UPI"
                                checked={selectedPaymentMethod === 'UPI'}
                                onChange={handlePaymentMethodChange}
                                className="mr-2"
                            />
                            UPI
                        </label>
                    </div>
                </div>

                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Promo Code</h2>
                    <input
                        type="text"
                        value={promoCode}
                        onChange={handlePromoCodeChange}
                        className="border rounded p-2 w-full"
                        placeholder="Enter promo code"
                    />
                    <button
                        type="button"
                        onClick={applyPromoCode}
                        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                    >
                        Apply
                    </button>
                </div>

                <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
                {cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between mb-2">
                        <span>{item.name} (x{item.quantity})</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
                <div className="flex justify-between font-bold mb-4">
                    <span>Total:</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                </div>

                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
                    Pay Now
                </button>
            </form>
        </div>
    );
};

export default PaymentPage;
