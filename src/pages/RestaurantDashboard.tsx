import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaEye, FaCheck, FaTimes } from 'react-icons/fa';

const RestaurantDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const [showAddProduct, setShowAddProduct] = useState(false);

  // Mock data
  const orders = [
    {
      id: '1',
      customerName: 'أحمد محمد',
      items: ['كباب لحم', 'شاورما دجاج'],
      total: 80,
      status: 'pending',
      time: '14:30'
    },
    {
      id: '2',
      customerName: 'فاطمة علي',
      items: ['بيتزا مارجريتا'],
      total: 55,
      status: 'preparing',
      time: '14:25'
    }
  ];

  const products = [
    {
      id: '1',
      name: 'كباب لحم',
      price: 45,
      category: 'أطباق رئيسية',
      isAvailable: true
    },
    {
      id: '2',
      name: 'شاورما دجاج',
      price: 35,
      category: 'أطباق رئيسية',
      isAvailable: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'preparing':
        return 'bg-blue-100 text-blue-800';
      case 'ready':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'في الانتظار';
      case 'preparing':
        return 'قيد التحضير';
      case 'ready':
        return 'جاهز';
      default:
        return 'غير معروف';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">لوحة تحكم المطعم</h1>
          <p className="text-gray-600 mt-2">إدارة الطلبات والمنتجات</p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8 space-x-reverse">
            <button
              onClick={() => setActiveTab('orders')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'orders'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              الطلبات
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'products'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              المنتجات
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'analytics'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              التحليلات
            </button>
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">الطلبات الجديدة</h2>
            </div>
            <div className="p-6">
              {orders.length === 0 ? (
                <p className="text-gray-500 text-center py-8">لا توجد طلبات جديدة</p>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">{order.customerName}</h3>
                          <p className="text-sm text-gray-600">{order.items.join('، ')}</p>
                          <p className="text-sm text-gray-500">الوقت: {order.time}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{order.total} ريال</p>
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                            {getStatusText(order.status)}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2 space-x-reverse">
                        <button className="flex items-center px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700">
                          <FaCheck className="w-3 h-3 mr-1" />
                          قبول
                        </button>
                        <button className="flex items-center px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700">
                          <FaTimes className="w-3 h-3 mr-1" />
                          رفض
                        </button>
                        <button className="flex items-center px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700">
                          <FaEye className="w-3 h-3 mr-1" />
                          تفاصيل
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">المنتجات</h2>
              <button
                onClick={() => setShowAddProduct(true)}
                className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              >
                <FaPlus className="w-4 h-4 mr-2" />
                إضافة منتج
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{product.name}</h3>
                      <div className="flex space-x-1 space-x-reverse">
                        <button className="p-1 text-blue-600 hover:text-blue-800">
                          <FaEdit className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-red-600 hover:text-red-800">
                          <FaTrash className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                    <p className="font-semibold text-primary-600">{product.price} ريال</p>
                    <div className="mt-2">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        product.isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {product.isAvailable ? 'متاح' : 'غير متاح'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">إجمالي الطلبات اليوم</h3>
              <p className="text-3xl font-bold text-primary-600">24</p>
              <p className="text-sm text-gray-600 mt-1">+12% من أمس</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">إجمالي المبيعات اليوم</h3>
              <p className="text-3xl font-bold text-primary-600">1,250 ريال</p>
              <p className="text-sm text-gray-600 mt-1">+8% من أمس</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">متوسط تقييم العملاء</h3>
              <p className="text-3xl font-bold text-primary-600">4.5</p>
              <p className="text-sm text-gray-600 mt-1">من 5 نجوم</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantDashboard; 