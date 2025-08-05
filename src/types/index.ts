export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'customer' | 'restaurant' | 'driver' | 'admin';
  avatar?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  category: string;
  address: string;
  phone: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  minOrder: number;
  image: string;
  isOpen: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  restaurantId: string;
  isAvailable: boolean;
  preparationTime: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  restaurantId: string;
}

export interface Order {
  id: string;
  customerId: string;
  restaurantId: string;
  driverId?: string;
  items: CartItem[];
  totalAmount: number;
  deliveryFee: number;
  status: 'pending' | 'accepted' | 'preparing' | 'ready' | 'picked' | 'delivered' | 'cancelled';
  deliveryAddress: string;
  customerPhone: string;
  customerName: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  estimatedDeliveryTime?: Date;
}

export interface Driver {
  id: string;
  name: string;
  phone: string;
  vehicleType: string;
  vehicleNumber: string;
  isAvailable: boolean;
  currentLocation?: {
    lat: number;
    lng: number;
  };
  rating: number;
  totalDeliveries: number;
}

export interface Review {
  id: string;
  orderId: string;
  customerId: string;
  restaurantId: string;
  rating: number;
  comment?: string;
  createdAt: Date;
} 