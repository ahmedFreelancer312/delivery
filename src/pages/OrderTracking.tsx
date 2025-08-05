import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FaMapMarkerAlt, FaClock, FaCheckCircle, FaSpinner } from 'react-icons/fa';

// Mock data for demonstration
const mockOrder = {
  id: '1',
  restaurantName: 'مطعم الشرق',
  customerName: 'أحمد محمد',
  address: 'شارع الملك فهد، الرياض',
  items: ['كباب لحم', 'شاورما دجاج'],
  total: 80,
  status: 'preparing',
  estimatedDeliveryTime: '30 دقيقة',
  progress: [
    { status: 'pending', label: 'في الانتظار', completed: true },
    { status: 'preparing', label: 'قيد التحضير', completed: true },
    { status: 'picked', label: 'تم الاستلام', completed: false },
    { status: 'delivered', label: 'تم التوصيل', completed: false },
  ],
};

const OrderTracking: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [order, setOrder] = useState(mockOrder);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    // Simulate fetching order data
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [user, navigate]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'preparing':
        return 'bg-blue-100 text-blue-800';
      case 'picked':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <FaSpinner className="w-8 h-8 text-primary-600 animate-spin" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">الطلب غير موجود</h2>
          <p className="text-gray-600">عذراً، الطلب الذي تبحث عنه غير متاح</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">تتبع الطلب #{order.id}</h1>
            <p className="text-gray-600 mt-1">تابع حالة طلبك في الوقت الفعلي</p>
          </div>

          <div className="p-6">
            {/* Order Details */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">تفاصيل الطلب</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">المطعم: <span className="font-semibold">{order.restaurantName}</span></p>
                  <p className="text-gray-600">العميل: <span className="font-semibold">{order.customerName}</span></p>
                  <div className="flex items-center mt-2">
                    <FaMapMarkerAlt className="w-4 h-4 text-gray-400 mr-1" />
                    <p className="text-gray-600">{order.address}</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600">المنتجات: <span className="font-semibold">{order.items.join('، ')}</span></p>
                  <p className="text-gray-600">الإجمالي: <span className="font-semibold">{order.total} ريال</span></p>
                  <p className="text-gray-600">وقت التوصيل المتوقع: <span className="font-semibold">{order.estimatedDeliveryTime}</span></p>
                </div>
              </div>
            </div>

            {/* Progress Tracker */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">حالة الطلب</h3>
              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
                <div className="flex justify-between">
                  {order.progress.map((step, index) => (
                    <div key={step.status} className="flex flex-col items-center relative z-10">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step.completed ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {step.completed ? <FaCheckCircle className="w-4 h-4" /> : index + 1}
                      </div>
                      <span className="mt-2 text-sm text-gray-600">{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div className="text-center">
              <span
                className={`inline-flex px-4 py-2 text-sm font-semibold rounded-full ${getStatusColor(order.status)}`}
              >
                {order.progress.find(step => step.status === order.status)?.label || 'غير معروف'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;