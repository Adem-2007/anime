// src/components/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/Slice/UserSlice';
import OnePieceLogo from '../../images/OnePice.png';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaSignOutAlt, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector(state => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setShowProfileMenu(false);
  };

  const menuItems = [
    { label: 'Home', icon: FaHome, path: '/' },
    { label: 'Anime', path: '/animes' },
    { label: 'Characters', path: '/characters' },
    { label: 'Genres', path: '/genres' },
  ];

  return (
    <nav className="bg-gray-900/90 backdrop-blur-md text-white py-4 px-6  w-full top-0 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={OnePieceLogo} 
              alt="Logo" 
              className="w-12 h-12 rounded-full"
            />
            <span className="text-2xl font-bold font-abril">OnePiece</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="hover:text-red-500 transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Search and Auth */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="hover:text-red-500 transition-colors duration-300">
              <FaSearch size={20} />
            </button>

            {isAuthenticated ? (
              <div className="relative">
                <motion.button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2"
                >
                  <img
                    src={user?.image || "https://via.placeholder.com/40"}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-red-500"
                  />
                </motion.button>

                <AnimatePresence>
                  {showProfileMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-2"
                    >
                      <Link
                        to="/profile"
                        className="flex items-center px-4 py-2 hover:bg-gray-700"
                        onClick={() => setShowProfileMenu(false)}
                      >
                        <FaUser className="mr-2" /> Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 hover:bg-gray-700 text-red-500"
                      >
                        <FaSignOutAlt className="mr-2" /> Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full transition-colors duration-300"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="block py-2 hover:text-red-500 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {isAuthenticated ? (
                <>
                  <Link
                    to="/profile"
                    className="block py-2 hover:text-red-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left py-2 text-red-500"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="block py-2 text-red-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;
