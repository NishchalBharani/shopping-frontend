
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/userActions';
import Snackbar from '../components/Snackbar';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [snackbar, setSnackbar] = useState({ message: '', type: '' });
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await dispatch(registerUser({ username, email, password, phone }));
            if (response.payload) {
                
                setSnackbar({ message: 'Registration successful!', type: 'success' });
                
                window.location.reload(); 
                navigate('/'); 
            } else {
                
                setSnackbar({ message: response.error || 'Registration failed. Please try again.', type: 'error' });
            }
        } catch (error) {
            setSnackbar({ message: 'An error occurred. Please try again.', type: 'error' });
        }
    };

    const closeSnackbar = () => {
        setSnackbar({ message: '', type: '' });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Already have an account? <a href="/login" className="text-blue-600">Login</a>
                </p>
            </div>

            {/* Snackbar Component */}
            <Snackbar
                message={snackbar.message}
                type={snackbar.type}
                onClose={closeSnackbar}
            />
        </div>
    );
};

export default RegisterPage;
