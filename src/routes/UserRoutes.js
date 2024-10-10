
import React from 'react';
import { Route, Navigate, useLocation, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DeliveryPage from '../pages/DeliveryPage';
import PaymentPage from '../pages/PaymentPage'; 

const UserRoutes = () => {
    const userInfo = useSelector((state) => state.user.userInfo);
    const location = useLocation(); 

    if (!userInfo) {
        
        localStorage.setItem('redirectPath', location.pathname);
        
        return <Navigate to="/login" />;
    }

    return (
        <Routes>
            {/* Route for DeliveryPage */}
            <Route path="/delivery" element={<DeliveryPage />} />
            {/* Route for PaymentPage */}
            <Route path="/payment" element={<PaymentPage />} />
            {/* Optionally, redirect root to delivery */}
            <Route path="/" element={<Navigate to="/delivery" />} />
        </Routes>
    );
};

export default UserRoutes;
