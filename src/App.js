
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PublicRoutes from './routes/PublicRoutes';
import UserRoutes from './routes/UserRoutes';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/*" element={<PublicRoutes />} />

            {/* User (Protected) Routes */}
            <Route path="/auth/*" element={<UserRoutes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
