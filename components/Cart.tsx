import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../services/store';
import { removeFromCart, clearCart } from '../services/slices/cartslice';
import CartCard from './CartCard';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  
  const handleCheckout = () => {
    alert('Proceeding to checkout...');
  };


  return (
    <div
      className={`fixed top-0 right-0 h-full w-full bg-black shadow-lg transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } z-20`}
    >
      <div className="p-6 relative">
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-800 absolute top-4 right-4 text-3xl"
        >
          ×
        </button>

        <div>
          <ul>
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cartItems.map(item => (
                  <CartCard key={item.id} item={item} />
              ))
            )}
          </ul>
          {cartItems.length > 0 && (
            <div className="mt-4">
            <div className="flex justify-between text-lg font-semibold mb-4">
              <span>Total Price:</span>
              <span>${totalPrice}</span>
            </div>
            <button
              onClick={handleClearCart}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mr-4"
            >
              Clear Cart
            </button>
            <button
              onClick={handleCheckout}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Checkout
            </button>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
