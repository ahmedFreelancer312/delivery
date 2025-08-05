import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { FaShoppingCart, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const { getTotalItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">ت</span>
            </div>
            <span className="text-xl font-bold text-gray-900">توصيل طلبات</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              الرئيسية
            </Link>
            <Link to="/restaurants" className="text-gray-700 hover:text-primary-600 transition-colors">
              المطاعم
            </Link>
            {user?.role === 'customer' && (
              <Link to="/orders" className="text-gray-700 hover:text-primary-600 transition-colors">
                طلباتي
              </Link>
            )}
            {user?.role === 'restaurant' && (
              <Link to="/restaurant-dashboard" className="text-gray-700 hover:text-primary-600 transition-colors">
                لوحة التحكم
              </Link>
            )}
            {user?.role === 'driver' && (
              <Link to="/driver-dashboard" className="text-gray-700 hover:text-primary-600 transition-colors">
                لوحة السائق
              </Link>
            )}
            {user?.role === 'admin' && (
              <Link to="/admin-dashboard" className="text-gray-700 hover:text-primary-600 transition-colors">
                لوحة الإدارة
              </Link>
            )}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4 space-x-reverse">
            {user ? (
              <>
                {user.role === 'customer' && (
                  <Link to="/cart" className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors">
                    <FaShoppingCart className="w-5 h-5" />
                    {getTotalItems() > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {getTotalItems()}
                      </span>
                    )}
                  </Link>
                )}
                
                <div className="flex items-center space-x-2 space-x-reverse">
                  <img
                    src={user.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32'}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-700">{user.name}</span>
                  <button
                    onClick={handleLogout}
                    className="p-2 text-gray-700 hover:text-red-600 transition-colors"
                    title="تسجيل الخروج"
                  >
                    <FaSignOutAlt className="w-4 h-4" />
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4 space-x-reverse">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-primary-600 transition-colors"
                >
                  تسجيل الدخول
                </Link>
                <Link
                  to="/register"
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  إنشاء حساب
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 