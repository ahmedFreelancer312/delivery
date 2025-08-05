import React, { useState } from 'react';
import { FaUsers, FaStore, FaMotorcycle, FaChartBar, FaCheck, FaTimes, FaEye, FaMoneyBillWave } from 'react-icons/fa';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const stats = {
    totalUsers: 1250,
    totalRestaurants: 45,
    totalDrivers: 120,
    totalOrders: 850,
    totalRevenue: 45000,
  };

  const pendingApprovals = [
    {
      id: '1',
      type: 'restaurant',
      name: 'مطعم الشرق الجديد',
      email: 'restaurant@example.com',
      phone: '+966501234567',
      status: 'pending',
    },
    {
      id: '2',
      type: 'driver',
      name: 'أحمد السائق',
      email: 'driver@example.com',
      phone: '+966501234568',
      status: 'pending',
    },
  ];

  const recentOrders = [
    {
      id: '1',
      customerName: 'أحمد محمد',
      restaurantName: 'مطعم الشرق',
      total: 80,
      status: 'delivered',
      time: '14:30',
    },
    {
      id: '2',
      customerName: 'فاطمة علي',
      restaurantName: 'مطعم البيتزا الإيطالية',
      total: 55,
      status: 'preparing',
      time: '14:25',
    },
  ];

  // Mock commission and delivery fee data
  const commissionSettings = {
    restaurantCommission: 15, // 15% commission
    deliveryFees: [
      { distance: '0-5 كم', fee: 10 },
      { distance: '5-10 كم', fee: 15 },
      { distance: '10+ كم', fee: 20 },
    ],
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'preparing':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'في الانتظار';
      case 'approved':
        return 'مقبول';
      case 'rejected':
        return 'مرفوض';
      case 'delivered':
        return 'تم التوصيل';
      case 'preparing':
        return 'قيد التحضير';
      default:
        return 'غير معروف';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">لوحة تحكم الإدارة</h1>
          <p className="text-gray-600 mt-2">إدارة المنصة والمراقبة الشاملة</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FaUsers className="w-6 h-6 text-blue-600" />
              </div>
              <div className="mr-4">
                <p className="text-sm text-gray-600">إجمالي المستخدمين</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <FaStore className="w-6 h-6 text-green-600" />
              </div>
              <div className="mr-4">
                <p className="text-sm text-gray-600">المطاعم</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalRestaurants}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <FaMotorcycle className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="mr-4">
                <p className="text-sm text-gray-600">السائقين</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalDrivers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <FaChartBar className="w-6 h-6 text-purple-600" />
              </div>
              <div className="mr-4">
                <p className="text-sm text-gray-600">الطلبات اليوم</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold">ر</span>
              </div>
              <div className="mr-4">
                <p className="text-sm text-gray-600">الإيرادات اليوم</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalRevenue} ريال</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8 space-x-reverse">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              نظرة عامة
            </button>
            <button
              onClick={() => setActiveTab('approvals')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'approvals'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              طلبات الموافقة
            </button>
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
              onClick={() => setActiveTab('analytics')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'analytics'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              التحليلات
            </button>
            <button
              onClick={() => setActiveTab('commissions')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'commissions'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              إدارة الرسوم
            </button>
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">طلبات الموافقة الجديدة</h2>
              </div>
              <div className="p-6">
                {pendingApprovals.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">لا توجد طلبات جديدة</p>
                ) : (
                  <div className="space-y-4">
                    {pendingApprovals.map((approval) => (
                      <div key={approval.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-gray-900">{approval.name}</h3>
                            <p className="text-sm text-gray-600">{approval.email}</p>
                            <p className="text-sm text-gray-500">{approval.phone}</p>
                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                              {approval.type === 'restaurant' ? 'مطعم' : 'سائق'}
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

            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">أحدث الطلبات</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">{order.customerName}</h3>
                          <p className="text-sm text-gray-600">{order.restaurantName}</p>
                          <p className="text-sm text-gray-500">الوقت: {order.time}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{order.total} ريال</p>
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                            {getStatusText(order.status)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'approvals' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">إدارة طلبات الموافقة</h2>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        النوع
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        الاسم
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        البريد الإلكتروني
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        الهاتف
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        الحالة
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        الإجراءات
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {pendingApprovals.map((approval) => (
                      <tr key={approval.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            approval.type === 'restaurant' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {approval.type === 'restaurant' ? 'مطعم' : 'سائق'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {approval.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {approval.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {approval.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(approval.status)}`}>
                            {getStatusText(approval.status)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2 space-x-reverse">
                            <button className="text-green-600 hover:text-green-900">قبول</button>
                            <button className="text-red-600 hover:text-red-900">رفض</button>
                            <button className="text-blue-600 hover:text-blue-900">تفاصيل</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">إدارة الطلبات</h2>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        العميل
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        المطعم
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        المبلغ
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        الحالة
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        الوقت
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentOrders.map((order) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {order.customerName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.restaurantName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {order.total} ريال
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                            {getStatusText(order.status)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">إحصائيات المبيعات</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">إجمالي المبيعات اليوم:</span>
                  <span className="font-semibold">{stats.totalRevenue} ريال</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">عدد الطلبات اليوم:</span>
                  <span className="font-semibold">{stats.totalOrders}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">متوسط قيمة الطلب:</span>
                  <span className="font-semibold">{(stats.totalRevenue / stats.totalOrders).toFixed(2)} ريال</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">إحصائيات المستخدمين</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">إجمالي المستخدمين:</span>
                  <span className="font-semibold">{stats.totalUsers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">المطاعم النشطة:</span>
                  <span className="font-semibold">{stats.totalRestaurants}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">السائقين النشطين:</span>
                  <span className="font-semibold">{stats.totalDrivers}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'commissions' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">إدارة الرسوم والعمولات</h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {/* Commission Rate */}
                <div>
                  <h3 className="text-md font-semibold text-gray-900 mb-2">نسبة العمولة للمطاعم</h3>
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <input
                      type="number"
                      defaultValue={commissionSettings.restaurantCommission}
                      className="w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="النسبة (%)"
                    />
                    <span className="text-gray-600">%</span>
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                      حفظ
                    </button>
                  </div>
                </div>

                {/* Delivery Fees */}
                <div>
                  <h3 className="text-md font-semibold text-gray-900 mb-2">رسوم التوصيل حسب المسافة</h3>
                  <div className="space-y-4">
                    {commissionSettings.deliveryFees.map((fee, index) => (
                      <div key={index} className="flex items-center space-x-4 space-x-reverse">
                        <span className="text-gray-600">{fee.distance}</span>
                        <input
                          type="number"
                          defaultValue={fee.fee}
                          className="w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                          placeholder="الرسوم (ريال)"
                        />
                        <span className="text-gray-600">ريال</span>
                        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                          حفظ
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;