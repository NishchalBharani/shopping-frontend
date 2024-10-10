import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserInfo, addAddress, updateAddress } from '../actions/userActions'; 
import CartItems from '../components/CartItems'; 

const DeliveryPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const userInfo = useSelector((state) => state.user.userData); 
    const [address, setAddress] = useState({ street: '', city: '', state: '', postalCode: '', country: '' });
    const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [comments, setComments] = useState(''); 

    useEffect(() => {
        
        dispatch(getUserInfo());
    }, [dispatch]);

    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handleCommentChange = (e) => {
        setComments(e.target.value); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedAddressIndex !== null) {
            
            dispatch(updateAddress(address, selectedAddressIndex)); 
        } else {
            
            dispatch(addAddress(address, userInfo._id));
        }
        
        resetForm();
    };

    const resetForm = () => {
        setAddress({ street: '', city: '', state: '', postalCode: '', country: '' });
        setShowAddressForm(false);
        setSelectedAddressIndex(null);
        setComments('');
    };

    const handleSelectAddress = (index) => {
        setSelectedAddressIndex(index); 
        setAddress(userInfo.addresses[index]); 
        setShowAddressForm(true); 
    };

    const handleAddNewAddress = () => {
        resetForm(); 
        setShowAddressForm(true); 
    };

    return (
        <div className="w-full min-h-screen flex flex-col"> {/* Set minimum height for the page */}
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 p-4">
                <div className="flex justify-between items-center">
                    <div className="w-1/3 text-center text-blue-500 font-bold">Cart</div>
                    <div className="w-1/3 text-center text-blue-400 font-bold">Delivery</div>
                    <div className="w-1/3 text-center text-gray-400">Payment</div>
                </div>
                <div className="w-full h-2 bg-blue-500 mt-2" style={{ width: '66%' }}></div> {/* 66% width filled */}
            </div>

            {/* Main Content - Flexbox Layout for Address and Cart */}
            <div className="flex flex-1 justify-center"> {/* Center both vertically and horizontally */}
                <div className="flex justify-between w-2/3"> {/* Wrapping div to control content width */}
                    {/* Address Section */}
                    <div className="flex-1 p-4 max-w-lg">
                        <h1 className="text-2xl font-bold mb-4 text-center">Delivery Information</h1>

                        {/* Display multiple addresses if available */}
                        {userInfo && userInfo.addresses && userInfo.addresses.length > 0 ? (
                            <div>
                                <h2 className="text-lg font-semibold">Saved Addresses</h2>
                                {userInfo.addresses.map((addr, index) => (
                                    <div key={index} className="border p-4 mb-4 rounded">
                                        <p>{`${addr.street}, ${addr.city}, ${addr.state}, ${addr.postalCode}, ${addr.country}`}</p>
                                        <button
                                            onClick={() => handleSelectAddress(index)}
                                            className={`${selectedAddressIndex === index ? 'bg-green-500' : 'bg-blue-500'
                                                } text-white px-4 py-2 rounded mt-2`}
                                        >
                                            {selectedAddressIndex === index ? 'Selected' : 'Use This Address'}
                                        </button>
                                    </div>
                                ))}

                                <button
                                    onClick={handleAddNewAddress}
                                    className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                                >
                                    Add New Address
                                </button>
                            </div>
                        ) : (
                            <div>
                                <h2 className="text-lg font-semibold">No address available. Please add your address.</h2>
                                <button
                                    onClick={handleAddNewAddress}
                                    className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                                >
                                    Add Address
                                </button>
                            </div>
                        )}

                        {/* Address Form */}
                        {showAddressForm && (
                            <form onSubmit={handleSubmit} className="mt-4">
                                <h2 className="text-lg font-semibold">{selectedAddressIndex !== null ? 'Update Address' : 'Add Address'}</h2>
                                {['street', 'city', 'state', 'postalCode', 'country'].map((field) => (
                                    <div key={field}>
                                        <label className="block mb-1 capitalize">{field}</label>
                                        <input
                                            type="text"
                                            name={field}
                                            value={address[field]}
                                            onChange={handleChange}
                                            required
                                            className="border rounded p-2 mb-4 w-full"
                                        />
                                    </div>
                                ))}

                                {/* Textarea for additional comments */}
                                <div>
                                    <label className="block mb-1">Additional Comments</label>
                                    <textarea
                                        value={comments}
                                        onChange={handleCommentChange}
                                        className="border rounded p-2 mb-4 w-full"
                                        rows="3"
                                        placeholder="Enter any additional comments for the delivery..."
                                    />
                                </div>

                                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                                    {selectedAddressIndex !== null ? 'Update Address' : 'Submit Address'}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Cart Section */}
                    <div className="w-1/3 p-4">
                        <CartItems /> {/* Cart component */}
                    </div>
                </div>
            </div>

            {/* Always Visible Proceed to Payment Button */}
            <div className="bg-gray-200 p-4 flex justify-center"> {/* Ensure the button is always visible */}
                <button
                    className="bg-yellow-600 text-white px-4 py-2 rounded"
                    onClick={() => {
                        if (selectedAddressIndex !== null) {
                            navigate('/auth/payment')
                        } else {
                            console.log('No address selected for payment.');
                        }
                    }}
                >
                    Proceed to Payment
                </button>
            </div>
        </div>
    );
};

export default DeliveryPage;
