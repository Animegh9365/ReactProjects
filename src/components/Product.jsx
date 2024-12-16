import {useDispatch} from 'react-redux'
import React from 'react'
import {addToCart} from '../store'

export default function Product({product}) {
    const dispatch = useDispatch()
  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
    </div>
  )
}
