import React from 'react';
import './Cart.css'
const Cart = ({cart, removeFromCart}) => {
    let message;
    if(cart.length===0){
         message= <p>buy!</p>
    }
    else {
        message= <p>yay</p>
    }
    
    return (
        <div>
            <p className={`font ${cart.length==2? 'red' : 'blue'}`}>Cart Summary</p>
            <h3>Selected items in total: {cart.length}</h3>
            {message}
            {
                cart.length>2 
                ? <p>more</p> 
                : <p>fokira</p>
            }
            {
                cart.length>5 && <p>alright</p>
            }
            {
                cart.length>5 || <p>not alright</p>
            }
            {
                cart.map(product=><p key={product._id}>{product.name} <button onClick={()=>removeFromCart(product._id)}>remove</button></p>)
            }
        </div>
    );
};

export default Cart;