import React from 'react';
import './Tshirt.css';
const Tshirt = ({tshirt,handleCart}) => {
    const {price,picture,name}=tshirt;
    return (
        <div className='each-tshirt'>
            <img src={picture} alt="" />
            <h3>item: {name}</h3>
            <p>price: ${price}</p>
            <button onClick={()=>handleCart(tshirt)}>Buy!</button>
        </div>
    );
};

export default Tshirt;