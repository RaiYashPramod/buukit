import React, { useState, useEffect } from 'react';
import { CheckIcon, ShoppingCartIcon } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/services/slices/cartSlice';
import { RootState } from '@/services/store';

interface AnimatedAddToCartButtonProps {
  buttonColor: string;
  buttonTextColor: string;
  initialText: React.ReactNode;
  changeText: React.ReactNode;
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
    description: string;
  };
}

export const AnimatedAddToCartButton: React.FC<AnimatedAddToCartButtonProps> = ({
  buttonColor,
  buttonTextColor,
  initialText,
  changeText,
  product
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const isProductInCart = cartItems.some(item => item.id === product.id);

  useEffect(() => {
    setIsAdded(isProductInCart);
  }, [cartItems, product.id, isProductInCart]);

  const handleAddToCart = () => {
    if (!isProductInCart) {
      dispatch(addToCart({ id: product.id, name: product.name, image: product.image, price: product.price, quantity: 1 }));
    }
    setIsAdded(true); 
  };

  return (
    <button
      onClick={handleAddToCart}
      style={{ backgroundColor: buttonColor, color: buttonTextColor }}
      className="inline-flex items-center px-4 py-2 rounded transition-transform duration-300 group"
    >
      {isAdded ? (
        <span className="group inline-flex items-center">
          {changeText}
        </span>
      ) : (
        <span className="group inline-flex items-center">
          {initialText}
        </span>
      )}
    </button>
  );
};
