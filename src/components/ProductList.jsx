import React from 'react'
import Product from './Product'

const products = [
    {id: 1, name: 'Product 1', price: 29.99},
    {id: 2, name: 'Product 2', price: 49.99},
    {id: 3, name: 'Product 3', price: 79.99}
]
export default function ProductList() {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product}/>
      ))}
    </div>
  )
}

