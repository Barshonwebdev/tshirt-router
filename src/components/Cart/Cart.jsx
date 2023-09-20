import React from 'react';
import './Cart.css'
const Cart = ({cart, removeFromCart}) => {
    return (
        <div>
            <p>Cart Summary</p>
            <h3>Selected items in total: {cart.length}</h3>
            {
                cart.map(product=><p key={product._id}>{product.name} <button onClick={()=>removeFromCart(product._id)}>remove</button></p>)
            }
        </div>
    );
};

export default Cart;