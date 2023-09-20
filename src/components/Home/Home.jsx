import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';
import Cart from '../Cart/Cart';

const Home = () => {
    const tshirts=useLoaderData();
    const [cart,setCart]=useState([]);
    const handleCart=(tshirt)=>{
        console.log(tshirt);
    }
    return (
      <div className="home-container">
        <div className="tshirt-container">
          {tshirts.map((tshirt) => (
            <Tshirt key={tshirt._id} tshirt={tshirt} handleCart={handleCart}></Tshirt>
          ))}
        </div>

        <div className='cart-container'>
            <Cart></Cart>
        </div>
      </div>
    );
};

export default Home;