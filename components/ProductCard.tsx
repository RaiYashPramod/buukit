'use client'
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../services/slices/cartslice';
import { CheckIcon, ShoppingCartIcon } from 'lucide-react';
import { AnimatedAddToCartButton } from './Button';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  return (
    <div className="bg-white  rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex flex-col items-center justify-between mb-4">
          <span className="text-lg font-bold text-gray-900 ">${product.price.toFixed(2)}</span>
          <div className="flex space-x-2">
          <AnimatedAddToCartButton
            buttonColor="#ff6f61" // Customize button color
            buttonTextColor="#ffffff" // Customize button text color
            product={product}
            initialText={
              <span className="group inline-flex items-center">
                Add to Cart{" "}
                <ShoppingCartIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            }
            changeText={
              <span className="group inline-flex items-center">
                <CheckIcon className="mr-2 h-4 w-4" />
                Added to Cart{" "}
              </span>
            }
          />
            {/* <button
              onClick={() => onAddToWishlist(product.id)}
              className="bg-gray-300 text-gray-800 text-sm px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
            >
              Add to Wishlist
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
