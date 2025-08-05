import { Restaurant, Product, User, Driver } from '../types';

export const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'مطعم الشرق',
    description: 'أفضل المأكولات الشرقية التقليدية',
    category: 'مطاعم شرقية',
    address: 'شارع الملك فهد، الرياض',
    phone: '+966501234567',
    rating: 4.5,
    deliveryTime: '30-45 دقيقة',
    deliveryFee: 15,
    minOrder: 50,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400',
    isOpen: true,
    coordinates: { lat: 24.7136, lng: 46.6753 }
  },
  {
    id: '2',
    name: 'مطعم البحر المتوسط',
    description: 'مأكولات بحر متوسطية طازجة',
    category: 'مطاعم بحر متوسطية',
    address: 'شارع التحلية، جدة',
    phone: '+966501234568',
    rating: 4.3,
    deliveryTime: '25-40 دقيقة',
    deliveryFee: 12,
    minOrder: 40,
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400',
    isOpen: true,
    coordinates: { lat: 21.4858, lng: 39.1925 }
  },
  {
    id: '3',
    name: 'مطعم البيتزا الإيطالية',
    description: 'بيتزا إيطالية أصلية',
    category: 'مطاعم إيطالية',
    address: 'شارع العليا، الرياض',
    phone: '+966501234569',
    rating: 4.7,
    deliveryTime: '20-35 دقيقة',
    deliveryFee: 10,
    minOrder: 35,
    image: 'https://images.unsplash.com/photo-1565299624942-b28ea40a0ca6?w=400',
    isOpen: true,
    coordinates: { lat: 24.7136, lng: 46.6753 }
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'كباب لحم',
    description: 'كباب لحم طازج مع الخبز والصلصة',
    price: 45,
    image: 'https://images.unsplash.com/photo-1565299624942-b28ea40a0ca6?w=400',
    category: 'أطباق رئيسية',
    restaurantId: '1',
    isAvailable: true,
    preparationTime: 15
  },
  {
    id: '2',
    name: 'شاورما دجاج',
    description: 'شاورما دجاج مع الخضار والصلصة',
    price: 35,
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400',
    category: 'أطباق رئيسية',
    restaurantId: '1',
    isAvailable: true,
    preparationTime: 10
  },
  {
    id: '3',
    name: 'بيتزا مارجريتا',
    description: 'بيتزا مارجريتا كلاسيكية',
    price: 55,
    image: 'https://images.unsplash.com/photo-1565299624942-b28ea40a0ca6?w=400',
    category: 'بيتزا',
    restaurantId: '3',
    isAvailable: true,
    preparationTime: 20
  },
  {
    id: '4',
    name: 'سلطة يونانية',
    description: 'سلطة يونانية طازجة',
    price: 25,
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400',
    category: 'سلطات',
    restaurantId: '2',
    isAvailable: true,
    preparationTime: 8
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'أحمد محمد',
    email: 'ahmed@example.com',
    phone: '+966501234567',
    role: 'customer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
  },
  {
    id: '2',
    name: 'فاطمة علي',
    email: 'fatima@example.com',
    phone: '+966501234568',
    role: 'restaurant',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100'
  }
];

export const mockDrivers: Driver[] = [
  {
    id: '1',
    name: 'محمد السائق',
    phone: '+966501234569',
    vehicleType: 'دراجة نارية',
    vehicleNumber: 'ABC123',
    isAvailable: true,
    rating: 4.8,
    totalDeliveries: 150,
    currentLocation: { lat: 24.7136, lng: 46.6753 }
  },
  {
    id: '2',
    name: 'علي السائق',
    phone: '+966501234570',
    vehicleType: 'سيارة',
    vehicleNumber: 'XYZ789',
    isAvailable: true,
    rating: 4.6,
    totalDeliveries: 120,
    currentLocation: { lat: 24.7136, lng: 46.6753 }
  }
]; 