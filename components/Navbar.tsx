'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Cart from './Cart';
import { ShoppingCart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <section className='bg-black/30 shadow-lg shadow-slate-500 top-0 left-0 w-full z-10 backdrop-blur-md fixed'>
        <div className='container mx-auto py-4 text-[24px] flex justify-between items-center px-4'>
          <div className="cursor-pointer">
            <Link href='/'>Buukit</Link>
          </div>

          <div>
            <button
              onClick={toggleSidebar}
              className='text-white hover:text-gray-300 focus:outline-none'
            >
              <ShoppingCart />
            </button>
          </div>
        </div>
      </section>

      {/* Sidebar */}
      <div
        className={`z-20 fixed top-0 right-0 h-full w-1/3 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}
      >
        <Cart isOpen={isSidebarOpen} onClose={toggleSidebar} />

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-9"
          onClick={toggleSidebar}
        ></div>
      )}
      </div>
    </>
  );
};

export default Navbar;
