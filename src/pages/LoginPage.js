import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/userActions'; 
import Snackbar from '../components/Snackbar';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [snackbar, setSnackbar] = useState({ message: '', type: '' });

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await dispatch(loginUser({ username, password })); 
            if (response.payload) {
                setSnackbar({ message: 'Login successful!', type: 'success' });

                
                const redirectPath = localStorage.getItem('redirectPath') || '/';
                
                
                localStorage.removeItem('redirectPath');

                
                navigate(redirectPath);
            } else {
                setSnackbar({ message: 'Invalid credentials', type: 'error' });
            }
        } catch (error) {
            console.error("Login failed:", error);
            setSnackbar({ message: 'Login failed. Please try again.', type: 'error' });
        }
    };

    const closeSnackbar = () => {
        setSnackbar({ message: '', type: '' });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="username" className="block">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border p-2 rounded w-full mb-4"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border p-2 rounded w-full mb-4"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                        Login
                    </button>
                    <p className="mt-4 text-center">
                        Don't have an account? <a href="/register" className="text-blue-600">Register</a>
                    </p>
                </form>

                {/* Snackbar Component */}
                <Snackbar
                    message={snackbar.message}
                    type={snackbar.type}
                    onClose={closeSnackbar}
                />
            </div>
        </div>
    );
};

export default Login;
