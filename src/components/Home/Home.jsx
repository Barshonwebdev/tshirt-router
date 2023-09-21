import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';
import Cart from '../Cart/Cart';
import toast from "react-hot-toast";


const Home = () => {
    
    const tshirts=useLoaderData();
    const [cart,setCart]=useState([]);
    const handleCart=(tshirt)=>{
      const exists= cart.find(product=>product._id==tshirt._id);
        if (exists){
            toast("You have already selected this item once");
        }

        else{
          const newCart = [...cart, tshirt];
          setCart(newCart);
        }

        
    }

    const removeFromCart=(id)=>{
      const remaining= cart.filter(product=>product._id!==id);
      setCart(remaining);
    }
    return (
      <div className="home-container">
        <div className="tshirt-container">
          {tshirts.map((tshirt) => (
            <Tshirt key={tshirt._id} tshirt={tshirt} handleCart={handleCart}></Tshirt>
          ))}
        </div>

        <div className='cart-container'>
            <Cart removeFromCart={removeFromCart} cart={cart}></Cart>
        </div>
      </div>
    );
};

export default Home;