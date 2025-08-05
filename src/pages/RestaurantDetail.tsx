import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { mockRestaurants, mockProducts } from '../utils/mockData';
import { FaStar, FaClock, FaMotorcycle, FaPlus, FaMinus } from 'react-icons/fa';

const RestaurantDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const restaurant = mockRestaurants.find(r => r.id === id);
  const products = mockProducts.filter(p => p.restaurantId === id);

  const categories = ['الكل', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'الكل' || product.category === selectedCategory
  );

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">المطعم غير موجود</h2>
          <p className="text-gray-600">عذراً، المطعم الذي تبحث عنه غير متاح</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Restaurant Header */}
      <div className="relative h-64">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
          <p className="text-lg mb-2">{restaurant.description}</p>
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="flex items-center">
              <FaStar className="text-yellow-400 w-5 h-5" />
              <span className="mr-1">{restaurant.rating}</span>
            </div>
            <div className="flex items-center">
              <FaClock className="w-4 h-4 mr-1" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center">
              <FaMotorcycle className="w-4 h-4 mr-1" />
              <span>{restaurant.deliveryFee} ريال</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Restaurant Info */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">العنوان</h3>
              <p className="text-gray-600">{restaurant.address}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">الهاتف</h3>
              <p className="text-gray-600">{restaurant.phone}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">الحد الأدنى للطلب</h3>
              <p className="text-gray-600">{restaurant.minOrder} ريال</p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">لا توجد منتجات متاحة في هذه الفئة</p>
          </div>
        )}
      </div>
    </div>
  );
};

interface ProductCardProps {
  product: any;
  onAddToCart: (product: any, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (quantity > 0) {
      onAddToCart(product, quantity);
      setQuantity(0);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 space-x-reverse">
            <button
              onClick={() => setQuantity(Math.max(0, quantity - 1))}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <FaMinus className="w-3 h-3" />
            </button>
            
            <span className="w-8 text-center font-semibold">{quantity}</span>
            
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <FaPlus className="w-3 h-3" />
            </button>
          </div>
          
          <div className="text-right">
            <p className="font-semibold text-primary-600">{product.price} ريال</p>
            <button
              onClick={handleAddToCart}
              disabled={quantity === 0}
              className="mt-2 bg-primary-600 text-white px-3 py-1 rounded text-sm hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              إضافة للسلة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail; 