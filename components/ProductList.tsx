import React from 'react'
import products from '../products.json'
import ProductCard from "@/components/ProductCard";

const ProductList = () => {
  return (
    <>
      <div className="container mx-auto mt-16 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  )
}

export default ProductList