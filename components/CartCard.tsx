import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../services/slices/cartSlice'; // Make sure this path is correct
import { updateCartItem } from '../services/slices/cartSlice';

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartCardProps {
  item: CartItem;
}

const CartCard: React.FC<CartCardProps> = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    // Update cart item quantity in Redux store when quantity changes
    dispatch(updateCartItem({id: item.id, quantity}));
  }, [dispatch, item.id, quantity]);

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  const totalPrice = (item.price * quantity).toFixed(2);

  return (
    <div className="flex items-center p-4 border-b border-gray-200">
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
      <div className="flex flex-col flex-grow">
        <span className="text-lg font-semibold">{item.name}</span>
        <span className="text-gray-600">${totalPrice} {quantity > 1 ? `($${item.price})` : ""}</span>
        <div className="flex items-center mt-2">
          <label htmlFor={`quantity-${item.id}`} className="mr-2 text-gray-600">Quantity:</label>
          <input
            id={`quantity-${item.id}`}
            type="range"
            min="1"
            max="10"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-24"
          />
          <span className="ml-2">{quantity}</span>
        </div>
      </div>
      <button
        onClick={handleRemove}
        className="text-red-500 hover:text-red-700 ml-4 text-3xl"
      >
        ×
      </button>
    </div>
  );
};

export default CartCard;
