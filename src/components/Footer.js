// src/components/Footer.js
import React,  { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../api/axiosConfig';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = async () => {
        try {
            const response = await axiosInstance.post('/subscribers/subscribe', { email });
            alert(response.data.message);
        } catch (error) {
            alert('Failed to subscribe: ' + error.response.data.message);
        }
    };

    return (
        <footer className="bg-gray-800 text-white py-8 mt-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                        <h4 className="font-bold mb-2">About Us</h4>
                        <ul>
                            <li><Link to="/about" className="hover:underline">Our Story</Link></li>
                            <li><Link to="/careers" className="hover:underline">Careers</Link></li>
                            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
                            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Customer Care</h4>
                        <ul>
                            <li><Link to="/shipping" className="hover:underline">Shipping Info</Link></li>
                            <li><Link to="/returns" className="hover:underline">Returns & Exchanges</Link></li>
                            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Social</h4>
                        <ul>
                            <li><Link to="/facebook" className="hover:underline">Facebook</Link></li>
                            <li><Link to="/instagram" className="hover:underline">Instagram</Link></li>
                            <li><Link to="/twitter" className="hover:underline">Twitter</Link></li>
                            <li><Link to="/linkedin" className="hover:underline">LinkedIn</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Subscribe</h4>
                        <p>Sign up for exclusive offers and updates:</p>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="mt-2 p-2 rounded text-black"
                        />
                        <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2" onClick={handleSubscribe}>Subscribe</button>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
