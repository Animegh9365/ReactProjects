import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adjustQuantity, removeFromCart } from '../store'

export default function Cart() {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(removeFromCart(id))
    } 

    const handleAdjustQuantity = (id, quantity) => {
        dispatch(adjustQuantity(id, quantity))
    }
    if(cart.items.length === 0) {
        return (
            <div>
                <h2>Shopping Cart</h2>
                <p>Your cart is empty!</p>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Shopping Cart</h2>
                <ul>
                    {cart.items.map((item) => (
                        <li key={item.id}>
                        <span>{item.name}</span>
                        <span>Price: ${item.price}</span>
                        <span>
                            Quantity: 
                            <button onClick={()=> handleAdjustQuantity(item.id, item.quantity - 1)}>-</button>
                            {item.quantity}
                            <button onClick={() => handleAdjustQuantity(item.id, item.quantity + 1)}>+</button>

                        </span>
                        <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>
                        <button onClick={()=> handleRemove(item.id)}>Remove</button>

                    </li>
                    ))}
                    
                </ul>
                <h2>Total Amount: ${cart.totalAmount.toFixed(2)}</h2>
                <button>Proceed to Checkout</button>
            </div>
        )
    }
}
