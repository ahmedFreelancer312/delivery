import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaCheck, FaTimes, FaMotorcycle, FaStar } from 'react-icons/fa';

const DriverDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const [isOnline, setIsOnline] = useState(true);

  // Mock data
  const availableOrders = [
    {
      id: '1',
      restaurantName: 'مطعم الشرق',
      customerName: 'أحمد محمد',
      address: 'شارع الملك فهد، الرياض',
      items: ['كباب لحم', 'شاورما دجاج'],
      total: 80,
      distance: '2.5 كم',
      estimatedTime: '15 دقيقة'
    },
    {
      id: '2',
      restaurantName: 'مطعم البيتزا الإيطالية',
      customerName: 'فاطمة علي',
      address: 'شارع العليا، الرياض',
      items: ['بيتزا مارجريتا'],
      total: 55,
      distance: '1.8 كم',
      estimatedTime: '12 دقيقة'
    }
  ];

  const currentOrder = {
    id: '3',
    restaurantName: 'مطعم البحر المتوسط',
    customerName: 'محمد أحمد',
    address: 'شارع التحلية، جدة',
    items: ['سلطة يونانية'],
    total: 25,
    status: 'picked',
    estimatedTime: '8 دقيقة'
  };

  const earnings = {
    today: 150,
    week: 850,
    month: 3200,
    totalDeliveries: 45
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">لوحة تحكم السائق</h1>
              <p className="text-gray-600 mt-2">مرحباً محمد السائق</p>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="flex items-center">
                <span className={`w-3 h-3 rounded-full mr-2 ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className="text-sm text-gray-600">{isOnline ? 'متصل' : 'غير متصل'}</span>
              </div>
              <button
                onClick={() => setIsOnline(!isOnline)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  isOnline
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {isOnline ? 'إيقاف الاتصال' : 'تشغيل الاتصال'}
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <FaMotorcycle className="w-6 h-6 text-green-600" />
              </div>
              <div className="mr-4">
                <p className="text-sm text-gray-600">التوصيلات اليوم</p>
                <p className="text-2xl font-bold text-gray-900">{earnings.totalDeliveries}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FaStar className="w-6 h-6 text-blue-600" />
              </div>
              <div className="mr-4">
                <p className="text-sm text-gray-600">التقييم</p>
                <p className="text-2xl font-bold text-gray-900">4.8</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 font-bold">ر</span>
              </div>
              <div className="mr-4">
                <p className="text-sm text-gray-600">الأرباح اليوم</p>
                <p className="text-2xl font-bold text-gray-900">{earnings.today} ريال</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">ر</span>
              </div>
              <div className="mr-4">
                <p className="text-sm text-gray-600">الأرباح الأسبوعية</p>
                <p className="text-2xl font-bold text-gray-900">{earnings.week} ريال</p>
              </div>
            </div>
          </div>
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
              الطلبات المتاحة
            </button>
            <button
              onClick={() => setActiveTab('current')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'current'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              الطلب الحالي
            </button>
            <button
              onClick={() => setActiveTab('earnings')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'earnings'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              الأرباح
            </button>
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">الطلبات المتاحة</h2>
            </div>
            <div className="p-6">
              {availableOrders.length === 0 ? (
                <p className="text-gray-500 text-center py-8">لا توجد طلبات متاحة حالياً</p>
              ) : (
                <div className="space-y-4">
                  {availableOrders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">{order.restaurantName}</h3>
                          <p className="text-sm text-gray-600">{order.customerName}</p>
                          <div className="flex items-center mt-2">
                            <FaMapMarkerAlt className="w-4 h-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-600">{order.address}</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{order.items.join('، ')}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{order.total} ريال</p>
                          <p className="text-sm text-gray-600">{order.distance}</p>
                          <p className="text-sm text-gray-500">{order.estimatedTime}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2 space-x-reverse">
                        <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                          <FaCheck className="w-4 h-4 mr-2" />
                          قبول الطلب
                        </button>
                        <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                          <FaPhone className="w-4 h-4 mr-2" />
                          الاتصال
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'current' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">الطلب الحالي</h2>
            </div>
            <div className="p-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">{currentOrder.restaurantName}</h3>
                    <p className="text-sm text-gray-600">{currentOrder.customerName}</p>
                    <div className="flex items-center mt-2">
                      <FaMapMarkerAlt className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">{currentOrder.address}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{currentOrder.items.join('، ')}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{currentOrder.total} ريال</p>
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      تم الاستلام
                    </span>
                    <p className="text-sm text-gray-500 mt-1">{currentOrder.estimatedTime}</p>
                  </div>
                </div>
                <div className="flex space-x-2 space-x-reverse">
                  <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    <FaCheck className="w-4 h-4 mr-2" />
                    تم التوصيل
                  </button>
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <FaPhone className="w-4 h-4 mr-2" />
                    الاتصال بالعميل
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'earnings' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">ملخص الأرباح</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">اليوم:</span>
                  <span className="font-semibold">{earnings.today} ريال</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">هذا الأسبوع:</span>
                  <span className="font-semibold">{earnings.week} ريال</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">هذا الشهر:</span>
                  <span className="font-semibold">{earnings.month} ريال</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-900">إجمالي التوصيلات:</span>
                    <span className="text-lg font-bold text-gray-900">{earnings.totalDeliveries}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">أفضل الأيام</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">السبت</span>
                  <span className="font-semibold">250 ريال</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">الأحد</span>
                  <span className="font-semibold">220 ريال</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">الخميس</span>
                  <span className="font-semibold">200 ريال</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DriverDashboard; 