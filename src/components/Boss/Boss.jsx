import React from 'react';
import './Boss.css'
import Manager from '../Manager/Manager';
import Ceo from '../CEO/Ceo';
import Cto from '../CTO/Cto';
const Boss = () => {
    const power='power';
    return (
      <div className="container">
        <div className="boss">
          <p>Boss</p>
          <p>{power}</p>
        </div>
        <div className='employee'>
          <Manager power={power}></Manager>
          <Ceo></Ceo>
          <Cto></Cto>
        </div>
      </div>
    );
};

export default Boss;