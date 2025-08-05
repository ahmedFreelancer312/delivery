import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import RestaurantDetail from './pages/RestaurantDetail';
import RestaurantDashboard from './pages/RestaurantDashboard';
import DriverDashboard from './pages/DriverDashboard';
import AdminDashboard from './pages/AdminDashboard';
import OrderTracking from './pages/OrderTracking';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/restaurant/:id" element={<RestaurantDetail />} />
              <Route path="/restaurant-dashboard" element={<RestaurantDashboard />} />
              <Route path="/driver-dashboard" element={<DriverDashboard />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/order-tracking/:id" element={<OrderTracking />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;