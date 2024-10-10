import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { USER_LOGOUT } from '../constants/userConstants';
import { searchProd } from '../actions/productActions';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [suggestions, setSuggestions] = useState([]); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.user.userInfo);
  const cartItems = useSelector((state) => state.cart.items);
  const cartLength = cartItems.length;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch({ type: USER_LOGOUT });
    localStorage.removeItem('userInfo');
    navigate('/');
    window.location.reload();
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      const mockSuggestions = ['shirts', 'jackets', 'shoes', 'pants', 'accessories'];
      const filteredSuggestions = mockSuggestions.filter(item => item.toLowerCase().includes(query.toLowerCase()));
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchQuery.length > 0) {
      e.preventDefault(); 
      
      dispatch(searchProd(1, 10, searchQuery)); 
      navigate(`/search?query=${searchQuery}`); 
      setSearchQuery(""); 
      setSuggestions([]); 
      window.location.reload()
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-semibold cursor-pointer" onClick={() => navigate('/')}>
            Simple Store
          </div>
          <ul className="hidden md:flex space-x-6">
            <li><Link to="/men" className="hover:text-gray-600">Men</Link></li>
            <li><Link to="/women" className="hover:text-gray-600">Women</Link></li>
            <li><Link to="/kids" className="hover:text-gray-600">Kids</Link></li>
            <li><Link to="/accessories" className="hover:text-gray-600">Accessories</Link></li>
          </ul>
        </div>

        <div className="flex-grow max-w-md mx-6 hidden md:block">
          <input
            type="text"
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress} 
          />
          {suggestions.length > 0 && (
            <div className="absolute bg-white border border-gray-300 rounded-lg mt-1 z-10">
              {suggestions.map((suggestion, index) => (
                <div key={index} className="p-2 hover:bg-gray-200 cursor-pointer">
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <Link to="/cart" className="flex items-center">
              <span className="text-2xl">🛒</span>
              {cartLength > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1">
                  {cartLength}
                </span>
              )}
            </Link>
          </div>

          {userInfo ? (
            <button 
              onClick={handleLogout} 
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
            >
              Logout
            </button>
          ) : (
            <div className="flex space-x-2">
              <Link to="/login">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4 p-4">
            <li><Link to="/men" className="hover:text-gray-600">Men</Link></li>
            <li><Link to="/women" className="hover:text-gray-600">Women</Link></li>
            <li><Link to="/kids" className="hover:text-gray-600">Kids</Link></li>
            <li><Link to="/accessories" className="hover:text-gray-600">Accessories</Link></li>
            {userInfo ? (
              <li>
                <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200">
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
                      Login
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200">
                      Register
                    </button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
